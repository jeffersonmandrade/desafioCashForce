module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define("offer", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tax: DataTypes.STRING(255),
    tariff: DataTypes.STRING(255),
    adValorem: DataTypes.STRING(255),
    float: DataTypes.STRING(255),
    iof: DataTypes.STRING(255),
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.TINYINT(1),
    paymentStatusProvider: DataTypes.TINYINT(1),
    orderId: DataTypes.INTEGER(11),
    sponsorId: DataTypes.INTEGER(11),
  });

  return Offer;
};
