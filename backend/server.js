const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/Deyvis_cruz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas
app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
