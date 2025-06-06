document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    formStatus.innerText = "Sending...";
    formStatus.style.color = "#555";

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formStatus.innerText = "Message sent! ❤️";
        formStatus.style.color = "green";
        form.reset();
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      formStatus.innerText = "Oops! Something went wrong.";
      formStatus.style.color = "red";
    }
  });
});
