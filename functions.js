const Client = require('./client');
const Architect = require('./architect');
const Project = require('./project');
const Task = require('./task');
const fs = require('fs');

function showMenu(){
    console.log('*** MENU DE OPÇÕES ***');
    console.log('1 - Cadastrar novo cliente');
    console.log('2 - Cadastrar novo arquiteto');
    console.log('3 - Cadastrar novo projeto');
    console.log('4 - Cadastrar nova tarefa');
    console.log('5 - Exportar projetos');
}

function createNewProject(name, description, client, architect){
    let project = new Project(name, description, client, architect);
    console.log(`Novo projeto ${project.name} criado com sucesso!`);
    return project;
}

function createNewTask(name, description) {
    let task = new Task(name, description);
    console.log(`Tarefa ${task.name} criada com sucesso`);
    return task;
}

function exportProjectToJson(project){
    const dataJson = JSON.stringify(project);
    const fileName = 'project.json';

    fs.writeFile(fileName, dataJson, (err) => {
        if(err) { console.error("Ocorreu um erro na gravação", err);
        return;
    }
    console.log("Arquivo json criado com sucesso!");
    })
}


module.exports = { showMenu, createNewProject, createNewTask, exportProjectToJson };