const bancoDeDados = []; //Array de armazenamento de objetos

//Funçãp para novos registros
function salvarDados (nome, cpf, idade, telefone) {
    bancoDeDados.push({
        nome: nome,
        cpf: cpf,
        idade: idade,
        telefone: [telefone],

    });
}
//Exemplos
salvarDados("João", "123.456.789-00",  20, "(11) 99999-9999");
salvarDados("Mel", "987.654.321-00",30, "(11) 88888-8888");
salvarDados("Otavio", "111.222.333-44", 20, "(11) 77777-7777");


//Função para buscar dados, continuaria com as outras opções
function buscarPeloCpf(cpf){
    return bancoDeDados.find((teste) => teste.cpf === cpf);
}

function buscarPeloNome(nome) {
    return bancoDeDados.find((teste) => teste.nome === nome);
}

function buscarPeloTelefone(telefone) {
    return bancoDeDados.find((pessoa) => pessoa.telefone.includes(telefone)); 
}

//Quais dados possuímos?
let propriedades = Object.keys(bancoDeDados[0]);
console.log('Dados coletados: ', propriedades);

//Exemplo de respostas
//Como encontrar o registro?
let resposta1= 'telefone'.toLowerCase();
//Qual o (resposta1) dessa pessoa?
let resposta2= '(11) 99999-9999';
//Qual dado gostaria de atualizar?
let resposta3= 'TELEFONE'.toLowerCase();
//Qual o novo dado?
let resposta4= '(11) 99999-9999';

//Função para atualizar dados
function atualizarDados (registro, busca, dado, novoDado) {
    let dadosDaPessoa = null;
    switch (registro) {
        case 'cpf':
            dadosDaPessoa = buscarPeloCpf(busca);
            console.log(`A busca pelo CPF ${busca} encontrou: `, dadosDaPessoa);
            break;         
        case 'nome':
            dadosDaPessoa = buscarPeloNome(busca);
            console.log(`A busca pelo nome ${busca} encontrou: `, dadosDaPessoa);
            break;
        case 'telefone':
            dadosDaPessoa = buscarPeloTelefone(busca);
            console.log(`A busca pelo telefone ${busca} encontrou: `, dadosDaPessoa);
            break;
        default:
            console.log('Registro não existe.'); 
            break;           
    }
    
    if (dadosDaPessoa === null) {
        return;
    }

    switch (dado) {
        case 'idade' :
            novoDado = Number(novoDado);
            dadosDaPessoa.idade = novoDado;
            console.log("Os novos dados sáo: ", dadosDaPessoa);
            break;
        case 'nome':
            dadosDaPessoa.nome = novoDado;
            console.log("Os novos dados sáo: ", dadosDaPessoa);
            break;
        case 'telefone':
            if (busca === novoDado) {
                console.log('O telefone já está cadastrado');
                break;
            } else {
                dadosDaPessoa.telefone.push(novoDado);
                console.log("Os novos dados sáo: ", dadosDaPessoa);
                break; 
            }           
        case 'cpf':
            dadosDaPessoa.cpf = novoDado;
            console.log("Os novos dados sáo: ", dadosDaPessoa);
            break;
        default: 
            console.log('Esse dado não pode ser modificado ou já existe.'); 
            break;          
    }
}
atualizarDados(resposta1, resposta2, resposta3, resposta4);

//Função para deletar dados
function deletarDados (registro, busca) {
    switch (registro) {
        case 'cpf':
            dadosDaPessoa = buscarPeloCpf(busca);
            console.log("A busca no registro resultou em: ", dadosDaPessoa);
            bancoDeDados.splice(bancoDeDados.indexOf(dadosDaPessoa), 1);
            console.log("Os atuais registros sáo: ", bancoDeDados);
            break;
        case 'nome':
            dadosDaPessoa = buscarPeloNome(busca);
            console.log("A busca no registro resultou em: ", dadosDaPessoa);
            bancoDeDados.splice(bancoDeDados.indexOf(dadosDaPessoa), 1);
            console.log("Os atuais registros são: ", bancoDeDados);
            break;
        case 'telefone':
            dadosDaPessoa = buscarPeloTelefone(busca);
            console.log("A busca no registro resultou em: ", dadosDaPessoa);
            bancoDeDados.splice(bancoDeDados.indexOf(dadosDaPessoa), 1);
            console.log("Os atuais registros são: ", bancoDeDados);
            break;
        default:
            console.log('Registro não existe.');
            break;
    }
}

deletarDados(resposta1, resposta2);
