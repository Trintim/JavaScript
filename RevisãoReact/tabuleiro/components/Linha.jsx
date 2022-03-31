import Subdivisao from "./Subdivisao";
import styles from '../styles/Linhas.module.css'

export default function Linha(props){
    return (
        <div className={styles.linha}>
            <Subdivisao preta={props.preta} />
            <Subdivisao preta={!props.preta} />
            <Subdivisao preta={props.preta} />
            <Subdivisao preta={!props.preta} />
            <Subdivisao preta={props.preta} />
            <Subdivisao preta={!props.preta} />
            <Subdivisao preta={props.preta} />
            <Subdivisao preta={!props.preta} />
        </div>
    )
}