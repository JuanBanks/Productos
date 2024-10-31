import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const CardHoriz = (props) => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/Detalle/${props.id}`);
  };
 

  return (
    <Card sx={{ display: 'flex', maxWidth: 670, 
      backgroundColor: '#96222e' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }} onClick={handleClick}>
        <Box sx={{ width: '50%' }}>
          <CardMedia
            component="img"
            height="140"
            image={props.img[1] || props.img[0]}
            alt={props.name}
            sx={{ height: '100%', objectFit: 'cover' }} // Ajustar imagen al contenedor
          />
        </Box>
        <Box sx={{ width: '50%', padding: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold',color: 'white' }}>
              {props.name}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'white' }} >
            <p>Edad: {props.edad || "No registrada"} </p>
            <p>Altura: {props.altura || "No registrada"} </p>
            <p>Peso: {props.peso || "No registrada"} </p>
            <p>Genero: {props.genero} </p>
            <p>Ocupacion: {Array.isArray(props.ocupacion) ? props.ocupacion[0] : props.ocupacion} </p> {/*verifica si es un arreglo antes*/ }
            <p>Clan: { props.clan } </p>

           
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>

  )
}

export default CardHoriz
