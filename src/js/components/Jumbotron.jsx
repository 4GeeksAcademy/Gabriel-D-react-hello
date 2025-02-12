import React from "react";
import ReactDOM from "react-dom";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";

        const Jumbotron = () => {
          return (    
            <div className="mt-5 px-5">
            <div className="p-5 bg-light rounded-3">
              <h1 className="display-4">A Warm Welcome!</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, 
                eligendi, in quo sunt possimus non incidunt odit vero aliquid similique 
                quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
              </p>
              <button className="btn btn-primary btn-lg">Call to action!</button>
            </div>
          </div>
          );
        };
        
        export default Jumbotron;