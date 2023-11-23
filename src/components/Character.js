export default function Character(props){
    const { characters, setCharacters } = props;
    const resetCharacters = () => {
        setCharacters(null);
    }
    return(
        <div className="container">
            <h2>Personajes</h2>
            <span onClick={resetCharacters}>Volver al home</span>
            <div className="character-container">
                {characters.map((character, index) => (
                    <div className="character-info" key={index}>
                        <div>
                            <img className="character-img" src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? 
                                    (
                                        <>
                                            <span className="alive">Alive</span>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <span className="dead">Dead</span>
                                        </>
                                    )
                                }
                            </h6>
                            <p className="text-grey">
                                Episodios: <span>{character.episode.length}</span>
                            </p>
                            <p className="text-grey">
                                Especie: <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span onClick={resetCharacters}>Volver al home</span>
        </div>
    );
}