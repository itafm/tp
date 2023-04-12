import React, { Component, useState } from "react";
import { Film } from "./component/Films";
import SearchForm from "./data/SearchForm";
import filmData from "./data/Datafilm.json";

const App = () => {
  const [films, setFilms] = useState(filmData);
  const [search, setSearch] = useState("");
  function change(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  // const filtred= films.filter(film=>{
  //     film.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  // })
  return (
    <>
      <h1 className="text-danger text-center">
        Bienvenue à notre plateforme films
      </h1>
      <SearchForm value={search} onChange={change} />
      <div className="container">
        <div className="row">
          {films
            .filter((i) => {
              return search.toLocaleLowerCase() === ""
                ? i
                : i.title.toLocaleLowerCase().includes(search);
            })

            .map((film, key) => {
              return (
                <Film
                  key={key}
                  title={film.title}
                  price={film.price}
                  duration={film.duration}
                  description={film.description}
                  image={film.image}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default App;
