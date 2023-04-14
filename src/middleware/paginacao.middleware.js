module.exports = (req, res, next) => {

    //limit é até onde pesquisar e offset delimita de onde começa a pesquisar
    let { limit, offset } = req.query;

    // definindo o type
    limit = Number(limit);
    offset = Number(offset);

    // if de uma linha
    !limit ? limit = 10: null;
    // nao tem offset definido, então offset = 0. Se ja tiver, não faz nada 
    !offset ? offset = 0: null;

    req.query.limit = limit;
    req.query.offset = offset;

    return next();
}