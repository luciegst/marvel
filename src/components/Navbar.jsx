import React, { Component } from 'react';
import './Navbar.css';
import classNames from 'classnames';

/*Responsive navbar*/ 
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      }
      this.showMenu = this.showMenu.bind(this)
      }

  showMenu() {
    this.setState({
      status: !this.state.status
    })
  }

  render() { 
    /*classNames use to make dynamic and conditional classNames*/ 
    let navClass = classNames({
      'na': true,
      'na2': this.state.status,
      'change-height': !this.state.status
    });
    let ulClass = classNames({
      'responsive-elements': true,
      'show-menu': this.state.status ,
      'dont-show-menu': !this.state.status,
    });
    let divClass = classNames({
      'navlink-button': true,
      'show-menu': this.state.status ,
      'dont-show-menu': !this.state.status,
    });
    return ( 
    <div className={navClass}>
      <div className="navbar-menu">
        <div href="/home" className="navlogo">
          <img src="/assets/marvel-comics-logo-vector.png" alt="marvel_logo" width="150" height="120"></img>
        </div>
        <i onClick={this.showMenu} className="fas fa-bars"></i>
      </div>
      <ul className={ulClass}>
        <li className="navlink">
          <a className="link" href='/home'>Marvel characters</a>
        </li> 
        <li className="navlink">
          <a className="link" href='/details'>Details</a>
        </li>  
      </ul>
      <div className={divClass}>
        <img src="/assets/avengers.png" alt="avengers_logo" width="150" height="150"></img>
      </div>
    </div>
     );
  }
}
 
export default Navbar;