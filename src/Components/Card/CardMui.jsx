import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Carrusel from '../Careusel/Carrusel';
import Favorite from '../Favorite/Favorite';


const CardMui = (props) => {
  return (
    <Card sx={{
      width: 550,
      height: 450,
      display: 'flex',
      gap: 3,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 1,
      boxSizing: 'border-box',
      backgroundImage: 'url("https://p4.wallpaperbetter.com/wallpaper/815/251/611/naruto-blue-eight-trigrams-sealing-style-hd-wallpaper-preview.jpg")',

    }}>
      <Carrusel image={props.image} />
      <CardContent sx={{ flexGrow: 1, overflowY: 'auto', }} >
        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold',color: 'white' }}>
          {props.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.primay',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'normal',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          {props.clan
            ? `Un ninja del clan ${props.clan}`
            : "Sin pertenencia a un clan conocido"}, nacido {props.Cumple}.
          {props.padre && props.madre
            ? ` Hijo de ${props.padre} y de ${props.madre}, heredó la fortaleza y sabiduría de sus padres, quienes le inculcaron los valores del clan desde pequeño`
            : props.padre
              ? ` Hijo de ${props.padre}, heredó la fortaleza y sabiduría de su padre, quien le inculcó los valores del clan desde pequeño`
              : props.madre
                ? ` Hijo de ${props.madre}, heredó la fortaleza y sabiduría de su madre, quien le inculcó los valores del clan desde pequeño`
                : " Algunos dicen que su familia pudo haber desaparecido o que su legado fue interrumpido por trágicos eventos"
          }.
          {props.Grado
            ? ` Se graduó de la academia a los ${props.Grado} años, destacándose rápidamente por su habilidad.`
            : " No se cuenta con detalles sobre sus años de formación en la academia."}

          {props.Equipo?.[0]
            ? ` Tras salir de la academia, fue asignado al equipo de ${Array.isArray(props.Equipo) ? props.Equipo[0] : props.Equipo}, donde perfeccionó sus técnicas y consolidó su camino ninja.`
            : " Tras la academia, los detalles sobre su equipo y asignaciones específicas permanecen desconocidos."}

          <br />
          <br />
          {props.esposa
            ? `Más adelante, se casó con ${props.esposa}, con quien formó una familia, teniendo 
            ${props.hijo && props.hija ? `dos hijos ${props.hijo} y ${props.hija} que llevan adelante el legado del clan. `
              : props.hijo
                ? `un hijo ${props.hijo} que lleva adelante el legado del clan. `
                : props.hija
                  ? `una hija ${props.hija} que lleva adelante el legado del clan. `
                  : "sin descendencia registrada. "
            }`
            : "Aunque no se casó, su vida estuvo dedicada al clan y sus enseñanzas se transmitieron a las futuras generaciones. "}
          Actualmente, ostenta el título de Ninja {props.titulo}, un rango que honra su valentía y compromiso.

        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Favorite id={props.id} name={props.name} Cumple={props.Cumple} />
      </CardActions>
    </Card>
  );
}

export default CardMui;
