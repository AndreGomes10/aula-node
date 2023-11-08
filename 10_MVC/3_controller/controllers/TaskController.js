const Task = require('../models/Task')

module.exports = class TaskController{

    // essa função é responsavel apenas para a criação das tarefas
    static createTask(req, res) {
        res.render('tasks/create')
    }
}