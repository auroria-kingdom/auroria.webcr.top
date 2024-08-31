document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Assuming your form element is a <form> tag

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.querySelector("[data-hs-file-upload-trigger]");
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("File uploaded successfully:", jsonResponse);
      } else {
        console.error("File upload failed:", response.statusText);
      }
    } else {
      console.error("No file selected");
    }
  });
}); // TODO: Do the form handle logic
