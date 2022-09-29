import React from 'react';

const Home= ({name, setname})=>{
    
    return (
        <>
        <section className='section'>
            <h4>Hello :-  {name}</h4>
            <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}}  placeholder='please input your name' />
        </section>
        </>
    )
}

export default Home;