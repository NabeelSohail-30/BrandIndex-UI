const tabs = document.querySelectorAll(".tab");
      const contents = document.querySelectorAll(".tab-content");
      const backBtn = document.getElementById("back-btn");
      const nextBtn = document.getElementById("next-btn");
      const finishBtn = document.getElementById("finish-btn");

      let currentTab = 0;

      function updateTabs() {
        // Update active tab
        tabs.forEach((tab, index) => {
          tab.classList.toggle("active", index === currentTab);
        });

        // Update active content
        contents.forEach((content, index) => {
          content.classList.toggle("active", index === currentTab);
        });

        // Update button states
        // backBtn.disabled = currentTab === 0;
        nextBtn.disabled = currentTab === tabs.length - 1;
        if (currentTab < tabs.length - 1) {
          nextBtn.style.display = "block";
          finishBtn.style.display = "none";
        } else if (currentTab == 4) {
          nextBtn.style.display = "none";
          finishBtn.style.display = "block";
        }
      }

      // Handle Next button
      nextBtn.addEventListener("click", () => {
        if (currentTab < tabs.length - 1) {
          currentTab++;
          console.log(currentTab, "tab number");
          updateTabs();
        }
      });

      // Handle Back button
      backBtn.addEventListener("click", () => {
        if (currentTab > 0) {
          currentTab--;
          updateTabs();
        } else {
          section_two.classList.remove("active");
          section_one.classList.add("active");
        }
      });

      // Initial setup
      updateTabs();