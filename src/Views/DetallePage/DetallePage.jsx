import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CardMui from '../../Components/Card/CardMui';
import './DetallePage.css';

const DetallePage = () => {
    const { id } = useParams(); // Captura el ID de la URL
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Usa comillas invertidas para interpolar el id dentro de la URL
        fetch(`https://dattebayo-api.onrender.com/characters/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setSelectedUser(data); // Establece el personaje seleccionado directamente
            })
            .catch(error => console.log(error));
    }, [id]);
    return (
        <div id="Browser-characters">
            <div id="Characters-1">
                {selectedUser ? (
                    <div id='Auxx'>
                        <div id='Auxx1'>
                            <CardMui image={selectedUser.images} name={selectedUser.name} clan={selectedUser.personal?.["clan"]}
                                Cumple={selectedUser.personal?.["birthdate"]}
                                padre={selectedUser.family?.["father"] }
                                madre={selectedUser.family?.["mother"] }
                                Grado={selectedUser.personal?.age?.["Academy Graduate"] }
                                Equipo={selectedUser.personal?.["team"]}
                                esposa={selectedUser.family?.["wife"]}
                                hijo={selectedUser.family?.["son"]}
                                hija={selectedUser.family?.["daughter"]}
                                titulo={selectedUser.rank?.ninjaRank?.["Gaiden"] || selectedUser.rank?.ninjaRank?.["Part I"] }
                                id= {selectedUser.id}
                                />

                        </div>

                        <div>
                            <Button onClick={() => navigate('/')} variant="contained" className="li-nav">Volver</Button>
                        </div>

                    </div>
                ) : (
                    <p>Cargando personaje...</p>
                )}
            </div>
        </div>
    );
};

export default DetallePage
