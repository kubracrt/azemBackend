const Section = require("../models/Section");

const getSection = async (req, res) => {
  try {
    const sections = await Section.find({});
    res.json(sections);
  } catch (error) {
    console.error("Bölümleri getirirken bir hata oluştu:", error);
    res.status(500).send("Sunucu Hatası");
  }
};

const createSection = async (req, res) => {
  try {
    const { section, content } = req.body;
    if (!section || !content) {
      return res.status(400).send("Bölüm ve içerik gerekli");
    }
    const newSection = new Section({ section, content });
    await newSection.save();
    res.status(201).json(newSection);
  } catch (error) {
    console.error("Bölüm oluştururken bir hata oluştu:", error);
    res.status(400).send("Kötü İstek");
  }
};

const updateSection = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSection = await Section.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSection) {
      return res.status(404).json({ message: "Bölüm bulunamadı" });
    }
    res.status(200).json(updatedSection);
  } catch (error) {
    console.error("Bölüm güncellerken bir hata oluştu:", error);
    res.status(500).json({ message: "Sunucu Hatası" });
  }
};

const deleteSection = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSection = await Section.findByIdAndDelete(id);
    if (!deletedSection) {
      return res.status(404).json({ message: "Bölüm bulunamadı" });
    }
    res.status(200).json({ message: "Bölüm başarıyla silindi" });
  } catch (error) {
    console.error("Bölüm silerken bir hata oluştu:", error);
    res.status(500).json({ message: "Sunucu Hatası" });
  }
};

const getSectionByName = async (req, res) => {
  try {
    const sectionName = req.params.sectionName;
    const sectionData = await Section.findOne({ section: sectionName });
    
    if (!sectionData) {
      return res.status(404).json({ message: "Bölüm bulunamadı" });
    }
    
    res.status(200).json(sectionData);
  } catch (error) {
    console.error("Bölümü getirirken bir hata oluştu:", error);
    res.status(500).json({ message: "Sunucu Hatası" });
  }
};

module.exports = { getSection, createSection, updateSection, deleteSection, getSectionByName };
