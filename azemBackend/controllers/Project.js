const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      return res.status(400).json({ message: "Tüm alanlar doldurulmalıdır" });
    }
    const project = await new Project({ title, description, image }).save();
    return res.status(201).json({ ...project._doc, ok: true, success: "Proje başarıyla kaydedildi" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getProject = async (req, res) => {
  try {
    const projects = await Project.find({});
    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!update) {
      return res.status(404).json({ message: "Proje bulunamadı" });
    }
    res.status(200).json(update);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Proje bulunamadı" });
    }
    res.status(200).json({ message: "Proje başarıyla silindi" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createProject, getProject, updateProject, deleteProject };
