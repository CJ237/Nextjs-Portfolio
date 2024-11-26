export function sendEmail(data) {
    const apiEndpoint = "/api/email"; // Your backend API endpoint

    fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Specify JSON format
        },
        body: JSON.stringify(data), // Send the data as JSON
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to send email");
            }
            return res.json();
        })
        .then((response) => {
            alert(response.message); // Show success message
        })
        .catch((err) => {
            alert(`Error: ${err.message}`); // Show error message
        });
}
