
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque risus a ullamcorper placerat. Pellentesque non mi rutrum, malesuada lectus ut, tincidunt nunc.
        </p>
      </>
    );
  }
}

export default hot(App);
