document.addEventListener("DOMContentLoaded", function () {
  // Get the modal overlay and popups
  const overlay = document.querySelector(".popup-overlay");
  const loginButton = document.querySelector(".login-button");
  const registerButton = document.querySelector(".register-button");
  const loginPopup = document.getElementById("loginPopup");
  const registerPopup = document.getElementById("registerPopup");
  const closeButtons = document.querySelectorAll(".close");

  // Open login popup
  loginButton.addEventListener("click", function (e) {
    e.stopPropagation();
    openPopup(loginPopup);
  });

  // Open register popup
  registerButton.addEventListener("click", function (e) {
    e.stopPropagation();
    openPopup(registerPopup);
  });

  // Close popups when clicking close button
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      closePopup(loginPopup);
      closePopup(registerPopup);
    });
  });

  // Close the popup when clicking outside the box
  overlay.addEventListener("click", function () {
    closePopup(loginPopup);
    closePopup(registerPopup);
  });

  // Prevent closing when clicking inside the popups
  loginPopup.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  registerPopup.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  function openPopup(popup) {
    overlay.style.display = "block";
    popup.style.display = "flex";
  }

  function closePopup(popup) {
    overlay.style.display = "none";
    popup.style.display = "none";
  }
});
