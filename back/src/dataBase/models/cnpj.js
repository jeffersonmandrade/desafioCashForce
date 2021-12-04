module.exports = (sequelize, DataTypes) => {
  const cnpj = sequelize.define("cnpj", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cnpj: DataTypes.STRING(255),
    companyType: DataTypes.STRING(255),
  });
  cnpj.associate = (models) => {
    cnpj.hasMany(models.buyer, { foreingKey: "cnpjId", as: "buyer" });
    cnpj.hasMany(models.order, { foreingKey: "cnpjId", as: "order" });
    cnpj.hasMany(models.provider, { foreingKey: "cnpjId", as: "provider" });
    cnpj.hasMany(models.sponsor, { foreingKey: "cnpjId", as: "sponsor" });
  };
  return cnpj;
};
