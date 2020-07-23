
const initState = {
    projects:[
        {id:'1', title:'Fc Barcelona will never win', content:'this is a rumour'},
        {id:'2', title:'Fc Barcelona will win today', content:'this is a rumour'},
        {id:'3', title:'Fc Barcelona will lose today', content:'this is a true'}
    ]
};

const projectReducer = (state = initState, action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;
        default:
            return state;
    }
};
export default projectReducer;
