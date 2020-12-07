const Sequelize = require('sequelize');

module.exports = class PublicBoard extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            name : {
                type : Sequelize.STRING(53),
                allowNull : true,
            },
            memo : {
                type : Sequelize.STRING(530),
                allowNull : false,
            },
        }, {
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : 'PublicBoard',
            tableName : 'public_board',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }

    // static associate(db){

    // }
}