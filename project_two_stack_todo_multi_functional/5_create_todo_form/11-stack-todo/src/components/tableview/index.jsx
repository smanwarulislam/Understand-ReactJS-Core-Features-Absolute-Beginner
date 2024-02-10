import React from "react";
import PropTypes from 'prop-types';
import { Input, Button, Table } from 'reactstrap';

// Row Item Component (Child Component/Helper Component/Supportive Component)
const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <th scope="row">
      <Input 
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
    </th>
    <td>{todo.time.toDateString()}</td>
    <td>{todo.text}</td>
    <td>
      <Button 
        color={todo.isComplete ? 'danger' : 'success'} 
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? 'Completed' : 'Running'}
      </Button>
    </td>
  </tr>
);

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

// Table View Component (Main Component)
const TableView = ({ todos, toggleSelect, toggleComplete }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <RowItem 
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </tbody>
  </Table>
);

TableView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default TableView;