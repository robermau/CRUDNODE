const {getAll , deleteOne } = require('../models/characterModels')



const deleteCharacter = async(params) => {
 const result = await deleteOne({id : params})

 return result
}
const getAllCharacters = async(params) => {
 const result = await getAll()

 return result
}


module.exports = {
    deleteCharacter,
    getAllCharacters

}