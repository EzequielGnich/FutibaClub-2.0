const Group = require("./GroupModel");
const User = require("../user/UserModel");

module.exports = {
  async store(req, res, next) {
    const { name } = req.body;
    const { user_id } = req.headers;

    if (!user_id)
      return res
        .status(400)
        .json({ error: "Usuário inexistente ou não logado" });

    if (!name)
      return res.status(400).json({ error: "Informe um nome de grupo válido" });

    const groupName = await Group.findOne({ name });

    if (groupName)
      return res
        .status(200)
        .json({ error: "Grupo já existe em nossa base de dados" });

    const group = await Group.create({
      name,
      users: user_id
    }).catch(error => console.log(error));

    res.status(200).send(group);
  },

  async addUser(req, res) {
    const user_id = req.params.id;
    const { _id } = req.body;

    const user = await User.findById(user_id);

    if (!user)
      return res
        .status(400)
        .json({ error: "usuário não existe na nossa base de dados" });

    const groupExists = await Group.findById({ _id });

    if (!groupExists)
      return res
        .status(400)
        .json({ error: "Grupo não existe na nossa base de dados" });

    const userExistsInGroup = groupExists.users.includes(user_id);

    if (!userExistsInGroup) {
      groupExists.users.push(user_id);

      await groupExists.save();

      return res.status(200).json(groupExists);
    }
    return res
      .status(200)
      .json({ groupExists, error: "Usuário já cadastrado" });
  },

  async index(req, res) {
    const { name } = req.body;

    if (name == "" || null || undefined) {
      return res.status(400).json({
        error: "Por favor informe ao menos uma letra para realizar a pesquisa"
      });
    }

    await Group.find(
      { name: { $regex: ".*" + name + ".*" } },
      (error, data) => {
        if (!data) {
          return res
            .status(400)
            .json({ error: "Erro ao buscar grupos", error });
        } else if (data.length == 0) {
          return res.status(400).json({
            error: "Não foram encontrados grupo(s) com este(s) caractere(s)"
          });
        }
        return res.status(200).json({ group: data });
      }
    );
  }
};
