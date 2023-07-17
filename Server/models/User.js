module.exports = (sequelize, DataTypes) => {
    //user db
    const User = sequelize.define("User", {
        username: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
        email: { type: DataTypes.TEXT('tiny'), allowNull: false, validate: { notEmpty: true } },
        userPassword: { type: DataTypes.TEXT('tiny') , allowNull: false, validate: { notEmpty: true } },
        profilePicture: { type: DataTypes.TEXT('tiny') , allowNull: false, validate: { notEmpty: true } },
        numLikes: { type: DataTypes.MEDIUMINT, allowNull: false, validate: { notEmpty: true } },
        numPosts: { type: DataTypes.MEDIUMINT, allowNull: false, validate: { notEmpty: true } },
        numFriends: { type: DataTypes.MEDIUMINT, allowNull: false, validate: { notEmpty: true } },
    });

    // has many assocaition of user model to sound
    User.associate = (models) => {
        User.hasMany(models.Sound, {
            onDelete: "cascade"
        });
    };

    return User;
}