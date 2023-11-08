/* IMPORTAÇÃO */
const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

/* FIM - IMPORTAÇÃO */

/* CRIAR AS ROTAS */
router.get('/add', TaskController.createTask)  // createTask, só pra puxar a view
router.post('/add', TaskController.createTaskSave)  // createTaskSave. pra salvar os dados
router.post('/remove', TaskController.removeTask)
router.get('/', TaskController.showTasks)

module.exports = router