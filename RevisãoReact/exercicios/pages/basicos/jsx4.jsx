export default function jsx4(){
    const subTitle = "Estou no JavaScript!"
    const trexoH3 = <h3>{3*3}</h3>
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subTitle}</h2>
            {trexoH3}
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(7.2, 1, 10)}</h5>
        </div>
    )
}

function entre(valor, min, max){
    if(valor >= min && valor <= max){
        return "Sim"
    } else{
        return "Não"
    }
}