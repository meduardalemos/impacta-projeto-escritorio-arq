const Task = require('./task');

class Project {
    constructor(name, description, client, architect) {
        this.name = name;
        this.description = description;
        this.client = client;
        this.architect = architect;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        console.log(`A tarefa ${task.name} foi adicionada ao projeto ${this.name} com sucesso!`);
    }
}

module.exports = Project;