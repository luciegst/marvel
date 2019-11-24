import React, { Component } from 'react';
import './Home.css';
import { Container, Row, Col } from 'reactstrap';
import MarvelCard from './MarvelCard';
import SearchBar from './SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marvelCharacters: [],
      }
  }



  componentDidMount() {
    fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=52828e19af8caa716a414cde84b567b6&hash=1f2d98eb155ea50ec3a0ba8b2753070b')
        .then(results => results.json())
        .then(data => {
             this.setState({
              marvelCharacters: data.data.results,
            }); 
        });
} 

  render() { 
    const listFilter = this.state.marvelCharacters
    return (
      <div>
        <Container>
          <Row>
            <img className='img-fluid' src="/assets/marvel.png" alt="banner" />
          </Row>
          <Row>
            <Col>
            <SearchBar />
            </Col>
          </Row>
          <Row>
             {listFilter.map(character => (
               <Col md={3} key={character.name}>
               <MarvelCard
                poster={`${character.thumbnail.path}/portrait_fantastic.jpg`}
                title={character.name}
                resume={character.description}/>
               </Col>
            ))}
          </Row>
        </Container>
      </div>
      );
  }
}
 
export default Home;