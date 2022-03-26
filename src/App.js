import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageInSrc from './imageInSrc.jpg';



function App() {

  return (
    <div className="container mt-3 shadow p-5 border border-2 ">
      <h3 className="text text-center mb-3">My checkpoint JSX</h3>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imageInSrc} className="card-img-top" alt="Image In Src" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={'/imageInPublic.jpg'} className="card-img-top" alt="Image In Public" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: "18rem", height: "22rem" }}>
              <iframe src="https://www.youtube.com/embed/_SePtrF9wzs" height={300} frameborder="0"></iframe>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>



  );
}

export default App;
