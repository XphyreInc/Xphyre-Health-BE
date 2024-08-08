const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors'); // Import the cors package
const app = express();
const router = express.Router();
const sendEmail = require('./testMailService');

app.use(cors({
    origin: ['http://localhost:3000', 'https://www.xphyrehealth.com']
}));


// Middleware to parse JSON bodies
app.use(express.json());

// Route for sending email
router.post('/send_email', async (req, res) => {
    
    const data = req.body;
    try {
        await sendEmail(data);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

// Use the router
app.use('/api', router);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app for serverless deployment if needed
module.exports = app;
module.exports.handler = serverless(app);
