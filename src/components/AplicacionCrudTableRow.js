import React from "react";
import { useHistory } from "react-router";

const AplicacionCrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { nombre, precio, numero, id } = el;
  let navegacion = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    navegacion.push(`/editar/${id}`);
  };


  
  return (
    <tr>
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>{numero}</td>
      <td>
        <button className="edit" onClick={handleEdit}>Editar</button>
        <button className="eliminar" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default AplicacionCrudTableRow;
