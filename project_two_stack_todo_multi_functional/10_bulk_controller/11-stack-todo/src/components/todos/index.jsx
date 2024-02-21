import React from "react";
import { nanoid } from 'nanoid';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import ListView from '../listview';
import TableView from '../tableview';
import CreateTodoForm from '../create-todo-form';
import Controller from '../controllers';

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: 'dsfsdfds1',
        text: 'main todo text',
        description: 'simple description 1',
        time: new Date(),
        isComplete: false,
        isSelect: false
      },
      {
        id: 'dsfsdfds2',
        text: 'main Another Task',
        description: 'simple description 2',
        time: new Date(),
        isComplete: false,
        isSelect: false
      },
      {
        id: 'dsfsdfds3',
        text: 'New Task',
        description: 'simple description 3',
        time: new Date(),
        isComplete: false,
        isSelect: false
      }
    ],
    isOpenTodoForm: false,
    searchTerm: '',
    view: 'list',
    filter: 'all'
  };

  toggleSelect = todoId => {
    const todos = [...this.state.todos];
    const todo = todos.find(t => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };

  toggleComplete = todoId => {
    const todos = [...this.state.todos];
    const todo = todos.find(t => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm
    });
  };

  handleSearch = value => {
    this.setState({ searchTerm: value });
  };

  createTodo = todo => {
    todo.id = nanoid();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  changeView = event => {
    this.setState({
      view: event.target.value
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter(todo => !todo.isSelect);
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => !todo.isComplete);
    this.setState({ todos });
  };

  reset = () => {
    this.setState({
      filter: 'all',
      searchTerm: '',
      view: 'list',
      isOpenTodoForm: false
    });
  };

  performSearch = () => {
    return this.state.todos.filter(todo => 
      todo.text
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    );
  };

  performFilter = todos => {
    const { filter } = this.state;
    if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    } else if (filter === 'running') {
      return todos.filter(todo => !todo.isComplete);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === 'list' ? (
      <ListView 
        /* todos={this.state.todos} */
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView 
        /* todos={this.state.todos} */
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller 
          term={this.state.searchTerm}
          view={this.state.view}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          changeView={this.changeView}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        {/* <div>
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
        </div> */}
        <div>{this.getView()}</div>
        <Modal 
          isOpen={this.state.isOpenTodoForm} 
          toggle={this.toggleForm}
        >
          <ModalHeader toggle={this.toggleForm}>
            Create a New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
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