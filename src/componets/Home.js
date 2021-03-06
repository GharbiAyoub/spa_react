import React, { Component } from "react";
 
import '../styles/HomeStyles.css';
import '../jsfolder/HomeLib.js'
class Home extends Component {
  render() {
    return (
        <div class="container">
    <div class="row">    
        <div class="col-md-6 col-md-offset-3">
            <div class="card">
                <div class="card-image">
                    <img class="img-responsive" src="http://lorempixel.com/555/300/sports"/>
                    
                </div>
                
                <div class="card-content">
                    <span class="card-title">Material Cards</span>                    
                    <button type="button" id="show" class="btn btn-custom pull-right" aria-label="Left Align">
                        <i class="fa fa-ellipsis-v"></i>
                    </button>
                </div>
                <div class="card-action">
                    <a href="#" target="new_blank">Link</a>
                    <a href="#" target="new_blank">Link</a>                    
                    <a href="#" target="new_blank">Link</a>
                    <a href="#" target="new_blank">Link</a>
                    <a href="#" target="new_blank">Link</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title">Card Title</span> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}
 
export default Home;