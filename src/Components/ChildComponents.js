import React from 'react';
import GrandChildComponents from './GrandChildComponents';

const ChildComponents= ({name, setname})=>{
    return (
        <>
        <div>
            <h4>Hello i m ChildComponents</h4>
            <hr />
            <GrandChildComponents name={name} setname={setname} />
        </div>
        </>
    )
}

export default ChildComponents;