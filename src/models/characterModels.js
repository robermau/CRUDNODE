const {conn} = require('../config/conn')

const getAll = async() => {

    try {
     const [rows] =  await conn.query('SELECT * FROM characters')
      
     return(rows)
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos de ${e}`
        }
        return error


    }
}

const deleteOne = async(id) => {

    try {
     const [rows] =  await conn.query('DELETE  FROM characters WHERE ? ;', id)
      
     return(rows)
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos borrar el registro seleccionado por : ${e}`
        }
        return error


    }
}

module.exports={

    getAll,
    deleteOne
}