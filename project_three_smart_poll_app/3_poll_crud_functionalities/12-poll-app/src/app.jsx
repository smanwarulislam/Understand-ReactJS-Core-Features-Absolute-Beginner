import React from "react";
import { nanoid } from 'nanoid';
import { Container, Row, Col } from 'reactstrap';

import MainContent from './components/main-content';
import Sidebar from './components/sidebar';

import POLLS from './data/polls';

class App extends React.Component {
  state = {
    polls: [],
    selectedPoll: {},
    searchTerm: ''
  };

  // React Lifecycle Methods (Implementation of React Lifecycle Methods)
  componentDidMount() {
    this.setState({ polls: POLLS });
  };

  // Poll CRUD Functionalities
  addNewPoll = poll => {
    poll.id = nanoid();
    poll.created = new Date();
    poll.totalVote = 0;
    poll.opinions = [];

    this.setState({
      polls: this.state.polls.concat(poll)
    });
  };

  updatePoll = updatedPoll => {
    const polls = [...this.state.polls];
    const poll = polls.find(p => p.id === updatedPoll.id);

    poll.title = updatedPoll.title;
    poll.description = updatedPoll.description;
    poll.options = updatedPoll.opinions;

    this.setState({ polls });
  };

  deletePoll = pollId => {
    const polls = this.state.polls.filter(p => p.id !== pollId);
    this.setState({ polls, selectedPoll: {} });
  };

  selectPoll = pollId => {
    const poll = this.state.polls.find(p => p.id === pollId);
    this.setState({ selectPoll: poll });
  };
  
  render() {
    return (
      // <div>
      //   <h1>App Component</h1>
      // </div>
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Sidebar />
          </Col>
          <Col md={8}>
            <MainContent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;