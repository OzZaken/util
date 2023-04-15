const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = new Sequelize("sqlite::memory:")

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

const jane = await User.create({ name: "Jane" })

(async () => {
  await sequelize.sync({ force: true })
  // Code here
})()


// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"
