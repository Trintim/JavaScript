import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <h1>Família{props.familia} </h1>
            <Filho nome="Taina" familia={props.familia} />
            <Filho nome="Victor" familia={props.familia} />
            <Filho {...props} nome="Junior" />
        </div>
    )
}