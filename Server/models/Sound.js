module.exports = (sequelize, DataTypes) => {
    const Sound = sequelize.define("Sound", {
        name: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
        genre: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
        url: { type: DataTypes.STRING , allowNull: false, validate: { notEmpty: true } },
        numLikes: { type: DataTypes.MEDIUMINT, allowNull: false, validate: { notEmpty: true } },
    }); //sound sql db

    //link list to associate a sound to a user
    Sound.associate = (models) => {
        Sound.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Sound;
}