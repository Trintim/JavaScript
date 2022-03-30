import Titulo from "../../components/Titulo";

export default function usandoTitulo(){
    return (
        <div>
            <Titulo
                principal="Página de cadastro"
                secundario="Incluir, Alterar, Excluir coisas!"
            />
            <Titulo
                principal="Página de Login"
                secundario="Informe seu e-mail e senha!"
                pequeno={true}
            />
            <Titulo
                principal="Página de Logout"
                secundario="Desconectado"
                pequeno
            />
        </div>
    )
}