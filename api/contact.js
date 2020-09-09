const createHandler = require('./lib/handler');
const { sendEmail } = require('./lib/ses');
const { sanitizeInput, validateEmail } = require('./lib/input');

const contactHandler = async (event, context) => {
  try {
    const email = process.env.CONTACT_EMAIL;
    const { name, message, replyTo } = event['queryStringParameters'];

    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedReplyTo = sanitizeInput(replyTo);

    validateEmail(replyTo);

    await sendEmail(
      email,
      email,
      sanitizedReplyTo,
      `New Message from jamielau.me`,
      `Sender: ${sanitizedName}\n\nEmail: ${sanitizedReplyTo}\n\n${sanitizedMessage}`
    );
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
  return {
    statusCode: 200,
    body: process.env.NODE_ENV,
  };
};

exports.handler = createHandler(contactHandler);
