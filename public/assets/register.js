document.getElementById("verify").innerHTML =
  `<div class="cf-turnstile"data-sitekey=${process.env.TURNSTILE}></div>`;

document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get the values from the form
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const discord = document.getElementById("discord").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;

    Email.send({
      Host: "smtp.larksuite.com",
      Username: "notifications@auroria.webcr.top",
      Password: process.env.EMAIL_PASSWORD,
      To: "notifications@auroria.webcr.top",
      From: "no-reply@auroria.webcr.top",
      Subject: "Beta Registration for " + firstname,
      Body:
        "Name: " +
        firstname +
        " " +
        lastname +
        "<br>Email: " +
        email +
        "<br>Discord: " +
        discord +
        "<br>Gender: " +
        gender +
        "<br>Country: " +
        country,
    }).then(() => {
      location.href = "./success";
    });
  });
