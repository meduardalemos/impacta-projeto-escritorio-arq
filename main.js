const Client = require('./client');
const Architect = require('./architect');
const Project = require('./project');
const Task = require('./task');
const { showMenu, createNewProject, createNewTask, exportProjectToJson } = require('./functions');

// Repositorios provisórios de clientes e arquitetos
repositoryClient = [];
repositoryArchitects = [];
repositoryProjects = [];

// Adicionando clientes ao repositório
const cliente1 = new Client('Rafael Araújo', 'rafael@email.com', '+5581998765432');
const cliente2 = new Client('Paula Camargo', 'paula@email.com', '+558199234-5678');
repositoryClient.push(cliente1);
repositoryClient.push(cliente2);

// Adicionando arquitetos ao repositório
const arquiteto1 = new Architect('Luiza Melo');
const arquiteto2 = new Architect('Arthur Oliveira');
repositoryArchitects.push(arquiteto1);
repositoryArchitects.push(arquiteto2);


function main() {
    
    showMenu();

    console.log('\nSimulando a escolha da opção 3...');

    console.log('\nSimulando entradas do usuário para criação do projeto...')
    let nomeProjeto = "Apt 101 - Edf. Azul";
    let descricaoProjeto = "Reforma dos quartos dos filhos do apartamento 101 do Edf. Azul."

    console.log('\nCriando um novo projeto...')
    const projeto1 = createNewProject(nomeProjeto, descricaoProjeto, cliente1, arquiteto1);

    console.log('\nSimulando entradas do usuário para criação de duas tarefas...')
    let nomeTarefa1 = "Levantamento in loco";
    let descricaoTarefa1 = "Ir ao apartamento realizar a medição dos quartos";
    let nomeTarefa2 = "Brienfing com cliente";
    let descricaoTarefa2 = "Marcar reunião com cliente para elaboração do briefing";

    console.log('\nCriando novas tarefas...')
    const tarefa1 = createNewTask(nomeTarefa1, descricaoTarefa1);
    const tarefa2 = createNewTask(nomeTarefa2, descricaoTarefa2);

    console.log('\nAdicionando tarefas ao projeto 1...')
    projeto1.addTask(tarefa1);
    projeto1.addTask(tarefa2);

    console.log('\nMarcando a tarefa 1 como concluída...');
    tarefa1.completeTask();

    console.log('\nExportando informações do projeto para o arquivo JSON...');
        exportProjectToJson(projeto1);
}

main();