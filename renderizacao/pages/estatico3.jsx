export function getStaticProps(){
    return {
        revalidate: 7, // segundos
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props){
    return (
        <div style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
        }}>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}