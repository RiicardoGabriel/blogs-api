const express = require('express');
const { login } = require('./controllers/auth.controller');
const { newUser, getUsers } = require('./controllers/Users.controller');

const validateLogin = require('./middlewares/validateLogin.middleware');
const validateToken = require('./middlewares/auth.middleware');
const validateDisplayName = require('./middlewares/validateCreateUserDisplayName.middleware');
const validateEmail = require('./middlewares/validateCreateUserEmail.middleware');
const validatePassword = require('./middlewares/validateCreateUserPassword.middleware');
const validateEmailRegist = require('./middlewares/validateCreateUserEmailRegistered.middleware');

const app = express();

app.use(express.json());

app.get('/user',
validateToken.validateToken,
getUsers);
app.post('/login', validateLogin, login);
app.post('/user', validateDisplayName,
validateEmailRegist,
validatePassword,
validateEmail,
newUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
