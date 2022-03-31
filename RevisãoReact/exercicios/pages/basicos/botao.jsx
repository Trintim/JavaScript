function acao1(){
    console.log("acao1")
}
export default function botao(){
    function acao2(){
        console.log("acao2")
    }

    function acao5(event){
        console.log(event)
    }
    return (
        <div>
            <button onClick={acao1}>Clique #01</button>
            <button onClick={acao2}>Clique #02</button>
            <button onClick={
                function(){
                    console.log("acao3")
                }
            }>Clique #03</button>
            <button onClick={() => console.log("acao4")}>Clique #04</button>
            <button onClick={acao5}>Clique #05</button>
            <button onClick={event => acao5(event.altKey)}>Clique #05 v2</button>
            <div>
                <input type="text"  onChange={event => console.log(event.target.value)}/>
            </div>
        </div>

    )
}