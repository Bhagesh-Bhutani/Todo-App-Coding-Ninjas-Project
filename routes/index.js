const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home_controller');

router.get('/', home_controller.home_action);

router.post('/create-task', home_controller.add_task_action);

router.post('/delete-tasks', home_controller.delete_task_action);


module.exports = router;