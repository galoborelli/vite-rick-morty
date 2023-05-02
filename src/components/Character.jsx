/* eslint-disable react/prop-types */

function Character({character}) {
      return(
      <div  className="text-center p-5">
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <b>{character.origin.name}</b>
      </div>
    )

}
  


export default Character
