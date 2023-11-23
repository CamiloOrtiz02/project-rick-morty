import imgRickMorty from "./img/rick_morty.png";
import { useEffect, useState } from "react";
import './App.css';
import Character from "./components/Character";

function App() {
  const [characters, setCharacters] = useState(null);
  //Por cada vez que cambia characters se ejecuta el codigo
  useEffect(() => {
    console.log(characters);
  }, [characters]);

  const reqApi = async () => {
    //Tomamos la info de la api
    const api = await fetch("https://rickandmortyapi.com/api/character");
    //La transformamos a JSON
    const characterApi = await api.json();
    //Lo seteamos en la variable characters
    setCharacters(characterApi.results);
  }
  
  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      {characters ? (
        //Cargar caracteres
        <Character characters={characters} setCharacters={setCharacters} />
      ) : (
        //Cargar inicio
        <>
          <img src={imgRickMorty} alt="imagen_rick_morty.png"/>
          <button onClick={reqApi}>Buscar Personajes</button>
        </>
      )}
    </div>
  );
}

export default App;
