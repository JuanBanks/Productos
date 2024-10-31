import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import { db } from '../../FireBase/FirebaseConfi';
import { doc, setDoc } from 'firebase/firestore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Favorite = (props) => {
  const [open, setOpen] = useState(false);       // Para el mensaje de éxito
  const [errorOpen, setErrorOpen] = useState(false); // Para el mensaje de error

  const handleFavorite = async () => {
    try {
      const favoriteDoc = doc(db, 'Personajes', String(props.id));
      await setDoc(favoriteDoc, {
        nombre: props.name,
        cumple: props.Cumple,
      });
      console.log("Favorito guardado correctamente");
// Abre el Snackbar 
      setOpen(true); 
    } catch (error) {
      console.error("Error al guardar el favorito: ", error);
      setErrorOpen(true); 
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
     // Cierra el Snackbar 
    setOpen(false);    
    setErrorOpen(false); 
  };

  return (
    <>
      <Fab aria-label="like" sx={{
        color: 'red',
        borderColor: 'red',
        '&:hover': {
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          borderColor: 'darkred',
        },
      }} onClick={handleFavorite}>
        <FavoriteIcon />
      </Fab>


      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          ¡Agregado a favoritos!
        </Alert>
      </Snackbar>


      <Snackbar open={errorOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Error al agregar a favoritos. Inténtalo nuevamente.
        </Alert>
      </Snackbar>
    </>
  );
}

export default Favorite;
