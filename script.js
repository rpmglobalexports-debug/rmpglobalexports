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
      <h4>Founder – Supplier Relations & Sourcing</h4>
      <p>Rudra built his knowledge of India's agri commodity trade hands-on — visiting Unjha's APMC market, building relationships with processing units across Gujarat, and learning the sourcing process from the ground up.</p>
      <p>He manages supplier coordination, product quality checks, specification discussions and export documentation for every order. Currently pursuing his BBA, Rudra brings a sharp commercial mindset to every buyer requirement.</p>
    `,
    meet: `
      <h2>Meet Jani</h2>
      <h4>Co-Founder – Buyer Relations & International Trade</h4>
      <p>Meet spent three years in Vancouver, Canada, completing his Associate of Arts — giving him firsthand understanding of how international buyers think, communicate and make purchasing decisions.</p>
      <p>He handles all buyer communication, quotation support and international outreach. His time abroad means he understands both sides of the trade: what importers need, and how India can reliably deliver it.</p>
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
