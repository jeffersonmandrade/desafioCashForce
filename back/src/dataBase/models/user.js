module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.TINYINT,
    cashforceAdm: DataTypes.TINYINT,
  });
  user.associate = (models) => {
    user.hasMany(models.order, {foreignKey:"userId", as:"order"})
  };
  return user;
};
