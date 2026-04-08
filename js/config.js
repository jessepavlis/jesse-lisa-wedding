// ─── Wedding Config ───────────────────────────────────────────────────────────
// Edit these values to update text across the entire site.
const WEDDING = {
  couple:          'Jesse & Lisa',           // "Lisa & Jesse"
  coupleAnd:       'Jesse and Lisa',         // natural prose form
  date:            'August 22, 2026',        // display date
  venueLine:       'The Hyeholde · Coraopolis, Pennsylvania',
  rsvpBy:          'July 1, 2026',           // RSVP deadline
  countdownTarget: '2026-08-22T16:00:00',    // ISO datetime for countdown
};
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-wc]').forEach(el => {
    const key = el.dataset.wc;
    if (key === 'footer') {
      el.textContent = `${WEDDING.couple} · ${WEDDING.date}`;
    } else if (WEDDING[key] !== undefined) {
      el.textContent = WEDDING[key];
    }
  });

  const pageTitle = document.body.dataset.wcTitle;
  document.title = pageTitle
    ? `${pageTitle} — ${WEDDING.couple}`
    : `${WEDDING.couple} — ${WEDDING.date}`;
});
