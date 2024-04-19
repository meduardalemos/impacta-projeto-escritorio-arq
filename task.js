class Task {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.completed = false;
    }

    completeTask() {
        this.completed = true;
        console.log(`A tarefa ${this.name} foi concluída!`);
    }
}

module.exports = Task;