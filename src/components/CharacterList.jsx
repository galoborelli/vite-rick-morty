/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect,useState } from 'react'
import Character from './Character'

function NavPage(props){
  return(
    <>
    <header className='d-flex justify-content-around align-items-center '>
    <button className='btn btn-success btn-sm'
        onClick={()=>props.setPage(props.page -1)}>
        Página anterior</button>
      
      <p>Página: {props.page}</p>

      <button className='btn btn-primary btn-sm'
        onClick={()=>props.setPage(props.page +1)}>
         Página {props.page +1}</button>  
    </header>
    </>
  )
}

function CharacterList() {
    
const [characters,setCharacters] = useState([])
const [loading,setLoading] = useState(true)
const [page,setPage] = useState(1)

useEffect(()=>{
 async function fetchData(){ 
  const response = await  fetch( ` https://rickandmortyapi.com/api/character?page=${page} ` )
  const data = await response.json()
  console.log(data);
  setCharacters(data.results)
  setLoading(false)
 }
 fetchData()
},[page])

  return (
    
    <div className='container '>
      <NavPage  page={page} setPage={setPage}/>
      {loading ? <h1>Cargando...</h1>
      : <div className='row'>
      {characters.map(character => {
       return(
         <div key={character.id} className='col-md-4' >
           <Character character={character} />
         </div>
       
     )
   })}
      </div> }
    <NavPage  page={page} setPage={setPage}/>
    </div>
)
}

export default CharacterList