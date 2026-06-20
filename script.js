document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("productSlider");
  let slideTimer;

  if (slider) {
    slider.addEventListener("mouseenter", function () {
      clearInterval(slideTimer);

      slideTimer = setInterval(function () {
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScroll - 5) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 360, behavior: "smooth" });
        }
      }, 1200);
    });

    slider.addEventListener("mouseleave", function () {
      clearInterval(slideTimer);
    });
  }

  const founderInfo = {
    rudra: `
      <h2>Rudra Jani</h2>
      <h4>Founder – Supplier Relations</h4>
      <p>Rudra manages supplier communication, product sourcing, quality follow-up and export documentation support for RPM Global Exports.</p>
    `,
    meet: `
      <h2>Meet Jani</h2>
      <h4>Co-Founder – Buyer Relations</h4>
      <p>Meet handles buyer communication, international outreach, quotation support and business development for global importers.</p>
    `
  };

  window.openFounder = function (name) {
    const modal = document.getElementById("founderModal");
    const body = document.getElementById("founderModalBody");

    if (!modal || !body || !founderInfo[name]) return;

    body.innerHTML = founderInfo[name];
    modal.classList.add("active");
  };

  window.closeFounder = function () {
    const modal = document.getElementById("founderModal");
    if (modal) modal.classList.remove("active");
  };

  const founderModal = document.getElementById("founderModal");

  if (founderModal) {
    founderModal.addEventListener("click", function (event) {
      if (event.target === founderModal) {
        window.closeFounder();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      window.closeFounder();
    }
  });
});
