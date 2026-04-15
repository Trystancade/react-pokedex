function Pokecard({ id, name, type, base_experience }) {
    return (
        <>
            <h4>{name}</h4>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <p>
                Type: {type}
                <br/>
                EXP: {base_experience}
            </p>
        </>    
    )
}