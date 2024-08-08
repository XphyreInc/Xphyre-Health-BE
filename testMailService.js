const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.com',
    secure: true,
    port: 465,
    auth: {
        user: 'web.development@xphyre.com',
        pass: '@noosh1122'
    },
    tls: { rejectUnauthorized: false },
});

const sendEmail = (data) => {
  console.log(data);
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
          <div><strong>Date:</strong> ${data.date}</div>
          <div><strong>Time:</strong> ${data.time}</div>
          <div><strong>Timezone:</strong> ${data.timeZone}</div>
          
        </div>
        <p>Contact the client as soon as possible</p>
      </div>
    </body>
    </html>
    `;

    // Set up mail options
    const mailOptions = {
        from: 'web.development@xphyre.com',
        to: 'muhammad.anoosh@xphyre.com',
        subject: 'Appointment',
        html: htmlTemplate
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
