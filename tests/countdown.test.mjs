import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCountdown, getTargetUtcTimestamp } from '../src/utils/countdown.ts';

test('Target UTC timestamp matches America/Cancun without daylight saving', () => {
  // Cancun is UTC-5 year-round
  // 2026-10-15 11:00 local should be 2026-10-15 16:00 UTC
  const targetUtc = getTargetUtcTimestamp('2026-10-15', '11:00', 'America/Cancun');
  const targetDate = new Date(targetUtc);
  assert.equal(targetDate.toISOString(), '2026-10-15T16:00:00.000Z');
});

test('Returns unconfigured state when inauguration time is null', () => {
  const result = calculateCountdown('2026-10-15', null, 'America/Cancun', Date.now());
  assert.equal(result.isConfigured, false);
  assert.equal(result.isPassed, false);
  assert.equal(result.days, 0);
  assert.equal(result.hours, 0);
  assert.equal(result.minutes, 0);
  assert.equal(result.seconds, 0);
});

test('Returns unconfigured state when inauguration time is empty string', () => {
  const result = calculateCountdown('2026-10-15', '   ', 'America/Cancun', Date.now());
  assert.equal(result.isConfigured, false);
  assert.equal(result.isPassed, false);
});

test('Calculates countdown correctly when time is set in the future', () => {
  // Target: 2026-10-15 11:00 Cancun = 2026-10-15 16:00 UTC
  // Simulated now: 2026-10-10 11:00 Cancun = 2026-10-10 16:00 UTC
  // Difference: exactly 5 days (120 hours)
  const targetTimeUtc = Date.UTC(2026, 9, 15, 16, 0, 0); // Oct is month index 9
  const nowUtc = Date.UTC(2026, 9, 10, 16, 0, 0);

  const result = calculateCountdown('2026-10-15', '11:00', 'America/Cancun', nowUtc);
  assert.equal(result.isConfigured, true);
  assert.equal(result.isPassed, false);
  assert.equal(result.days, 5);
  assert.equal(result.hours, 0);
  assert.equal(result.minutes, 0);
  assert.equal(result.seconds, 0);
});

test('Calculates countdown with hours, minutes, and seconds from any visitor timezone', () => {
  // Target: 2026-10-15 11:00 Cancun = 2026-10-15 16:00:00 UTC
  // Simulated visitor now: 1 day, 2 hours, 30 minutes, 15 seconds before
  const targetTimeUtc = Date.UTC(2026, 9, 15, 16, 0, 0);
  const diffMs = (1 * 86400 + 2 * 3600 + 30 * 60 + 15) * 1000;
  const simulatedNow = targetTimeUtc - diffMs;

  const result = calculateCountdown('2026-10-15', '11:00', 'America/Cancun', simulatedNow);
  assert.equal(result.isConfigured, true);
  assert.equal(result.isPassed, false);
  assert.equal(result.days, 1);
  assert.equal(result.hours, 2);
  assert.equal(result.minutes, 30);
  assert.equal(result.seconds, 15);
});

test('When countdown reaches zero or passes, shows isPassed=true and 0s with no negatives', () => {
  const targetTimeUtc = Date.UTC(2026, 9, 15, 16, 0, 0);
  const exactlyZero = targetTimeUtc;
  const tenHoursAfter = targetTimeUtc + 10 * 3600 * 1000;

  const resAtZero = calculateCountdown('2026-10-15', '11:00', 'America/Cancun', exactlyZero);
  assert.equal(resAtZero.isConfigured, true);
  assert.equal(resAtZero.isPassed, true);
  assert.equal(resAtZero.days, 0);
  assert.equal(resAtZero.hours, 0);
  assert.equal(resAtZero.minutes, 0);
  assert.equal(resAtZero.seconds, 0);

  const resAfter = calculateCountdown('2026-10-15', '11:00', 'America/Cancun', tenHoursAfter);
  assert.equal(resAfter.isConfigured, true);
  assert.equal(resAfter.isPassed, true);
  assert.equal(resAfter.days, 0);
  assert.equal(resAfter.hours, 0);
  assert.equal(resAfter.minutes, 0);
  assert.equal(resAfter.seconds, 0);
});
