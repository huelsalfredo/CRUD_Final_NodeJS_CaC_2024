const {Sequelize} = require ("sequelize")

/*  nombre de la base de datos -  user - contraseña - {donde esta alojada?,lenguaje, puerto} */

const db = new Sequelize ("posteos24255","root","",{
    hostDB: process.env.MYSQL_ADDON_HOST,
    dialect: "mysql",
    portDB: process.env.MYSQL_ADDON_PORT
})

// const db = new Sequelize (process.env.MYSQL_ADDON_DB,process.env.MYSQL_ADDON_USER,process.env.MYSQL_ADDON_PASSWORD,{
//     host: process.env.MYSQL_ADDON_HOST,
//     dialect: "mysql",
//     port: process.env.MYSQL_ADDON_PORT,
// })

module.exports= db