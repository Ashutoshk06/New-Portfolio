import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter for Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Use environment variable for your email
        pass: process.env.EMAIL_PASS,  // Use environment variable for your email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,  // Corrected from 'form' to 'from'
      to: process.env.EMAIL_USER, // Send to the email in the environment variable
      subject: `Contact from submission form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to send message' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
