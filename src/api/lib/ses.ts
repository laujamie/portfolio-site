import { SES, Credentials } from "aws-sdk";

const sesClient = new SES({
  region: process.env.AWS_REGION,
  credentials: new Credentials(
    process.env.AWS_LAMBDA_ACCESS_KEY_ID || "",
    process.env.AWS_LAMBDA_SECRET_ACCESS_KEY || ""
  ),
});

export async function sendEmail(
  to: string,
  sender: string,
  replyTo: string,
  subject: string,
  message: string
) {
  const params = {
    Source: sender,
    ReplyToAddresses: [replyTo],
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
  };

  return sesClient.sendEmail(params).promise();
}
