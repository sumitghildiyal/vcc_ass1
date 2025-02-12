const express = require('express');
const app = express();
const port = 4000;

// Endpoint to get weather data
app.get('/api/weather', (req, res) => {
    const weatherData = {
        city: 'New York',
        temperature: '15°C',
        condition: 'Cloudy'
    };
    res.json(weatherData);
});

app.listen(port, () => {
    console.log(`Weather Service running at http://localhost:${port}`);
});

