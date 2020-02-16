import React from'react';
var FontAwesome = require('react-fontawesome');


const Todo = ({todo,remove,id}) => {
    //  return (<div> <div><i className="fas fa-trash-alt"></i></div><li >{todo.val} </li></div>);
    // return (<li onClick(remove(todo.id))>{todo.text}</li>);
    // return <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>;
    
    return (<div className='pa3 bodoni br4 f3 ma3 center w-60 center bg-blue h3-ns '><li>
      <FontAwesome  
      className="fas fa-trash-alt"
      name='trash'
      size='1x'
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} 
      onClick={()=> remove(id)} 
    /> {todo.val}</li></div>);


  }
  export default Todo;