import React from "react";
import "../css/project.css";


function Projects() {
  return (
    <>
     <h1 id="project">Projects</h1>
      <div className="cards">
        
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&w=1000&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">RealEstate</h5>
            <p className="card-text">
              React base static website and desugn only on css base and we give
              you best user...
            </p>
            <a
              href="https://realestate-dkx5.onrender.com"
              className="btn btn-primary"
            >
              Visite
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu93gxvuQIEN8EGB9M7GdvvvEtjGDzDu0IA&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">ExpenseTracker</h5>
            <p className="card-text">
            MERN-STACK website used to track expense.design with
            Ant-Design...
            </p>
            <a
              href="https://distinct-cowboy-hat-pike.cyclic.cloud"
              className="btn btn-primary"
            >
              Visite
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://s40424.pcdn.co/in/wp-content/uploads/2022/10/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">ChatGTP</h5>
            <p className="card-text">
            MERN-STACK website and chat-gtp api used and designed with
                  material UI...
            </p>
            <a
              href="https://chatgtp-k7k3.onrender.com"
              className="btn btn-primary"
            >
              Visite
            </a>
          </div>
        </div>
        <div className="card-4">
          <img
            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idKyaV_2aidc/v0/1200x801.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Spotify-Clone</h5>
            <p className="card-text">
            spotify clone website using HTML and CSS and JAVASCRIPT this
                  is simple... 
            </p>
            <a
              href="https://spotify-clone-wvyr.onrender.com"
              className="btn btn-primary"
            >
              Visite
            </a>
          </div>
        </div>
      </div>

      
    </>
  );
}
export default Projects;
