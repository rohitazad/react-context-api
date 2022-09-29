import React from 'react';

import { UserState } from '../Context/Context';

const GrandChildComponents= (props)=>{
    const {name, setname} = props
    //console.log('props', props);
    //console.log('UserState', UserState());
    const {state:{age, address},dispatch} =  UserState();
    console.log('age', age, address);

    const handleChangeAge = (e)=>{
        return dispatch({
            type:'ADD_AGE',
            payload:e.target.value
        })
         
    }
    const handleChangeAddress = (e)=>{
        return dispatch({
            type:'ADD_ADDRESS',
            payload:e.target.value
        })
         
    }
    return (
        <>
        <div>
            <h4>Hello i m GrandChildComponents</h4>
            My name is :- {name}
            <button onClick={()=>{setname('Rohit Azad Malik')}}>Click to here  change Name  (Rohit Azad Malik)</button>

            <hr />
            <hr />
            Enter your  age :- <input type="text" value={age} onChange={handleChangeAge} /> <br /><br />
            Enter your  Address :- <textarea value={address} onChange={handleChangeAddress}/>
        </div>
        </>
    )
}

export default GrandChildComponents;