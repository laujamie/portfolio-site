const { SES, Credentials } = require('aws-sdk');

const sesClient = new SES({
  region: process.env.AWS_REGION,
  credentials: new Credentials(
    process.env.AWS_ACCESS_KEY_ID,
    process.env.AWS_SECRET_ACCESS_KEY
  ),
});

async function sendEmail(to, sender, replyTo, subject, message) {
  const params = {
    Source: sender,
    ReplyToAddresses: [replyTo],
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: message,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
  };

  return await sesClient.sendEmail(params).promise();
}

exports.sendEmail = sendEmail;
