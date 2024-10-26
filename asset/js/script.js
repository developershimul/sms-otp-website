document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");

    button.addEventListener("click", () => {
      const content = item.querySelector(".accordion-content");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        // Close other open accordion items
        document.querySelectorAll(".accordion-content").forEach((c) => {
          c.style.maxHeight = null;
        });
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // JavaScript hamburger menu
  const hamburgerIcon = document.getElementById("hamburger");
  const nav = document.querySelector(".navigation");
  hamburgerIcon.addEventListener("click", function () {
    if (this.className == "fa-solid fa-bars") {
      console.log(nav.style);        
      this.className = "fa-solid fa-xmark"
      nav.style.top = '79px'
    } else {
      this.className = "fa-solid fa-bars"
      nav.style.top = '-290px'
    }
  });
});
