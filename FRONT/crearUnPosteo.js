
/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded",()=>{
    /* Obtener el formulario para crear un nuevo posteo */
    const formCrearPosteo = document.querySelector("#form-crear-posteo")
        
    // Funcion para crear un nuevo posteo
    formCrearPosteo.addEventListener("submit", async function (evento){
        evento.preventDefault();
        const nuevoPosteo = {
            titulo: document.querySelector("#nuevo-titulo").value ,
            contenido:document.querySelector("#nuevo-contenido").value
        };
        try {
            await axios.post(`http://localhost:3030/posteos/`,nuevoPosteo)
            alert (`Posteo creado satisfactoriamente`)

            //limpiamos el formulario
            formCrearPosteo.reset()
            
        } catch (error) {
            console.error (`Error al postear: ${error}`)
        }
    
    })
 })