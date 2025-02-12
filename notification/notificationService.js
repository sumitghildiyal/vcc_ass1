const express = require('express');
const axios = require('axios'); // For making HTTP requests
const app = express();
const port = 5000;

// Endpoint to send notification
app.get('/api/notify', async (req, res) => {
    try {
        // Fetch weather data from Weather Service
        const response = await axios.get('http://192.168.56.101:4000/api/weather'); // Replace with Weather Service's IP
        const weatherData = response.data;

        // Simulate sending a notification
        const notificationMessage = `Weather Alert! Current weather in ${weatherData.city}: ${weatherData.temperature}, ${weatherData.condition}.`;
        console.log(notificationMessage);

        res.json({ message: 'Notification sent successfully!', notification: notificationMessage });
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ message: 'Failed to send notification' });
    }
});

app.listen(port, () => {
    console.log(`Notification Service running at http://localhost:${port}`);
});

