import React, { Component } from 'react';
import './Home.css';
import { Container, Row, Col } from 'reactstrap';
import MarvelCard from './MarvelCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marvelCharacters: [],
      filtered: [],
      }
      this.onChange = this.onChange.bind(this)
  }



  componentDidMount() {
    fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=52828e19af8caa716a414cde84b567b6&hash=1f2d98eb155ea50ec3a0ba8b2753070b')
        .then(results => results.json())
        .then(data => {
             this.setState({
              marvelCharacters: data.data.results,
              filtered: data.data.results
            }); 
        });
} 

  componentWillReceiveProps(nextProps){
    this.setState({
      filtered: nextProps.data
    })
  }

  onChange(e){
    let currentList= [];
    let newList= [];
    //if the searchbar isn't empty
    if (e.target.value !== '') {
      //assign the original list to currentList
      //use filter method to determine which items should be displayed
      currentList= this.state.marvelCharacters
      newList= currentList.filter(item => {
        const marvList= item.name.toLowerCase()
        const filter = e.target.value.toLowerCase()
         // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return marvList.includes(filter)
      })
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.marvelCharacters
    }
    this.setState({
      filtered: newList
    })
  }


  render() { 
    const listFilter = this.state.filtered
    return (
      <div>
        <Container>
          <Row>
            <img className='img-fluid' src="/assets/marvel.png" alt="banner" />
          </Row>
          <Row>
            <Col>
            <form className="search">
            <input 
            type="text" 
            placeholder="Search.." 
            onChange={this.onChange}
            ></input>
            </form>
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