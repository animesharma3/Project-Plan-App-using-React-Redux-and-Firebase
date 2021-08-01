export const createProject = (project) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore()
            const profile = getState().firebase.profile
            const uid = getState().firebase.auth.uid
            await firestore.collection('projects').add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: uid,
                createdAt: new Date()
            })
            dispatch({
                type: 'CREATE_PROJECT', project
            }) 
        } catch (error) {
            dispatch({
                type: 'CREATE_PROJECT_ERROR', error
            }) 
        }
    }
}