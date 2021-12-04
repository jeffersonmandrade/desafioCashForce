module.exports = (sequelize, DataTypes) => {
  const offer = sequelize.define("offer", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.TINYINT,
    paymentStatusProvider: DataTypes.TINYINT,
    orderId: { type: DataTypes.INTEGER, foreingKey: true },
    sponsorId: { type: DataTypes.INTEGER, foreingKey: true },
  });

  offer.associate = (models) =>{
    offer.belongsTo(models.order,{ foreingnKey:"orderId", as: "order"});
    offer.belongsTo(models.sponsor,{foreingnKey:"sponsorId", as:"sponsor"});
  }

  return offer;
};
