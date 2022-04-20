import { useRouter } from 'next/router'
import Link from "next/link"

export default function IdENome(){
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome


    return (
        <div>
            <h1> Rotas / {id} / {nome} </h1>
            <Link href="/rotas">
                <button> voltar </button>
            </Link>
        </div>
    )
}