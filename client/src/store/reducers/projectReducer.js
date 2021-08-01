const initState = {
    projects: [
        {id: '1', title: 'Project 1', content: 'yadaydaydaydya'},
        {id: '2', title: 'Project 2', content: 'yadaydaydaydya'},
        {id: '3', title: 'Project 3', content: 'yadaydaydaydya'}
    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log(action.error)
            return state
        default:
            return state
    }
}

export default projectReducer