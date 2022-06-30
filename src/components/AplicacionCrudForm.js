
import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";



const initialForm = {
    nombre: "",
    precio: "",
    numero: "",
    id:null,
};

const AplicacionCrudForm =({createData,updateData,dataToEdit,setDataToEdit}) =>{ 
    const [form,setForm]= useState(initialForm);
    let navegacion  = useHistory();

    useEffect(()=>{//actualiza el formulario 
        if(dataToEdit){ // datos a editar
            setForm(dataToEdit);//inserta en el formulario los datos a editar
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.nombre||!form.precio||!form.numero){
            alert ("Datos incompletos");
            return;
        }
        if (form.id===null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }
    
    
    
    const handleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
        navegacion.push("/productos")
    }
    return(
        <div>
            <h3>{dataToEdit? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <br/>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.nombre}/><br/>
                <br/>
                <input type="text" name="precio" placeholder="Precio" onChange={handleChange} value={form.precio}/><br/>
                <br/>
                <input type="text" name="numero" placeholder="Numero" onChange={handleChange} value={form.numero}/><br/>
                <br/>
                <input class="boton" type="submit" value="Enviar"/><br/>
                <br/>
                <input class="boton" type="reset" value="Limpiar" onClick={handleReset} /><br/>
                <br/>
            </form>
        </div>
    )
};
export default AplicacionCrudForm;