import React, { useReducer, useContext } from "react";

import {userDataReducer} from './Reducers';

const UserData = React.createContext();

const  ContextFunction = ({children})=>{
    const [state, dispatch] = useReducer(userDataReducer, {
        age:0,
        address:'Delhi'
    })
    return(
        <>
            <UserData.Provider value={{state, dispatch}}>
                {children}
            </UserData.Provider>
        </>
    )
}
export default ContextFunction;

export const UserState = ()=>{
    return useContext(UserData);
}