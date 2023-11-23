export default function Character(props){
    const { characters, setCharacters } = props;
    const resetCharacters = () => {
        setCharacters(null);
    }
    return(
        <div>
            <h1>Personajes</h1>
            <span onClick={resetCharacters}>Volver al home</span>
            <div>
                {characters.map((character, index) => (
                    <div key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? 
                                    (
                                        <>
                                            <span>Alive</span>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <span>Dead</span>
                                        </>
                                    )
                                }
                            </h6>
                            <p>
                                Episodios: <span>{character.episode.length}</span>
                            </p>
                            <p>
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