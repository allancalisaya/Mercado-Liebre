const controllers = {
    index: (req, res) => {
        return res.render ('crear-cuenta')
    },

    formulario: (req, res) => {
        return res.render ('ingresar')
        },

    logo: (req , res) => {
        return res.render ('logo.ejs')
    }    
}
console.log('completado')
module.exports = controllers;