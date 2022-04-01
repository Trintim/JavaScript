import { useState } from "react"

export default function mouse(props){
    // React Hooks
    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#000",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(ev){
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <div><h1>EixoX: {x}</h1></div>
            <div><h1>EixoY: {y}</h1></div>
        </div>
    )
}