// Booking settings for the "Book a call" page (website/book/<site>.html, made by generate.js).
//
// googleUrl: your Google Calendar appointment schedule booking page. In Google Calendar open the schedule,
//   click "Share" and copy the booking page link, e.g. https://calendar.google.com/calendar/appointments/schedules/AcZssZ...
//   (a short https://calendar.app.google/... link also works for the button, but the full link is needed to embed it).
//   Google adds the Calendar invite and the Google Meet link to every booking.
// calLink: alternative, a Cal.com event as "username/event-slug". Used only when googleUrl is empty.
// Leave both empty and the page shows a short "email me instead" message rather than a calendar.
module.exports = {
  // Lemmy's 30-minute "Discovery Call" appointment schedule (short link: https://calendar.app.google/2MN2joxwVpVQ8urZA).
  googleUrl: process.env.GOOGLE_BOOKING_URL || 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2F-eY02XnlRTlw_EKw4k4VnTdBhb80cBG9G_HekfM0Mvf1V_DKVu9b3YHnbfYzQoWJ3N8XWUKg',
  calLink: process.env.CAL_LINK || '',
  minutes: 30,
};
