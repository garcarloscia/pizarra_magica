const contenedor=document.querySelector('#container');

// declara función que crea todos los divs que van organizados con css display grid    
const creaPizarra = function (numCuadros){
    contenedor.style.gridTemplateColumns= `repeat(${numCuadros}, 1fr)`;
    contenedor.style.gridTemplateRows= `repeat(${numCuadros}, 1fr)`;

    for (let i =1; i<=(numCuadros* numCuadros); i++) {
        let cuadro = document.createElement('div');
        contenedor.appendChild(cuadro);
    }

    //aplica el comportamiento de la pizarra 
    let itemWait = document.querySelectorAll('#container div');
    itemWait.forEach(cuadroListen => 
    cuadroListen.addEventListener('mouseover', (e)=> e.target.classList="marcado")
    );
    
}

//pide al usuario el número de cuadros por fila, crea la pizara
const botones=document.querySelectorAll('button');
document.getElementById('S').classList.add('on'); //activa la clase .on en el botón S
creaPizarra(100);
botones.forEach((boton)=>{
    
    boton.addEventListener('click', (e)=>{
        //borra la clase .on de todos los botones
        botones.forEach(boton=>{
            document.querySelector(`#${boton.id}`).classList.remove('on'); 
        });
        //aplica la clase .on al botón seleccionado
        e.target.classList.add('on');
        
        //borra la pizarra anterior
        contenedor.replaceChildren();
        //crea la pizarra con el número de cuadros del botón elegido
        const cuadros = e.target.value;
        creaPizarra(cuadros);


    });
});