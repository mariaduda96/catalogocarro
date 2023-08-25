import { con } from '.connection.js'

export async function inserircliente(cliente){

    const comando =

    `INSERT INTO tb_cliente (id_cliente, nm_nome, ds_email, ds_telefone, ds_cpf, ds_cnh)
    values(?, ?, ?, ?, ?) `

    const [resposta] = await con.query(comando, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh]);
    cliente.id = resposta.inserirId;

    return cliente;
        
}

export async function buscar(){
const comando=

    `SELECT id_veiculo      id,
     nm_nome             nome,
     nm_cpf              cpf,
     ds_telefone         telefone
     nm_email            email,
     ds_cnh               cnh
    FROM tb_agenda`;
 
    const [linhas] = await con.query(comando); 
    return linhas;


};
