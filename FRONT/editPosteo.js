
document.addEventListener("DOMContentLoaded", ()=>{
    // obtenemos el formulario de edicion
    const formEditar = document.querySelector("#form-editar-posteo")

    //obtener los parametros de la URL 
    const parametrosURL = new URLSearchParams (window.location.search)
    // obtener el id de post que queremos editar
    const iDPosteo = parametrosURL.get ("id")

    // funcion para obtener los datos del post por Id
    const traerPosteo = async (id)=>{
        try {
            const respuesta = await axios.get (`http://localhost:3030/posteos/${id}`)
        console.log(respuesta);
            const posteo = respuesta.data;
            //Asignar los valores obtenidos a los campos del formulario
            document.querySelector("#nuevo-titulo").value =posteo.titulo
            document.querySelector("#nuevo-contenido").value =posteo.contenido
        } catch (error) {
            console.error(`Error al obtener el posteo :`, error);
        }
    }

    //llamar a la funcion para obtener el post actual
    if (iDPosteo){
        traerPosteo(iDPosteo)
    }

    //funcion para actualizar el posteo
    formEditar.addEventListener("submit", async function(evento){
    evento.preventDefault()

        const actualizarPosteo = {
        titulo: document.querySelector("#nuevo-titulo").value,
        contenido: document.querySelector("#nuevo-contenido").value 
        }

        try {
            await axios.put(`http://localhost:3030/posteos/${iDPosteo}`,actualizarPosteo)
            alert (`Posteo ${iDPosteo} Actualizado`)
            //Redirigir a la pagina principal despues de actualizar
            window.location.href = "index.html"
        } catch (error) {
            console.error(`Error al actualizar el posteo :`, error);
        }

    })

})