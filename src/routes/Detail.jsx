import React, {useContext} from 'react';
import { GlobalContext } from '../components/utils/GlobalContext';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

//  const {value} = useContest(GlobalContext);

  const datos = JSON.parse(localStorage.getItem('data'))
  console.log(typeof datos);
  console.log(datos);

  const { id } = useParams();
  const item = datos.find((dato) => dato.id.toString() === id);

  console.log(typeof item);

  return (
    <>
      <div className="card" >
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        <p>{item.website}</p>
      </div>
    </>
  )
}

export default Detail