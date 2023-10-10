const Todo1 = require("../models/user1");

const createData = async (req, res) => {
  try {
    const { fullName, nickName, rollNo, email } = req.body;

    const todo1 = new Todo1({
      fullName,
      nickName,
      rollNo,
      email,
    });
    console.log(fullName);
    await todo1.save();
    res.json(todo1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDataByFullName = async (req, res) => {
  try {
    let fullName = req.params.fullName;
    let dataAgainstName = await Todo1.find({ fullName: fullName });
    if (!dataAgainstName) {
      return res.status(404).json({ msg: "data ni mila bhai" });
    }
    res.json(dataAgainstName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createData,
  getDataByFullName,
};
