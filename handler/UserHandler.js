const User = require('../models').CoreUser;
const UUID = require('uuid/v4');

module.exports = {

    createUser(userData) {
        return new Promise((resolve, reject) => {
            User.create({
                uuid: userData.uuid,
                email: userData.email,
            }).then(user => resolve(user))
                .catch(err => reject(err))
        })
    },

    completeUser(uuid, userData) {
        return new Promise((resolve, reject) => {
            User.find({where: {uuid: uuid}})
                .then(user => {
                    if (user) {
                        user.updateAttributes({
                            name: userData.name,
                            surname: userData.surname,
                            mobile: userData.mobile,
                            location: userData.location
                        }).then(user => {
                            resolve(user)
                        })
                    }
                })
                .catch(err => reject(err));
        })
    },

    findUserByUUID(uuid) {
        return new Promise((resolve, reject) => {
            User.find({where: {uuid: uuid}})
                .then(user => resolve(user))
                .catch(err => reject(err))
        })
    }
};