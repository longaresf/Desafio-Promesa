const getAlbumes = async () => {

    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(url);

        const data = await response.json();

        data.forEach((elemento)=>{
            if(elemento.id <= 20){
                console.log(elemento.title);
            }
        });

    } 

    catch(err) {
        console.log(err);
    }
    
}

const mostrarMensaje = () => {
    
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('Información Enviada.') ;
        },3000);
    }) 
};
 
const Main = async () => {

    getAlbumes();

    let msj = await mostrarMensaje();

    console.log(msj);
}

Main();