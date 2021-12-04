module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("order", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    cnpjId: { type: DataTypes.INTEGER, foreingKey: true },
    userId: { type: DataTypes.INTEGER, foreingKey: true },
    buyerId: { type: DataTypes.INTEGER, foreingKey: true },
    providerId: { type: DataTypes.INTEGER, foreingKey: true },
    orderStatusBuyer: DataTypes.INTEGER,
    orderStatusProvider: DataTypes.INTEGER,
    deliveryReceipt: DataTypes.INTEGER,
    cargoPackingList: DataTypes.INTEGER,
    deliveryCtrc: DataTypes.INTEGER,
  });
  order.associate = (models) => {
    order.belongsTo(models.buyer, {foreignKey:"buyerId", as:"buyer"});
    order.belongsTo(models.cnpj, {foreignKey:"cnpjId", as:"cnpj"});
    order.belongsTo(models.user, {foreignKey:"userId", as:"user"});
    order.belongsTo(models.provider, {foreignKey:"providerId", as:"provider"});
    order.hasMany(models.orderportion,{foreignKey:"orderId", as:"orderportion"})
    order.hasMany(models.offer,{foreignKey:"OrderId", as: "offer"})

  }
  return order;
};
