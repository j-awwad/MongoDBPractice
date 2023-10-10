const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const user = require("../models/auth");

//sign up api

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    const loginUser = new user({ username, email, password: hashpassword });
    await loginUser.save();
    res.status(201).json({ message: "User created Successfully " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userr = await user.findOne({ email });

    if (userr && (await bcrypt.compare(password, userr.password))) {
      const token = jwt.sign(
        { userId: user.id },
        "11111111111111111111111111111111",
        {
          expiresIn: "1hr",
        }
      );
      res.status(200).json(token);
    } else {
      res.status(401).json({ error: "invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup, login };
