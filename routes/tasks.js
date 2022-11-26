const express =require('express');
const router = express.Router()

const {getAllTasks,createTasks,getTasks,updateTasks,deleteTasks,delete_btn,update_btn} = require('../controllers/tasks')


router.get('/',getAllTasks)
router.post('/',createTasks)
router.get('/:id',getTasks)
router.patch('/:id',updateTasks)
router.delete('/:id',deleteTasks)


router.get('/delete/:id',delete_btn)
router.post('/update/:id',update_btn)

module.exports=router;