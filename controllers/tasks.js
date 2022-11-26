const Task = require('../model/Task')

const getAllTasks =async(req,res)=>{
    try {
        const tasks = await Task.find({});
        
        res.render('get',{todo:tasks})
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const createTasks =async(req,res)=>{
    try {
        const {todo} = req.body;
        // console.log(todo)
        const task =await Task.create({'name':todo})
        // res.status(201).json({task});
        const tasks = await Task.find({})
        res.render('get',{todo:tasks})

    } catch (error) {
        res.status(500).json({msg:error})
    }
    
    // res.send("success");
}

const getTasks =async(req,res)=>{
    try {
        const {id} = req.params
        const task = await Task.findOne({_id:id})
        // console.log("evnom",task);
        if(!task){
            return res.status(404).json({msg:`no task with id:${id}`})
        }
        res.render('single_task',{item:task})
        // res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTasks =async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true
        });
        if(!task){
            return res.status(404).json({msg:`no task with id:-${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTasks =async(req,res)=>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no item found with id:-${taskID}`})
        }
            res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const delete_btn = async(req,res)=>{
    try {
        const {id} = req.params
        const task = await Task.findOneAndDelete({_id:id})
        const tasks = await Task.find({})
        res.render('get',{todo:tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const update_btn =async(req,res)=>{
    try {
        const {check,todo} = req.body
        const {id} = req.params
        var bool = false;
        if(check){
            bool=true;
        }
        console.log(todo);
        if(!todo){
            const task = await Task.findOneAndUpdate({_id:id},{'completed':bool},{
                new:true
                });    
        }
        else{
            const task = await Task.findOneAndUpdate({_id:id},{'name':todo,'completed':bool},{
                new:true,
                runValidators:true
                });
        }
        
        const tasks = await Task.find({})
        res.redirect('/api/v1/tasks')

    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports={
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,
    delete_btn,
    update_btn
}