const twilio = require("twilio");

// Twilio Credentials
const accountSid = "your_account_sid";
const authToken = "your_auth_token";
const client = twilio(accountSid, authToken);

function sendSMS(message) {
    client.messages
        .create({
            body: message,
            from: "+1234567890", // Twilio phone number
            to: "+0987654321", // User's phone number
        })
        .then(() => console.log("SMS sent"))
        .catch((error) => console.error("Error sending SMS:", error));
}

module.exports = { sendSMS };
