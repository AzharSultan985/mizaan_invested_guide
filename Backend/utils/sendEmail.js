import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || 'azharsultan985@gmail.com',
    pass: process.env.EMAIL_PASS || 'udyp uodp jbvw vjiw',
  },
});

const sendEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"Mizaan Investor" <${process.env.EMAIL_USER  || 'azharsultan985@gmail.com'}>`,
    to: email,
    subject: "Verify Your Email",
    html: `
      <div style="font-family:Arial,sans-serif;padding:30px">
        <h2>Email Verification</h2>

        <p>Your verification code is:</p>

        <h1 style="
            letter-spacing:8px;
            color:#10b981;
            font-size:34px;
        ">
          ${otp}
        </h1>

        <p>This code will expire in <b>2 minutes</b>.</p>

        <p>If you didn't request this, simply ignore this email.</p>

        <br>

        <small>© Mizaan Investor</small>
      </div>
    `,
  });
};

export default sendEmail;