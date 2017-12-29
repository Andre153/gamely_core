const User = require('../models').CoreUser;
const UserGames = require('../models').UserGames;
const UserAdmin = require('../models').UserAdmin;
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

    addProfilePicture(uuid, userData) {
        console.log('Profile> Adding profile picture');
        console.log(`Profile> ${userData.toString()}`);
        console.log(`Profile> ${userData.profilePicture}`);
        return new Promise((resolve, reject) => {
            User.find({where: {uuid: uuid}})
                .then(user => {
                    if (user) {
                        user.updateAttributes({
                            profilePicture: userData.profilePicture
                        }).then(user => {
                            resolve(user)
                        })
                    }
                })
                .catch(err => reject(err));
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
                            UserAdmin.create({
                                user_uuid: uuid,
                                followers: 0,
                                favourites: 0,
                                games_added: 0,
                                games_sold: 0
                            });
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
    },

    findProfileData(uuid) {
        return new Promise((resolve, reject) => {
            try {
                let profileData = {};
                User.find({where: {uuid: uuid}})
                    .then(user => {
                        profileData.user = user;
                        UserAdmin.find({where: {user_uuid: uuid}})
                            .then(admin => {
                                profileData.admin = admin;
                                resolve(profileData)
                            })
                    });


            }catch (ex) {
                return reject(ex)
            }
        })
    },

    addGame(uuid, gameData) {
        return new Promise((resolve, reject) => {
            UserGames.create({
                user_uuid: uuid,
                game_uuid: gameData.gameUUID,
                price: gameData.price,
                status: 'ACTIVE',
                image_url: gameData.imageURL
            }).then(user => {
                resolve(user)
            })
                .catch(err => reject(err))
        })
    }
};