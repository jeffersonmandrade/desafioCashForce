module.exports = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define("orderportion", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nDup: DataTypes.STRING(255),
    dVenc: DataTypes.STRING(255),
    vDup: DataTypes.STRING(255),
    availableToMarket: DataTypes.TINYINT(1),
    orderId: DataTypes.INTEGER(11),
  });

  return Orderportion;
};
