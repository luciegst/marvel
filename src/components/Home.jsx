import React, { Component } from 'react';
import './Home.css';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Container>
          <Row>
            <img className='img-fluid' src="/assets/marvel.png" alt="banner" />
          </Row>
        </Container>
      </div>
      );
  }
}
 
export default Home;