module.exports = (sequelize, DataTypes) => {
  const sponsor = sequelize.define("sponsor", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjId: { type: DataTypes.INTEGER, foreingKey: true },
    email: DataTypes.STRING,
  });
  sponsor.associate = (models) => {
    sponsor.belongsTo(models.cnpj,{foreignKey:"cnpjId", as:"cnpj"});
    sponsor.hasMany(models.offer,{foreignKey:"sponsorId", as:"offer"})
  }
  return sponsor;
};
