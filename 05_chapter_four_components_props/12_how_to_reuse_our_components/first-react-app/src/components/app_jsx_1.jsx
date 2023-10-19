import React, { Component } from "react";

class App extends Component {
  render() {
    return React.createElement('div', { className: 'App' }, [
      React.createElement('h1', null, 'What is JSX?'),
      React.createElement('p', null, 'JSX is Awesome! JSX means JavaScript Syntax Extension and is occasionally referred to as JavaScript XML.')
    ]);

    // return (
    //   <div className="App">
    //     <h1>What is JSX?</h1>
    //     <p>JSX is Awesome! JSX means JavaScript Syntax Extension and is occasionally referred to as JavaScript XML.</p>
    //   </div>
    // );
  }
}

export default App;

// const element = {
//   type: 'div',
//   props: {
//     className: 'test',
//     title: 'Test Me'
//   },
//   children: ['h1', 'p', 'img'] | 'Test' | null
// };