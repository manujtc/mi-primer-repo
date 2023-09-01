function clickBoton(texto){
    const elementoResultado= document.getElementById('resultado')
    const textoViejo= elementoResultado.value
    elementoResultado.value= textoViejo + texto
}
    function clickMas(){
        const elementoResultado= document.getElementById('resultado')
        const elementohistorial= document.getElementById('historial')

        const varlorViejoHistorial= elementohistorial.innerHTML;
        elementohistorial.innerHTML= varlorViejoHistorial + '+'  + elementoResultado.value

    }
       