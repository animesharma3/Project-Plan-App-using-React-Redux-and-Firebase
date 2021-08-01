export const signIn = (credentials) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            const firebase = getFirebase()
            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password,
            )
            dispatch({ type: 'LOGIN_SUCCESS' })     
        } catch (error) {
            dispatch({ type: 'LOGIN_ERROR', error })                 
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        await firebase.auth().signOut()

        dispatch({ type: 'SIGNOUT_SUCCESS' })
    }
}

export const signUp = (newUser) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firebase = getFirebase()
            const firestore = getFirestore()
    
            const response = await firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )
    
            const user = firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
    
            dispatch({ type: 'SIGNUP_SUCCESS' })   
        } catch (err) {
            console.log(err.message)
            dispatch({ type: 'SIGNUP_ERROR', err })
        }
    }
}