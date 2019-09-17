const User = require("../../models/User");

module.exports = {
  async index(req, res) {
    const { email, name, phoneNumber } = req.body;

    if (!(email || name || phoneNumber)) {
      return res.json({
        error:
          "É necessario informar, nome ou email ou número de telefone válido"
      });
    }

    const user = await User.find({
      $or: [{ email: email }, { name: name }, { phoneNumber: phoneNumber }]
    });

    return res.json({ user });
  },

  async store(req, res) {
    const { name, email, phoneNumber } = req.body;

    const emailExists = await User.findOne({ email: email }).catch(e =>
      console.log(e)
    );

    if (emailExists) return res.json(emailExists);

    const user = await User.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber
    }).catch(e => console.log(e));

    return res.json(user);
  }
};
