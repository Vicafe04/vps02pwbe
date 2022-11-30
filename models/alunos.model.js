class Aluno {
    constructor(data) {
        this.id = data.id
        this.nome = data.nome
        this.nascimento = data.nascimento
    }
    static readAll = () => {
        return "select * from alunos";
    }
    
    static create = (model) => {
        return `insert into alunos value(default,'${model.nome}', '${model.nascimento}')`;
    }
    
    static update = (model) => {
        return `update alunos set nome = '${model.nome}', nascimento = '${model.nascimento}' where id = ${model.id}`;
    }
}



module.exports = Aluno;