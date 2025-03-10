document.addEventListener("DOMContentLoaded", function () {
  const submenuTrigger = document.querySelector(".has-submenu .nav-main");

  submenuTrigger.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const notifIcon = document.getElementById("notif-icon");
  const notificationPanel = document.getElementById("notificationPanel");
  const clearAllBtn = document.getElementById("clearAll");

  // Toggle Notification Panel
  notifIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      notificationPanel.classList.toggle("show");
  });

  // Close when clicking outside
  document.addEventListener("click", function (event) {
      if (!notificationPanel.contains(event.target) && event.target !== notifIcon) {
          notificationPanel.classList.remove("show");
      }
  });

  // Mark Notification as Read
  document.querySelectorAll(".mark-read").forEach((button) => {
      button.addEventListener("click", function () {
          this.parentElement.style.opacity = "0";
          setTimeout(() => this.parentElement.remove(), 300);
      });
  });

  // Clear All Notifications
  clearAllBtn.addEventListener("click", function () {
      document.getElementById("notificationList").innerHTML = `<p style="text-align: center; color: black;">No new notifications 🎉</p>`;
  });
});
