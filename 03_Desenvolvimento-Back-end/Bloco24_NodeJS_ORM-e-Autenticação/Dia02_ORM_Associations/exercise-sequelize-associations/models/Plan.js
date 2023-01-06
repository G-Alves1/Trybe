module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
    tableName: 'Plans',
    underscored: true,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient,
      { foreignKey: 'plan_id', as: 'patients' });
  };

  return Plan;
};