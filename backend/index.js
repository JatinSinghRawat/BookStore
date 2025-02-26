import express from 'express';
import 'dotenv/config';
import connecToMongoDB from './db/connectToMongoDB.js';
import cors from 'cors'
import nodemailer from 'nodemailer'

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())// It will parse the data into json we are sending through body


// Nodemailer Transporter setup (using Gmail for example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'Your e-mail address',
      pass: 'Your password', // Use an app password for security
  },
});

app.post('/send-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
  }

  const mailOptions = {
      from: 'Your email'
      to: email,
      subject: 'Welcome to our Platform!',
      text: 'Thank you for subscribing! We are excited to have you on board. Stay tuned for more updates.',
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Failed to send email' });
    }

    console.log('Email sent:', info.response);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
});
});


app.listen(port, () => {
  connecToMongoDB();
  console.log(`Server listening on port ${port}`)
}) 

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute);
