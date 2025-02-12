import React from "react";
import ReactDOM from "react-dom";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";
import myImag from "../../img/practica-react.png";




const Cards = () => {
    return (    
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 px-5 py-3 g-4">
        <div className="col">
          <div className="card">
            <img src={myImag} className="car card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div> 
            <div className="div bg-light py-4 d-flex justify-content-center"> <a href="#" class="btn btn-primary w-50 ">Go somewhere</a></div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={myImag} className="car card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div>
                <div className="div bg-light py-4 d-flex justify-content-center"> <a href="#" class="btn btn-primary w-50 ">Go somewhere</a></div>
            </div>
        </div>
          
        </div>
        <div className="col">
          <div className="card">
            <img src={myImag} className="car card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="div bg-light py-4 d-flex justify-content-center"> <a href="#" class="btn btn-primary w-50 ">Go somewhere</a></div>
        </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={myImag} className="car card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="div bg-light py-4 d-flex justify-content-center"> <a href="#" class="btn btn-primary w-50 ">Go somewhere</a></div>
        </div>
          
        </div>
      </div>
    );
  };
  
  export default Cards;