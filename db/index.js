const Sequelize = require('sequelize')

var sequelize = new Sequelize( 'platform', 'Oleg', 'Password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  }
})

sequelize.sync();

module.exports = { User };
