const sidebar = document.querySelector("aside");
      const sidebarTitle = document.querySelector(".sidebar-title");
      const sidebarMenu = document.querySelector(".sidebar-main");
      const toggleSidebar = document.querySelector("#toggleSidebar");
      const main = document.querySelector("main");

      toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        sidebarTitle.classList.toggle("hidden");
        sidebarMenu.classList.toggle("hidden");

        // set main width to 100% when sidebar is collapsed
        if (sidebar.classList.contains("collapsed")) {
          main.style.width = "100%";
        } else {
          main.style.width = "88%";
        }
      });

      const submenuItems = document.querySelectorAll(".has-submenu");

      submenuItems.forEach((submenu) => {
        submenu.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent parent menu clicks
          submenu.classList.toggle("active");
        });
      });