import { useRouter } from 'next/router'
import Link from "next/link"

export default function Buscar(){
    const router = useRouter()
    const id = router.query.id


    return (
        <div>
            <h1> Rotas / {id} / Buscar!!! </h1>
            <Link href="/rotas">
                <button> voltar </button>
            </Link>
        </div>
    )
}