

export const  userDataReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state, age:action.payload
            };
        case 'ADD_ADDRESS':
            return {
                ...state , address:action.payload
            };
        default:
            return {...state}
    }
}