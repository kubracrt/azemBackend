const { Context } = require("../models/Context");
const createContext = async (req, res) => {
  try {
    console.log(req.body);
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({ message: "Tüm alanlar doldurulmalıdır" });
    }

    let context = await new Context({
      fullname,
      email,
      message,
    }).save();

    return res
      .status(201)
      .json({
        ...context._doc,
        ok: true,
        success: "Form Kayıt İşlemi Başarılı",
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getContext = async (req, res) => {
  try {
    const contexts = await Context.find({});
    return res.status(200).json(contexts);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


const deleteContext = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContext = await Context.findByIdAndDelete(id);
    if (!deletedContext) {
      return res.status(404).json({ message: "Form bulunamadı" });
    }
    res.status(200).json({ message: "Form başarıyla silindi" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createContext, getContext,deleteContext };
