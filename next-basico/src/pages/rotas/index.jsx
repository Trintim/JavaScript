import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Rotas(){
    const router = useRouter()

    function navegacaoSimples(url){
        router.push(url)
    }

    function navegacaoComParams(){
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 26,
                nome: 'Trintim Vitor'
            }
        })
    }
    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=123&nome=Trintim">
                    <li> Params </li>
                </Link>
                <Link href="/rotas/152/buscar">
                    <li> Buscar </li>
                </Link>
                <Link href="/rotas/123/Victor">
                    <li> Victor </li>
                </Link>
            </ul>
            <div style={{ display: "flex", flexDirection: "column",alignItems: "flex-start" }}>
                <button onClick={() => router.push("/rotas/152/buscar")}>Buscar</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column",alignItems: "flex-start" }}>
                <button onClick={navegacaoComParams}>Params</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column",alignItems: "flex-start" }}>
                <button onClick={() => navegacaoSimples("/rotas/152/Victor")}>Victor</button>
            </div>
        </div>
    )
}