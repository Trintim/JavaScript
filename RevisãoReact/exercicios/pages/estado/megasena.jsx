import { useEffect, useState } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function megasena(){
    const [numeros, setNumeros] = useState(mega())

    function renderNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />)
    }
    return (
        <div style={{
            display:"flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
            }}>
                {renderNumeros()}
            </div>
            <div>
                <button onClick={()=> setNumeros(mega())}>Gerar Aposta</button>
            </div>
        </div>
    )
}