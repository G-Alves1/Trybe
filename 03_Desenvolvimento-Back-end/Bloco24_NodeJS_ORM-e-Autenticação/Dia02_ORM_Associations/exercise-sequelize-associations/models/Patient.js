module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    fullname: DataTypes.STRING,
    plan_id: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan,
      { foreignKey: 'plan_id', as: 'plans' });
  };

  return Patient;
};