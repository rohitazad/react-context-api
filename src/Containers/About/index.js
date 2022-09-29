import React from 'react';
import ChildComponents from '../../Components/ChildComponents';
const About= ({name, setname})=>{
    return (
        <>
        <section className='section'>
            <h4>Hello i m About</h4>
            <ChildComponents name={name} setname={setname} />
        </section>
        </>
    )
}

export default About;