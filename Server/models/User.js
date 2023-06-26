module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
        email: { type: DataTypes.TEXT('tiny'), allowNull: false, validate: { notEmpty: true } },
        userPassword: { type: DataTypes.TEXT('tiny') , allowNull: false, validate: { notEmpty: true } },
        profilePicture: { type: DataTypes.TEXT('tiny') , allowNull: false, validate: { notEmpty: true } },
        numLikes: { type: DataTypes.MEDIUMINT, allowNull: false, validate: { notEmpty: true } },
        numPosts: { type: DataTypes.MEDIUMINT, allowNull: false, validate: { notEmpty: true } },
        numFriends: { type: DataTypes.MEDIUMINT, allowNull: false, validate: { notEmpty: true } },
    });

    User.associate = (models) => {
        User.hasMany(models.Sound, {
            onDelete: "cascade"
        });
    };

    return User;
}