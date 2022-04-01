export default function Filho(props){
    //"Passei no ENEM!"
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com Pai #1</button>
            <button onClick={
                () => props.funcao("Passei no ENEM!", "Uhuuul", 875.48)
            }>
                Falar com Pai #2
            </button>
        </div>
    )
}