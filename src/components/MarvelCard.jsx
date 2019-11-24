import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import './MarvelCard.css';

class MarvelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: false,
      }
      this.showResume = this.showResume.bind(this)
  }

  showResume(){
    this.setState({
      resume: !this.state.resume
    })
  }

  render() { 
    const style = this.state.resume === false ? 'dont-show-resume' : this.state.resume === true ? 'show-resume' : 'dont-show-resume'
    return ( 
      <div>
      <Card className="card-marvel">
        <CardImg src={this.props.poster} alt="poster image" />
        <CardBody>
          <CardTitle className="marvel-name" onClick={this.showResume}>{this.props.title}</CardTitle>
          <CardText className={style}>{this.props.resume}</CardText>
        </CardBody>
      </Card>
    </div>  
     );
  }
}
 
export default MarvelCard;
