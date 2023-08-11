const { DataTypes } = require('sequelize');

const studentProfileModel = (sequelize) => {
  const StudentProfile = sequelize.define('StudentProfile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    enroll: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return StudentProfile;
};

module.exports = studentProfileModel;
