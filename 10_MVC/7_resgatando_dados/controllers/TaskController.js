const Task = require('../models/Task')

module.exports = class TaskController{

    // essa função é responsavel apenas para a criação das tarefas
    static createTask(req, res) {
        res.render('tasks/create')
    }

    // salvar no banco
    static async createTaskSave(req, res){

        // processando os dados que vem da requisição
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,  // a tarefa começa como false, ela vem incompleta
        }

        // validações
        //processar dados, exemplo: tirar caracteres especiais e etc

        await Task.create(task)

        res.redirect('/tasks')
    }

    // essa função é responsavel para exibir as tarefas
    static async showTasks(req, res) {
        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', { tasks })
    }
}