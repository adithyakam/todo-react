import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import Form from './Form';
import 'tachyons';
import List from './List';
// // get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class App extends Component{

   onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  getId =()=>{
    const todo = this.state.todo;
    let Id='';
    if(todo.length<1){
       return Id=1;
    }
    
    for(let i=0;i<todo.length;i++){
        Id=todo[i].id;
    }
  
    return Id+1;
  }

  onRemove =(key) =>{
    const todo=this.state.todo;
    let ntodo=[];
        todo.forEach(d => {
          if(d.id!==key){
            
           ntodo.push({"id":d.id,"val":d.val})
          }
        })
        console.log(ntodo);
        console.log(key)
        this.setState({todo:ntodo,input:''})

  }

  onHandleInput = (evt)=>{
   const id=this.getId();
    evt.preventDefault();
    if(this.state.input){
    const val=this.state.input;
    let todo=[];
    todo=this.state.todo
    todo.push({"id":id,"val":val})
    this.setState({todo:todo,input:''})
    }
  }
  
  constructor() {
    super()
    this.state = { 
      input: '',
      todo:[   ]
    }
  }
  render() {
   
    return(
    <div className="flex justify-center ">
      <div  className="flex flex-column justify-center  w-80 ma4">
    <Title />
    <Form onInputChange={this.onInputChange} value={this.state.input} onHandleInput={this.onHandleInput}/>
    <li>
       <List todo={this.state.todo} remove={this.onRemove}/>
    </li>
   </div>
  </div>  
  )
};
}

export default App;
