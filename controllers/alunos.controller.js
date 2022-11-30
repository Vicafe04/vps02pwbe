const Aluno = require('../models/alunos.model');
const con = require('../dao/dao.js');

const readAll = (req, res) => {
    con.query(Aluno.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const create = async (req, res) => {
    con.query(Aluno.create(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const update = (req, res) => {
    let string = Aluno.update(req.body);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    readAll,
    create,
    update
}