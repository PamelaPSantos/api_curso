const cursoService = require('../service/cursoService');

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: '', result: [] };

    let cursos = await cursoService.buscarTodos();

    for (let i in cursos)
      json.result.push({
        codigo: cursos[i].codigo,
        linguagem: cursos[i].linguagem,
        professor: cursos[i].professor,
      });

    res.json(json);
  },
  buscarUm: async (req, res) => {
    let json = { error: '', result: {} };

    let codigo = req.params.codigo;
    let curso = await cursoService.buscarUm(codigo);

    if (curso) {
      json.result = curso;
    }
    res.json(json);
  },
  inserir: async (req, res) => {
    let json = { error: '', result: {} };

    let professor = req.body.professor;
    let linguagem = req.body.linguagem;

    if (professor && linguagem) {
      let cursoCodigo = await cursoService.inserir(professor, linguagem);
      json.result = {
        codigo: cursoCodigo,
        professor,
        linguagem,
      };
    } else {
      json.error = 'Campos não enviados';
    }
    res.json(json);
  },
  alterar: async (req, res) => {
    let json = { error: '', result: {} };

    let codigo = req.params.codigo;
    let professor = req.body.professor;
    let linguagem = req.body.linguagem;

    if (codigo && professor && linguagem) {
      await cursoService.alterar(codigo, professor, linguagem);
      json.result = {
        codigo,
        professor,
        linguagem,
      };
    } else {
      json.error = 'Campos não enviados';
    }
    res.json(json);
  },
  excluir: async (req, res) => {
    let json = { error: '', result: {} };
    await cursoService.excluir(req.params.codigo);
    res.json(json);
  },
};
