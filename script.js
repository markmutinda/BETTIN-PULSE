document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".popup-overlay");
  const loginButton = document.querySelector(".login-button");
  const registerButton = document.querySelector(".register-button");
  const loginPopup = document.getElementById("loginPopup");
  const registerPopup = document.getElementById("registerPopup");
  const closeButtons = document.querySelectorAll(".close");

  loginButton.addEventListener("click", function (e) {
    e.stopPropagation();
    openPopup(loginPopup);
  });

  registerButton.addEventListener("click", function (e) {
    e.stopPropagation();
    openPopup(registerPopup);
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      closePopup(loginPopup);
      closePopup(registerPopup);
    });
  });

  overlay.addEventListener("click", function () {
    closePopup(loginPopup);
    closePopup(registerPopup);
  });

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

  // Randomize main content styles with Pinterest-like layout and slide effects
  const mainContentSections = document.querySelectorAll(
    ".main-content section"
  );
  const layoutPatterns = [
    {
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "10px",
      padding: "10px",
    },
    {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    {
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "30px",
      padding: "30px",
    },
    {
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      gap: "10px",
      padding: "20px",
    },
    {
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      gap: "40px",
      padding: "40px",
    },
  ];

  mainContentSections.forEach((section) => {
    const pattern =
      layoutPatterns[Math.floor(Math.random() * layoutPatterns.length)];
    section.style.gridTemplateColumns = pattern.gridTemplateColumns;
    section.style.gap = pattern.gap;
    section.style.padding = pattern.padding;
    section.classList.add("slide-in");
  });

  // Add slide-in animations to items
  const items = document.querySelectorAll(
    ".game-card, .event-item, .promotion-item, .testimonial-item"
  );
  items.forEach((item) => {
    item.classList.add("slide-in");
  });
});
