const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users.router.js');
const petsRouter = require('./routes/pets.router.js');
const adoptionsRouter = require('./routes/adoption.router.js');
const sessionsRouter = require('./routes/sessions.router.js');
const { mongoUri, port } = require('./config/config.js');
const handlebars = require('express-handlebars');
const { viewsRouter } = require('./routes/views.router.js');

const app = express();
const PORT = port;
const connection = mongoose.connect(mongoUri)

app.use(express.json());
app.use(cookieParser());

/** VIEW ENGINE CONFIG */
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars')

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/', viewsRouter)

app.listen(PORT,()=>console.log(`Listening on ${PORT} passed by render`))
