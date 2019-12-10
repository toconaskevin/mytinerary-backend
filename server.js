const express = require('express');
const cors = require('cors');
const passport = require('passport');

//LOCAL PASSPORT AUTH
require('./auth/PassportJwt');


require('dotenv').config();

require('./functions/database');

const app = express();

// app.use(passport.initialize());
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/routerGoogle'));

app.use('/api', require('./routes/routerItineraries'));
app.use('/api', require('./routes/routerActivities'));
app.use('/api', require('./routes/routerCities'));

//USE PASSPORT TO APPLY JWT STRATEGY ROLE PERMISSIONS
app.use('/api', /*passport.authorize('jwt', {session: false}),*/ require('./routes/routerUsers'));



app.listen(process.env.PORT, () => console.log("Listening on PORT " + process.env.PORT));