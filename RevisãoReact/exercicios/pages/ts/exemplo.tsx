import Pessoa from "../../components/Pessoa";


export default function exemploTs(){
    return (
        <div>
            <Pessoa nome="Victor" idade={25}/>
            <Pessoa nome="Taina" />
        </div>
    )
}