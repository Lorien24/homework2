import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import poster from "./Ringstrilogyposter.jpg";
import me from "./photo.jpg";
import catImg from "./cat.jpg";

function FavoriteMovie(movie) {
  return (
    <>
      <div className="block">
        <h3>Name: {movie.movieName}</h3>
        <p>Movie Produser: {movie.movieProduser}</p>
        <p>Year: {movie.year}</p>
        <p>Studio: {movie.studio}</p>
        <img src={poster} width="300" height="175" />
      </div>
    </>
  );
}

function Movie() {
  return (
    <>
      <FavoriteMovie
        movieName="The Lord of the Rings"
        movieProduser="Peter Jackson"
        year="2001"
        studio="New Line Cinema"
      />
    </>
  );
}

function AboutMe({ fio, phone, email, city }) {
  return (
    <>
      <div className="block">
        <h4>My name: {fio}</h4>
        <img src={me} width="250" height="250" />
        <p>Phone: {phone}</p>
        <p>E-mail: {email}</p>
        <p>Town: {city}</p>
      </div>
    </>
  );
}

function Me() {
  return (
    <>
      <AboutMe
        fio="Melnyk Kateryna"
        phone="+82(123456789)"
        email="mk@mail.mail"
        city="Kyiv"
      />
    </>
  );
}

function CurrentTime() {
  const [state, setState] = React.useState(new Date());
  setInterval(() => setState(new Date()), 1000);
  return (
    <>
      <div className="block">
        <div className="time">Current time is {state.toLocaleTimeString()}</div>
      </div>
    </>
  );
}

function MyPeta(cat) {
  return (
    <>
      <div className="block">
        <h4>Name: {cat.catName}</h4>
        <img src={catImg} width="300" height="375" />
        <p>Year: {cat.catYear}</p>
        <p>Favorite food: {cat.catFood}</p>
        <p>Pastime: {cat.catPastime}</p>
      </div>
    </>
  );
}

function Peta() {
  return (
    <>
      <MyPeta
        catName="Mistique"
        catYear="6 years"
        catFood="Tuna"
        catPastime="75% asking for food, 25% sleeping"
      />
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <Movie />
        <CurrentTime />
        <Me />
        <Peta />
      </div>
    </>
  );
}

export default App;
