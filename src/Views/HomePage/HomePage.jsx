import { useState, useEffect } from 'react'
import BotonFavo from '../../Components/BotonFavo/BotonFavo';
import CardHoriz from '../../Components/CardHoriz/CardHoriz';
import './HomePage.css'
const HomePage = () => {

  const [users, setUsers] = useState([]);
  const [filtroFavoritos, setFiltroFavoritos] = useState([]);

  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then(resp => resp.json())
      .then(data => {
        setUsers(data.characters);
        setError('');
      })
      .catch(error => console.log(error));
  }, []);

  const handleFavoritos = (ids) => {
    setFiltroFavoritos((prevFiltro) => 
      prevFiltro.length > 0 ? [] : ids // Se alterna, si le das click filtra pero si le das nuevamente se quita el filtro
    );
  
  };

  const usuariosFiltrados = filtroFavoritos.length > 0
  ? users.filter((user) => filtroFavoritos.includes(user.id.toString()))
  : users;

  return (
    <div id='ContenedorHome'>
      <div id='ContenedorCard' > {usuariosFiltrados.map((dato) => (
        <div >
          <CardHoriz id={dato.id} name={dato.name} img={dato.images}
            edad={dato.personal?.age?.["Part II"] || dato.personal?.age?.["Part I"] || dato.personal?.age?.["Boruto Movie"]}
            altura={dato.personal?.height?.["Part II"] || dato.personal?.height?.["Part I"] || dato.personal?.height?.["Boruto Movie"]}
            peso={dato.personal?.weight?.["Part II"] || dato.personal?.weight?.["Part I"]}
            genero={dato.personal?.["sex"]}
            ocupacion={dato.personal?.["occupation"]}
            clan={dato.personal?.["clan"]}
          />
        </div>

      ))}</div>
      <div id='ContenedorFavo'>
        <BotonFavo onFavoritos={handleFavoritos} />
      </div>
    </div>
  )
}

export default HomePage
