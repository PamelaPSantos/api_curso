const db = require('../db');

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM cursos', (error, result) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(result);
      });
    });
  },

  buscarUm: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'SELECT * FROM cursos WHERE codigo = ?',
        [codigo],
        (error, result) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (result.length > 0) {
            aceito(result[0]);
          } else {
            aceito(false);
          }
        },
      );
    });
  },

  inserir: (professor, linguagem) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'INSERT INTO cursos (professor, linguagem) VALUES (?, ?)',
        [professor, linguagem],
        (error, result) => {
          if (error) {
            rejeitado(error);
            aceito(results.insertCodigo);
            return;
          }
        },
      );
    });
  },
  alterar: (codigo, professor, linguagem) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'UPDATE cursos SET professor = ?, linguagem = ? WHERE codigo = ?',
        [professor, linguagem, codigo],
        (error, result) => {
          if (error) {
            rejeitado(error);
            aceito(results);
            return;
          }
        },
      );
    });
  },
  excluir: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        'DELETE FROM cursos WHERE codigo = ?',
        [codigo],
        (error, result) => {
          if (error) {
            rejeitado(error);
          }
          aceito(result);
        },
      );
    });
  },
};
