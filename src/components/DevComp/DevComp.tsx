// DevComp.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const DevComp = () => {
  const [state, setState] = useState(null as any);
  const authState = useSelector((state : any) => state.auth);


  const handleClick = (e:any) => {
    e.preventDefault()
    try {
      let toDisplay = authState
      console.log(toDisplay)
    } catch (error: any) {
      console.error(error)
      setState(error.message)
    }
  }


  return (
    <>
      <h6 className="devcomp">Development Component</h6>
      <h2>Auth State</h2>
      <pre>{JSON.stringify(authState, null, 2)}</pre>
      {state &&(
        <>
        <span className="devcomp__button--span">Info: </span>
        <div>{state}</div>
        </>
      )}
      <button className="devcomp__btn" onClick={handleClick}>
        Show
      </button>
    </>
  );
};

export default DevComp;
