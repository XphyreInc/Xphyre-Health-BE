const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.com',
    secure: true,
    port: 465,
    auth: {
        user: 'muhammad.anoosh@xphyre.com',
        pass: '@noosh1134'
    },
    tls: { rejectUnauthorized: false },
});

const sendEmail = (data) => {
    const dataString = JSON.stringify(data, null, 2);

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { width: 80%; margin: auto; }
        h1 { color: #0056b3; }
        .info { margin: 20px 0; }
        .info div { margin-bottom: 10px; }
      </style>
      <title>Appointment Details</title>
    </head>
    <body>
      <div class="container">
        <h1>Appointment Details</h1>
        <div class="info">
          <div><strong>Full Name:</strong> ${data.fullname}</div>
          <div><strong>Email:</strong> ${data.email}</div>
          <div><strong>Phone Number:</strong> ${data.phoneNumber}</div>
          <div><strong>State:</strong> ${data.state}</div>
          <div><strong>Monthly Collections:</strong> ${data.monthlyCollections}</div>
        </div>
        <p>Thank you for providing your information. If you have any questions, feel free to contact us.</p>
      </div>
    </body>
    </html>
    `;

    // Set up mail options
    const mailOptions = {
        from: 'muhammad.anoosh@xphyre.com',
        to: 'muhammad.anoosh@xphyre.com',
        subject: 'Appointment',
        html: htmlTemplate
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
