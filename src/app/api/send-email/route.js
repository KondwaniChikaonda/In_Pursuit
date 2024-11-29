import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;



export async function POST(request) {
  try {
   
    const { message } = await request.json(); 


    if (!message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    {console.log(process.env.EMAIL,process.env.PASSWORD )}

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, 
        secure: false, 
        auth: {
          user, 
          pass, 
        },
      });
      

    // Mail options
    const mailOptions = {
      from: `"In pursuit" <${user}>`,
      to: "msusafraser@gmail.com", 
      subject: "Message from In pursuit webpage", 
      text: `Message: ${message}`,
      html: `<p><strong>Message:</strong> ${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Success response
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Error response
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
