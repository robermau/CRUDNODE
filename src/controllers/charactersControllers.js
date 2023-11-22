const { getAllCharacters, deleteCharacter  } = require('../service/charactersService')
const { get } = require('../routes/mainRoutes')


module.exports = {
getCharacters:  async (req, res) => {
    let data =  await getAllCharacters()
    
    if (data.isError){
        data = 'Hubo un error'
    }
    res.send(data)
},
getCharacter : (req, res) => {
    const id = req.params.id
    const queryParams = req.query
    console.log(queryParams)
    res.send('En teoria yo tendria que devolver el caracter por ID  ,pero aun no se quein me los va a dar')


},

createCharacter :  (req, res) => {
    const data = req.body
    res.send(data)
},

deleteCharacter :  (req, res) => {
    

    const result = deleteCharacter(req.params.id)

    res.send(result)
}
}