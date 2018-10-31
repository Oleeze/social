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
    allowNull: false,
    unique: {
      args: true,
      msg: 'Oops. Looks like you already have an account with this email address. Please try to login.'
    },
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
