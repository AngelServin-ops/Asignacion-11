function obtenerDatos(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {

            let exito=true;

            if(exito){
                resolve("Datos encontrados con exito")
            }else{
                reject("No se encontraron los datos")
            }

            }, 2000)
        })
}

obtenerDatos()
    .then((respuesta)=>{
            console.log("Exito:", respuesta)
    })
    .catch((error)=>{
        console.log("Fallo:", error)
    })

function buscarUsuario(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {

            let exito=false;

            if(exito){
                let usuario={
                    nombre:"Angel",
                    edad: 22
                }
                     
                resolve("usuario")
            }else{
                reject("No se encontraron el usuario")
            }

            }, 2000)
        })
}

buscarUsuario()
    .then(usuario=>{
        console.log("Usuario encontrado:", usuario)
    })
    .then(()=>{
        console.log("He terminado")
    })
    .catch(error=>{
        console.log("Error:", error)
    })


    async function main(){
        console.log("Inicio la ejecución");
        try {
            let usuario = await buscarUsuario()
            console.log("Usuario encontrado:", usuario)
        } catch (error) {
            console.log("Error", error)
        }
    }

    main();

    async function obtenerPost(id){
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts/${id}')
        .then(resp =>{
            return resp.json();
        })
        .then(data=>{
            console.log(data)
        })
        ;
        
        console.log(data)
    }

    obtenerPost(1)