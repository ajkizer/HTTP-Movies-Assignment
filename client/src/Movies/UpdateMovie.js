import React, { useState } from "react";
import axios from "axios";

const initial = {
  title: "",
  directer: "",
  metascore: null,
  stars: []
};

const UpdateForm = props => {
  const [movie, setMovie] = useState(initial);

  const id = props.match.params.id;
  const movieToUpdate = props.movies.find(movie => `${movie.id} === id`);
  console.log(movieToUpdate);
  return <div>hello</div>;
};

export default UpdateForm;
