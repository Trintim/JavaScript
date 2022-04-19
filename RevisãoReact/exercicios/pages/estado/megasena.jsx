import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena(){
    const [qtd, setQtd] = useState(6)
    const [numeros, setNumeros] = useState(mega(qtd))


    function renderNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero = {numero} />
        )
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1 >Mega Sena</h1>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number"  min={6} max={20} value={qtd} onChange={ev => setQtd(ev.target.value)}/>
                <button onClick={()=> setNumeros(mega(qtd))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}