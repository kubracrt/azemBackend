const Banner = require("../models/Banner");

const createBanner = async (req, res) => {
  try {
    const { TamamlananProje, TecrübeYili, Müsteri } = req.body;
    if (!TamamlananProje || !TecrübeYili || !Müsteri) {
      return res.status(400).json({ message: "Tüm alanlar doldurulmalıdır" });
    }
    const banner = await new Banner({ TamamlananProje, TecrübeYili, Müsteri }).save();
    return res.status(201).json({ ...banner._doc, ok: true, success: "Banner başarıyla kaydedildi" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getBanner = async (req, res) => {
  try {
    const banner = await Banner.findOne(); 
    return res.status(200).json(banner);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Banner.findByIdAndUpdate(id, req.body, { new: true });
    if (!update) {
      return res.status(404).json({ message: "Banner bulunamadı" });
    }
    res.status(200).json(update);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBanner = await Banner.findByIdAndDelete(id);
    if (!deletedBanner) {
      return res.status(404).json({ message: "Banner bulunamadı" });
    }
    res.status(200).json({ message: "Banner başarıyla silindi" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createBanner, getBanner, updateBanner, deleteBanner };