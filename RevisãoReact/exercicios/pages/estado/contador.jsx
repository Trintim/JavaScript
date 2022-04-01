import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador(){
    const [numero, setNumero] = useState(0)

    const increment = () => setNumero(numero+1)
    const decrement = () => setNumero(numero-1)

    return (
        <div style={{
            display:"flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}