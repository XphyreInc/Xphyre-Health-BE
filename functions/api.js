const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const sendEmail = require('./mail_service');

router.post('/send_email', async (req, res) => {
    // const { to, subject, text, html } = req.body;

    try {
        await sendEmail();
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app)