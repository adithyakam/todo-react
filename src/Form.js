import React from'react';



const Form = ({onInputChange,value, onHandleInput}) =>{
return(
  <div className='center '>
      <form onSubmit={(evt)=>onHandleInput(evt)}>
        <input className=" b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 " 
        placeholder="Tyype in here"       
         onChange={onInputChange}
         value={value}
        type="text"></input>
        <button  className="b  p3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-20"
         type="submit">Add</button>
      </form>
  </div>
  )
}

export default Form;