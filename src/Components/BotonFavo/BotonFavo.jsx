import React from 'react'
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { collection, query,  getDocs } from "firebase/firestore";
import { db } from "../../FireBase/FirebaseConfi"

const BotonFavo = (props) => {

  const obtenerFavoritos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Personajes"));
      const ids = querySnapshot.docs.map((doc) => doc.id);  // Aquí obtenemos los IDs
      console.log("IDs de favoritos:", ids); 
      props.onFavoritos(ids);
    } catch (error) {
      console.error("Error al obtener los favoritos:", error);
    }
  };

  return (
    <Button variant="outlined" startIcon={<FavoriteIcon />} sx={{ color: 'red', borderColor: 'red' }} onClick={obtenerFavoritos}>
   Favoritos
  </Button>
  )
}

export default BotonFavo
