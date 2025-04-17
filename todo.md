# A/B Testing Strategy for Hero Headline & Subheadline

## Objective
Implement an A/B test for the hero section's headline and subheadline to optimize for conversion rates.

---

## TODOs

### 1. Define Variants
- [ ] Create an array of headline/subheadline variants in the landing page component.

### 2. Variant Assignment Logic
- [ ] On component mount, check for a `?variant=` parameter in the URL.
  - [ ] If present and valid, use this variant and store it in sessionStorage.
  - [ ] If not present, check sessionStorage for an assigned variant.
  - [ ] If not in sessionStorage, randomly assign a variant and store it.
- [ ] Use the assigned variant to render the hero headline and subheadline.

### 3. Impression Tracking
- [ ] On component mount, after assigning the variant, send a `hero_impression` event to Google Analytics (or other analytics tool) with the variant number.

### 4. Conversion Tracking
- [ ] When the CTA button is clicked, send a `conversion` event to Google Analytics with the variant number.

### 5. Analyze Results
- [ ] In your analytics dashboard, segment impressions and conversions by variant to calculate conversion rates.

### 6. (Optional) Add Trust Signals
- [ ] Consider adding trust badges, testimonials, or company logos to the hero area for further optimization.

---

## Calendar Scheduling Link Tracking

### Objective
Track which variant (and/or source) led to a calendar booking by appending a `referer` parameter to all calendar scheduling links.

### Steps
- [ ] When generating the calendar scheduling link (e.g., https://cal.com/saadiq/free-ai-consultation), append a `referer` query parameter.
  - [ ] The value can include the variant number and/or other relevant info (e.g., `referer=landing-v0`, `referer=landing-v1`).
- [ ] Ensure all CTA buttons that open the calendar use this updated link.
- [ ] On the calendar platform, review bookings by `referer` to attribute conversions to specific variants or sources.

### Example
```js
const referer = `landing-v${variant}`;
const calendarUrl = `https://cal.com/saadiq/free-ai-consultation?referer=${referer}`;
```

---

## Example Variant Array
```js
const headlineVariants = [
  {
    headline: "Harness AI to Lead the Future",
    sub: "Future-Proof Your Career and Company: Master AI and Stay Ahead of the Curve"
  },
  {
    headline: "Unlock Your AI Advantage Today",
    sub: "Transform your skills and business with expert AI coaching and workshops"
  }
];
```

---

## Notes
- The URL override (`?variant=1`) is useful for QA and targeted campaigns.
- Impression tracking is essential for accurate conversion rate calculation.
- Appending a `referer` param to calendar links enables end-to-end conversion attribution.
- This approach is extensible to more than two variants if needed. 