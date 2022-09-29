import React from 'react';
import {UserState} from '../../Context/Context';


const Contact= ({name})=>{
    const {state:{age,  address}} = UserState()
    return (
        <>
        <section className='section'>
            <h4>Hello i m Contact</h4>
            <p>My name is :- {name}</p>
            <p>My age is :- {age}</p>
            <p>My addrress is :- {address}</p>
        </section>
        </>
    )
}

export default Contact;