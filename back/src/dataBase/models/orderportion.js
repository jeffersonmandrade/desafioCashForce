module.exports = (sequelize, DataTypes) => {
  const orderportion = sequelize.define("orderportion", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.TINYINT,
    orderId: { type: DataTypes.INTEGER, foreingKey: true },
  });

  orderportion.associate = (models) => {
    orderportion.belongsTo(models.order,{foreignKey:"orderId", as: "order"})

  }

  return orderportion;

};
