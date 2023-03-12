const createHandler = require("./lib/handler");
const { sendEmail } = require("./lib/ses");
const { sanitizeInput, validateEmail } = require("./lib/input");

const contactHandler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const email = process.env.CONTACT_EMAIL;
    const { name, message, replyTo } = JSON.parse(event.body);

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
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify("Your message has been sent successfully!"),
  };
};

exports.handler = createHandler(contactHandler);
