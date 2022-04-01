export function mega(quantidade = 6, numeros = []){
    if(quantidade < 6 && quantidade > 60){
        throw "Quantidade Invalida!"
    }

    if(numeros.length === quantidade){
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)){//se o numero aleatorio n estiver no array incrementa ele
        return mega(quantidade, [...numeros, numeroAleatorio])//forma de clonar o array '...numeros' gera novo array inclementado
    } else {
        return mega(quantidade, numeros)
    }
}
