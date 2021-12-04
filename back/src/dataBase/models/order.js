module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    orderNfId: DataTypes.STRING(255),
    orderNumber: DataTypes.STRING(255),
    orderPath: DataTypes.STRING(255),
    orderFileName: DataTypes.STRING(255),
    orderOriginalName: DataTypes.STRING(255),
    emissionDate: DataTypes.STRING(255),
    pdfFile: DataTypes.STRING(255),
    emitedTo: DataTypes.STRING(255),
    nNf: DataTypes.STRING(255),
    CTE: DataTypes.STRING(255),
    value: DataTypes.STRING(255),
    cnpjId: DataTypes.INTEGER(11),
    userId: DataTypes.INTEGER(11),
    buyerId: DataTypes.INTEGER(11),
    providerId: DataTypes.INTEGER(11),
    orderStatusBuyer: DataTypes.INTEGER(11),
    orderStatusProvider: DataTypes.INTEGER(11),
    deliveryReceipt: DataTypes.INTEGER(11),
    cargoPackingList: DataTypes.INTEGER(11),
    deliveryCtrc: DataTypes.INTEGER(11),
  });

  return Order;
};
