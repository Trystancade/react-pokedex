const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  flying: "#A890F0",
  electric: "#F8D030",
  normal: "#A8A878",
  poison: "#A040A0",
};


function Pokecard({ id, name, type, base_experience }) {
    const myStyle = { backgroundColor: typeColors[type], color: "white" };
    return (
    <div className="Pokecard">
      <h4>{name}</h4>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>
        Type: <span className="type-badge" style={myStyle}>{type}</span>
        <br />
        EXP: {base_experience}
      </p>
    </div>
  );
}
