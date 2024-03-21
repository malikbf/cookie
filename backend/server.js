const express = require('express'); // Importera express för att skapa servern
const mongoose = require('mongoose'); // Importera mongoose för att hantera MongoDB-anslutning

const app = express(); // Skapa en instans av express-appen
const PORT = process.env.PORT || 4000; // Ange en port att lyssna på

// Anslut till MongoDB-databasen
mongoose.connect('mongodb://localhost:27017/kakservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Ansluten till databasen');
})
.catch((error) => {
  console.error('Anslutningsfel:', error);
});

// Middleware för att tolka JSON-data i inkommande förfrågningar
app.use(express.json());

// Exempelrutt för att hantera GET-förfrågningar och returnera data från servern
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data hämtad från servern' });
});

// Exempelrutt för att hantera POST-förfrågningar och spara data i databasen
app.post('/api/data', (req, res) => {
  const { newData } = req.body; // Hämta den nya datan från förfråganens kropp
  // Skapa en ny modellinstans med den nya datan
  const newDataEntry = new DataModel({
    data: newData
  });
  // Spara den nya datan i databasen
  newDataEntry.save()
    .then(() => {
      res.status(201).json({ message: 'Data sparad i databasen' });
    })
    .catch(error => {
      console.error('Fel vid sparande av data:', error);
      res.status(500).json({ error: 'Ett fel uppstod vid sparande av data' });
    });
});

// Starta servern och lyssna på angiven port
app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});