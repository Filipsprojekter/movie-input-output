import React from "react";
import { connect } from './../../node_modules/react-redux';

const MoviePlot = ({ movie }) => {
  if (!movie) {
    return <div>Select a movie</div>;
  }
  

  return (
    <div className="movieplot">
      <h3>Plot: </h3>
      <div>{movie.Plot}</div>
    </div>
  ); 
};

const mapStateToProps = state => {
  return { movie: state.selectedMovie };
};

export default connect(mapStateToProps)(MoviePlot);
