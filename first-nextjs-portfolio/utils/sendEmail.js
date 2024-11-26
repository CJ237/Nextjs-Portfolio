import axios from "axios";

export function sendEmail(data) {
    const apiEndpoint = "/api/email";

    axios
        .post(apiEndpoint, data) // Axios automatically stringifies `data` for you
        .then((response) => {
            console.log(response.data.message); // Handle the success message from the API
        })
        .catch((error) => {
            console.error("Error sending email:", error.response?.data || error.message);
            console.log("Failed to send the message. Please try again.");
        });
}