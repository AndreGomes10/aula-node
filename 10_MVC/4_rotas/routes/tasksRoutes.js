/* IMPORTAÇÃO */
const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

/* FIM - IMPORTAÇÃO */

/* CRIAR AS ROTAS */
router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)

module.exports = router