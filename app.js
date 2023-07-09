const express = require('express');
const cors= require('cors');
const app = express();
const userRoute = require('./routes/users');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lepinebryan:48s4kHmbtE1gIyrK@clustersimple.ap6nkdr.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

 app.use(cors());
 app.use('/api/auth',userRoute);

module.exports = app;