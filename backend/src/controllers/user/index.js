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
    const { name, email, phoneNumber, password } = req.body;

    if (name === "" || name === undefined)
      res.json({ error: "É necessário informar um nome de usuário válido" });

    const emailExists = await User.findOne({ email: email }).catch(e =>
      console.log(e)
    );

    if (emailExists)
      return res
        .status(200)
        .json({ user: emailExists, error: "Usuário já cadastrado" });

    if (!emailExists) {
      const user = await User.create({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber
      }).catch(e => console.log(e));

      res.status(200).send({ user });
    }
  }
};
