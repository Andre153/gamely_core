const UserGames = require('../models').UserGames;

module.exports = {

    findGameFeeds() {
        return new Promise((resolve, reject) => {
            UserGames.findAll().then(games => {
                resolve(games)
            }, err => {
                reject(err)
            })
        });
    }
}

;