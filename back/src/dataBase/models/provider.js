module.exports = (sequelize, DataTypes) => {
  const provider = sequelize.define("provider", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax:DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition:DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode:DataTypes.STRING,
    address:DataTypes.STRING,
    number: DataTypes.STRING,
    complement:DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAgency:DataTypes.STRING,
    account:DataTypes.STRING,
    documents:DataTypes.STRING,
    phoneNumber:DataTypes.STRING,
    situation:DataTypes.STRING,
    situationDate:DataTypes.STRING,
    cnpjId:{ type: DataTypes.INTEGER, foreingKey: true },
    email:DataTypes.STRING,
  });

  provider.associate = (models) => {
    provider.belongsTo(models.cnpj,{foreignKey:"cnpjId", as:"cnpj"})
    provider.hasMany(models.order,{foreignKey:"providerId", as:"order"})
  }

  return provider;
};