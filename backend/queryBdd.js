
const db = require("./connect");

module.exports = {
    //création d'un user
    userCreate: function(insert) {
        return db.query('INSERT INTO users (email, password, profilePic) VALUES (?,?,?,?,?)', insert);
    },

    //vérification email unique
    userEmailUnique: function(insertEMail) {
        return db.query('SELECT email FROM users WHERE email = ?', insertEMail);
    },

}