module.exports = app => {
  const {  naoExistiValor, existirValor } = app.api.validation

  const save = (req, res) => {
    const category = {
      id: req.body.id,
      name: req.body.name,
      parentId: req.body.parentId
  }

  }
}