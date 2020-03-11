import React, { Component } from "react";
import MovieImg from "../assets/Image/movie_img.png";
import MovieList from "./MovieList";
import MoviePoster from "./MoviePoster";
import MoviePlot from "./MoviePlot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>
            React Movies <img alt="Movie" src={MovieImg}></img>{" "}
          </h1>
          This small App demonstrates communication between child-components
          using Props/State and CallBack
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <MovieList />
          </div>
          <div className="col-sm-5">
            <MoviePoster />
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-8">
            <MoviePlot />
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
