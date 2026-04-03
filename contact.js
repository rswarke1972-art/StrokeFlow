function sendMessage(event) {
  event.preventDefault();

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  document.getElementById("status").innerText = "Sending...";

  emailjs.send(
    "service_a7ayyfv",       // your service id
    "template_4acypww",      // ← paste your template id here
    params
  )
  .then(function(response) {
    document.getElementById("status").innerText =
      "✅ Message sent successfully!";
    document.querySelector("form").reset();
  })
  .catch(function(error) {
    document.getElementById("status").innerText =
      "❌ Failed to send message.";
    console.error(error);
  });
}

function goBack() {
  window.history.back();
}