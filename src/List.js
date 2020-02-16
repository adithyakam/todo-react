import React from'react';
import Todo from './Todo';
import './List.css'

    const List = ({todo, remove}) => {
      // Map through the todos
      const todoNode = todo.map((todo) => {
        return (<Todo todo={todo} key={todo.id} id={todo.id} remove={remove}/>) 
      });
      return (<ul >{todoNode}</ul>);
    }

export default List;