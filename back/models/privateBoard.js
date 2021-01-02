const Sequelize = require('sequelize');

module.exports = class PrivateBoard extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            name : {
                type : Sequelize.STRING(53),
                allowNull : false,
            },
            email : {
                type : Sequelize.STRING(53),
            },
            memo : {
                type : Sequelize.STRING(530),
                allowNull : false,
            },
        }, {
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : 'PrivateBoard',
            tableName : 'private_board',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }
}