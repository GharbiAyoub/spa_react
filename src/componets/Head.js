import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    NavLink,
} from "react-router-dom";
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: ""
        };
      }

      ShowSearchText(){
          alert('Search');
      }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <NavLink to="/"><a class="navbar-brand" href="#">Home</a>
                    </NavLink>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <NavLink to="/gallery">
                                <a class="nav-link" href="#">gallery <span class="sr-only">(current)</span></a>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/contact">
                                <a class="nav-link" href="#">Contact</a>
                            </NavLink>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        value={this.state.search}
                        />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                        onClick={this.ShowSearchText}
                        >Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Head;