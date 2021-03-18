const db = require('../data/config')

const find = () => {
    return db('destinations')
}

const findById = (id) => {
    return db('destinations')
        .where({ id }, id)
        .first()
}

const create = async (data) => {
    const [id] = await db('destinations')
        .insert(data)
    return findById(id)

}

const remove = async (id) => {
    return db('destinations')
        .where({id}, id)
        .del()
}

module.exports = {
    find,
    findById,
    create,
    remove
}