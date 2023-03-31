import { Handler } from "@netlify/functions";
import { createHandler } from "./lib/handler";
import { sendEmail } from "./lib/ses";
import { sanitizeInput, validateEmail } from "./lib/input";

type ContactBody = {
  name: string | null;
  message: string | null;
  replyTo: string | null;
  subscribe: boolean | null;
};

const contactHandler: Handler = async (event, _) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    if (event.body == null) {
      return {
        statusCode: 400,
        body: "Request body is required.",
      };
    }
    const email = process.env.CONTACT_EMAIL || "test@example.com";
    const {
      name,
      message,
      replyTo,
      // subscribe is a honeypot field
      subscribe: honeypot,
    }: ContactBody = JSON.parse(event.body);

    if (name == null) {
      return {
        statusCode: 400,
        body: "`name` is a required field.",
      };
    }
    if (message == null) {
      return {
        statusCode: 400,
        body: "`message` is a required field.",
      };
    }
    if (replyTo == null) {
      return {
        statusCode: 400,
        body: "`replyTo` is a required field.",
      };
    }

    // Catch for honeypot requests
    if (honeypot) {
      console.log("Honeypot", event.body);
      return {
        statusCode: 200,
        body: "Your message has been sent successfully!",
      };
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedReplyTo = sanitizeInput(replyTo);

    validateEmail(replyTo);

    await sendEmail(
      email,
      email,
      sanitizedReplyTo,
      `New Message from jamielau.me from ${sanitizedName}`,
      sanitizedMessage
    );
  } catch (e: any) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message,
    };
  }
  return {
    statusCode: 200,
    body: "Your message has been sent successfully!",
  };
};

export const handler = createHandler(contactHandler);
