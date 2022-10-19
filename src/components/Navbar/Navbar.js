import { Component } from "react";
import { MenuData } from './MenuData';
import './NavbarStyles.css'

class Navbar extends Component {
  state = {clicked: false};
  handleClick =()=> {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return(
      <nav className="navbar-items">
        <h1><span>NOT</span> CSIHS Forums</h1>
        <div className="menu-icons" onClick={this.handleClick}>
         <i className={this.state.clicked ? "fa-solid fa-x" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return(
              <li key={index}>
               <a href={item.url} class={item.cName}> <i class={item.icon}></i>
               {item.title}</a>
              </li>
            )
          })}

          <li>
            <a href="/" className="nav-links-mobile">Register</a>
          </li>
          <li>
            <a href="/" className="nav-links-mobile">Login</a>
          </li>

        </ul>
      </nav>
    )
  }
}

export default Navbar;
