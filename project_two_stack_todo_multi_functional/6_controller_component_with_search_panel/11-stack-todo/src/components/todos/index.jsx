import React from "react";

import ListView from '../listview';
import TableView from '../tableview';

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: 'dsfsdfds1',
        text: 'main todo text 1',
        description: 'simple description 1',
        time: new Date(),
        isComplete: false,
        isSelect: false
      },
      {
        id: 'dsfsdfds2',
        text: 'main todo text 2',
        description: 'simple description 2',
        time: new Date(),
        isComplete: false,
        isSelect: false
      }
    ]
  };

  toggleSelect = todoId => {};

  toggleComplete = todoId => {};

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <div>
          <ListView 
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <TableView 
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
      </div>
    );
  }
}

export default Todos;

/**
 * In this lecture (3_list_view), we will work with List View.
 * What will our view look like when we want to show to-do in the form of list items?
 * Today in this lecture (3_list_view), we will generate a view of what a complete list, a 'to-do list' will look like.
 * But the thing is, to do this work, we first need to know what the shape of the 'to-do' will be, that is, what will a 'to-do' look like?
 * For example, I am putting it here as a reference:
 */

/* const todo = {
  id: 'dsfsdfds',
  text: 'main todo text',
  description: 'simple description',
  time: 'adasdsa',
  isComplete: false,
  isSelect: false
}; */

// This is our to-do, the basic shape of an individual to-do. We have to work with this shape in mind.