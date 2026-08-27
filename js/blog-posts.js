/*
 * RPM BLOG POST REGISTRY
 * ======================
 * Single source of truth for all blog posts on rpmglobalexports.com.
 * Both blogs/index.html and the homepage read from this file.
 *
 * TO ADD A NEW POST:
 *   1. Add one object to RPM_BLOG_POSTS below (array order doesn't matter —
 *      everything is sorted by date at render time).
 *   2. Commit and push. Done.
 *      - The post appears automatically in its category grid on blogs/index.html,
 *        sorted newest-first.
 *      - If it is one of the 3 most recent posts site-wide, it replaces the
 *        oldest card in the "Latest from the Blog" section on the homepage.
 *      - No HTML edits needed on either page.
 *
 * FIELDS:
 *   date:     ISO date string   "2026-09-15"   ← drives sort order; must be accurate
 *   category: "psyllium" | "import" | "sesame" | "cumin" | "trade"
 *   tag:      display label on the card, e.g. "Psyllium", "Sourcing", "Import Guide"
 *   tagClass: CSS class for tag colour, e.g. "tag-psyllium", "tag-import"
 *   title:    card headline (plain text — & not &amp;)
 *   url:      root-relative URL  "/blogs/psyllium/my-new-post.html"
 */

(function () {
  'use strict';

  /* ── DATA ─────────────────────────────────────────────────────────────────
     Sorted newest-first within each category for readability, but the
     render functions sort the array themselves so order here doesn't matter.
  ── */

  var RPM_BLOG_POSTS = [

    // ── PSYLLIUM ────────────────────────────────────────────────────────────
    {
      date: '2026-08-27',
      category: 'psyllium',
      tag: 'Sourcing',
      tagClass: 'tag-psyllium',
      title: 'Is a Merchant Exporter Still Needed in 2026?',
      url: '/blogs/psyllium/is-merchant-exporter-still-needed-2026.html'
    },
    {
      date: '2026-08-26',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Why Is There No Organic Psyllium Husk Available Right Now? USA & Canada Buyers Read First',
      url: '/blogs/psyllium/why-no-organic-psyllium-husk.html'
    },
    {
      date: '2026-08-26',
      category: 'psyllium',
      tag: 'Sourcing',
      tagClass: 'tag-psyllium',
      title: 'Why We Work as a Merchant Exporter — And Why That\'s Actually Better for You',
      url: '/blogs/psyllium/why-work-with-merchant-exporter.html'
    },
    {
      date: '2026-08-20',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk Exporter from India: Simplifying Quality Procurement and International Shipping',
      url: '/blogs/psyllium/psyllium-husk-merchant-exporter-india.html'
    },
    {
      date: '2026-08-14',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk Distributor vs Direct Indian Exporter: An Honest Comparison',
      url: '/blogs/psyllium/psyllium-husk-distributor-guide.html'
    },
    {
      date: '2026-08-14',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Private Label Psyllium Husk & Isabgol: What Buyers Need to Know',
      url: '/blogs/psyllium/private-label-isabgol-contract-manufacturing.html'
    },
    {
      date: '2026-08-14',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Isabgol Manufacturer & Exporter from India — Gujarat Sourcing Guide',
      url: '/blogs/psyllium/isabgol-manufacturer-exporter-india.html'
    },
    {
      date: '2026-08-10',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk Wholesale & Bulk Buying Guide: Pricing, MOQ, Isabgol Rates',
      url: '/blogs/psyllium/psyllium-husk-wholesale-bulk-guide.html'
    },
    {
      date: '2026-07-31',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Isabgol vs Psyllium Husk — Same Product, Different Names',
      url: '/blogs/psyllium/isabgol-vs-psyllium-husk.html'
    },
    {
      date: '2026-07-31',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk HS Code 1211.90.32 — Classification Guide for Importers',
      url: '/blogs/psyllium/psyllium-husk-hs-code-guide.html'
    },
    {
      date: '2026-07-06',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk CoA Checklist: 10 Things to Verify Before Your Shipment Leaves India',
      url: '/blogs/psyllium/psyllium-husk-coa-checklist.html'
    },
    {
      date: '2026-06-28',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Bulk Ispaghula Husk for Export from India',
      url: '/blogs/psyllium/bulk-ispaghula-husk-for-export.html'
    },
    {
      date: '2026-06-28',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk: Food Grade vs Pharma Grade — What Importers Need to Know',
      url: '/blogs/psyllium/psyllium-food-grade-vs-pharma-grade.html'
    },
    {
      date: '2026-06-28',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk Quality Parameters Explained: Complete Importer Guide',
      url: '/blogs/psyllium/psyllium-husk-quality-parameters.html'
    },
    {
      date: '2026-06-28',
      category: 'psyllium',
      tag: 'Psyllium',
      tagClass: 'tag-psyllium',
      title: 'Psyllium Husk Suppliers in India — Bulk Isabgol Export Guide',
      url: '/blogs/psyllium/psyllium-husk-suppliers-in-india.html'
    },

    // ── IMPORT GUIDES ───────────────────────────────────────────────────────
    {
      date: '2026-08-14',
      category: 'import',
      tag: 'Import Guide',
      tagClass: 'tag-import',
      title: 'Importing Psyllium Husk & Sesame Seeds from India to Australia — DAFF Biosecurity Guide',
      url: '/blogs/import-guides/australia-import-guide.html'
    },
    {
      date: '2026-08-06',
      category: 'import',
      tag: 'Import Guide',
      tagClass: 'tag-import',
      title: 'Psyllium Husk Importer Germany: Documentation & Supplier Guide',
      url: '/blogs/import-guides/psyllium-husk-importer-germany.html'
    },
    {
      date: '2026-06-28',
      category: 'import',
      tag: 'Import Guide',
      tagClass: 'tag-import',
      title: 'How to Import Psyllium Husk, Sesame Seeds and Cumin Seeds from India to Canada',
      url: '/blogs/import-guides/canada-import-guide.html'
    },
    {
      date: '2026-06-28',
      category: 'import',
      tag: 'Import Guide',
      tagClass: 'tag-import',
      title: 'How to Import Psyllium Husk, Sesame Seeds and Cumin Seeds from India to the EU',
      url: '/blogs/import-guides/eu-import-guide.html'
    },
    {
      date: '2026-06-28',
      category: 'import',
      tag: 'Import Guide',
      tagClass: 'tag-import',
      title: 'How to Import Psyllium Husk, Sesame Seeds and Cumin Seeds from India to New Zealand',
      url: '/blogs/import-guides/new-zealand-import-guide.html'
    },
    {
      date: '2026-06-28',
      category: 'import',
      tag: 'Import Guide',
      tagClass: 'tag-import',
      title: 'How to Import Psyllium Husk, Sesame Seeds and Cumin Seeds from India to USA',
      url: '/blogs/import-guides/usa-import-guide.html'
    },

    // ── SESAME ──────────────────────────────────────────────────────────────
    {
      date: '2026-07-31',
      category: 'sesame',
      tag: 'Sesame',
      tagClass: 'tag-sesame',
      title: 'Sesame Seeds HS Code 1207 — Grade Guide for Importers',
      url: '/blogs/sesame/sesame-seeds-hs-code-guide.html'
    },
    {
      date: '2026-07-01',
      category: 'sesame',
      tag: 'Sesame',
      tagClass: 'tag-sesame',
      title: 'Sesame Seeds for Canadian Buyers: How to Source from India with Better Cost Control and Reliable Supply',
      url: '/blogs/sesame/sesame-seeds-canadian-buyers.html'
    },
    {
      date: '2026-06-28',
      category: 'sesame',
      tag: 'Sesame',
      tagClass: 'tag-sesame',
      title: 'Sesame Export from India — Buyer Guide for Importers',
      url: '/blogs/sesame/sesame-export-from-india.html'
    },
    {
      date: '2026-06-28',
      category: 'sesame',
      tag: 'Sesame',
      tagClass: 'tag-sesame',
      title: 'Indian Sesame Seeds Exporter — What to Look For Before You Buy',
      url: '/blogs/sesame/indian-sesame-seeds-exporter.html'
    },

    // ── CUMIN ───────────────────────────────────────────────────────────────
    {
      date: '2026-07-31',
      category: 'cumin',
      tag: 'Cumin',
      tagClass: 'tag-cumin',
      title: 'Cumin Seeds HS Code 0909 — Grade Guide for Importers',
      url: '/blogs/cumin/cumin-seeds-hs-code-guide.html'
    },
    {
      date: '2026-06-29',
      category: 'cumin',
      tag: 'Cumin',
      tagClass: 'tag-cumin',
      title: 'Indian Cumin Seeds Exporter: What Importers Need to Know Before Buying',
      url: '/blogs/cumin/indian-cumin-seeds-exporter.html'
    },

    // ── TRADE GUIDES ────────────────────────────────────────────────────────
    {
      date: '2026-08-06',
      category: 'trade',
      tag: 'Trade Guide',
      tagClass: 'tag-trade',
      title: 'Psyllium Husk HS Code: HSN, HTSUS, and TARIC Guide',
      url: '/blogs/guides/psyllium-husk-hs-code.html'
    },
    {
      date: '2026-07-30',
      category: 'trade',
      tag: 'Trade Guide',
      tagClass: 'tag-trade',
      title: 'FOB vs CIF Explained: Complete Importer and Exporter Guide',
      url: '/blogs/trade-guides/fob-vs-cif-explained.html'
    }

  ];

  /* ── HELPERS ──────────────────────────────────────────────────────────── */

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function byDateDesc(a, b) {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return  1;
    return 0;
  }

  /* ── BLOG INDEX PAGE (blogs/index.html) ───────────────────────────────── */
  // Finds every .blog-cards-grid[data-category] container, filters the post
  // list to that category, sorts newest-first, and renders the cards.

  function renderBlogIndex() {
    var grids = document.querySelectorAll('.blog-cards-grid[data-category]');
    if (!grids.length) return;

    grids.forEach(function (grid) {
      var cat   = grid.getAttribute('data-category');
      var posts = RPM_BLOG_POSTS
        .filter(function (p) { return p.category === cat; })
        .sort(byDateDesc);

      grid.innerHTML = posts.map(function (p) {
        return (
          '<article class="blog-card fade-in-up">\n' +
          '  <span class="blog-card-tag ' + esc(p.tagClass) + '">' + esc(p.tag) + '</span>\n' +
          '  <h3 class="blog-card-title">' + esc(p.title) + '</h3>\n' +
          '  <a href="' + esc(p.url) + '" class="blog-card-link">Read More →</a>\n' +
          '</article>'
        );
      }).join('\n');
    });
  }

  /* ── HOMEPAGE PREVIEW (index.html) ───────────────────────────────────── */
  // Sorts all posts newest-first, takes the top 3, renders blog-preview-card
  // markup into #blog-preview-grid.

  function renderBlogPreview() {
    var grid = document.getElementById('blog-preview-grid');
    if (!grid) return;

    var posts = RPM_BLOG_POSTS.slice().sort(byDateDesc).slice(0, 3);

    grid.innerHTML = posts.map(function (p) {
      return (
        '<article class="blog-preview-card fade-in-up">\n' +
        '  <span class="blog-card-tag ' + esc(p.tagClass) + '">' + esc(p.tag) + '</span>\n' +
        '  <h3 class="blog-preview-title">' + esc(p.title) + '</h3>\n' +
        '  <a href="' + esc(p.url) + '" class="product-card-link">Read Guide →</a>\n' +
        '</article>'
      );
    }).join('\n');
  }

  /* ── INIT ─────────────────────────────────────────────────────────────── */
  // With `defer`, this script runs after HTML is parsed (readyState is
  // 'interactive'), so the DOMContentLoaded event has not yet fired and the
  // DOM is fully available. The readyState check handles the edge case where
  // the script is loaded without `defer`.

  function init() {
    renderBlogIndex();
    renderBlogPreview();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
