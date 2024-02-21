import React from "react";
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Input, Button } from 'reactstrap';

// List Item Component (Child Component/Helper Component/Supportive Component)
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <Input 
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className="mx-3">
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </div>
      <Button 
        className="ms-auto" 
        color={todo.isComplete ? 'danger' : 'success'} 
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? 'Completed' : 'Running'}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

// List View Component (Main Component)
const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <ListItem 
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default ListView;