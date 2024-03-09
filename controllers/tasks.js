const taskColl = require("../models/tasks");

const getAllTask = async (req, res) => {
  try {
    const tasks = await taskColl.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const tasks = await taskColl.create(req.body);
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ msg: error.errors.name.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const tasks = await taskColl.findById(req.params.id);
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ msg: error.errors.name.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const tasks = await taskColl.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ msg: error.errors.name.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskColl.findByIdAndDelete(req.params.id);
    const tasks = await taskColl.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ msg: error.errors.name.message });
  }
};

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
