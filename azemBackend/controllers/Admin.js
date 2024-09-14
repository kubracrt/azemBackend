const adminSchema = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await adminSchema.findOne({ username });
    
    if (admin) {
      return res.status(400).json({ message: "Böyle bir kullanıcı mevcut" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newAdmin = await adminSchema.create({ username, password: passwordHash });

    const token = jwt.sign({ id: newAdmin._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      newAdmin,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await adminSchema.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Böyle bir admin bulunamadı" });
    }

    const passwordCompare = await bcrypt.compare(password, admin.password);
    if (!passwordCompare) {
      return res.status(400).json({ message: "Girilen şifre yanlış" });
    }

   
    const token = jwt.sign({ id: admin._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      admin,
      token, 
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
