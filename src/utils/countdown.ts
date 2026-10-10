import type { CountdownState } from '../types/inauguration';

/**
 * Calculates the exact UTC timestamp corresponding to a given date and time
 * within a specified IANA timezone (e.g. 'America/Cancun').
 *
 * This guarantees proper countdown calculation regardless of the visitor's
 * local timezone (e.g., UTC, CET, EST, JST).
 */
export function getTargetUtcTimestamp(
  dateIso: string,
  timeIso: string,
  timeZone: string
): number {
  const [year, month, day] = dateIso.split('-').map(Number);
  const [hour, minute] = timeIso.split(':').map(Number);

  // Initial UTC timestamp guess
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0);

  // Formatter configured to the target timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(new Date(utcGuess));
  const partMap: Record<string, string> = {};
  for (const p of parts) {
    partMap[p.type] = p.value;
  }

  const guessYear = Number(partMap.year);
  const guessMonth = Number(partMap.month);
  const guessDay = Number(partMap.day);
  let guessHour = Number(partMap.hour);
  if (guessHour === 24) guessHour = 0;
  const guessMinute = Number(partMap.minute);
  const guessSecond = Number(partMap.second);

  const guessLocalAsUtc = Date.UTC(
    guessYear,
    guessMonth - 1,
    guessDay,
    guessHour,
    guessMinute,
    guessSecond
  );
  const desiredLocalAsUtc = Date.UTC(year, month - 1, day, hour, minute, 0);

  const diff = desiredLocalAsUtc - guessLocalAsUtc;
  return utcGuess + diff;
}

/**
 * Computes the countdown state for a given target date, time, and timezone.
 * If time is null or empty, it returns unconfigured state.
 */
export function calculateCountdown(
  dateIso: string,
  timeIso: string | null | undefined,
  timeZone: string,
  nowMs: number = Date.now()
): CountdownState {
  if (!timeIso || timeIso.trim() === '') {
    return {
      isConfigured: false,
      isPassed: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      targetDateUtcIso: null,
    };
  }

  const targetTimestamp = getTargetUtcTimestamp(dateIso, timeIso.trim(), timeZone);
  const diffMs = targetTimestamp - nowMs;

  if (diffMs <= 0) {
    return {
      isConfigured: true,
      isPassed: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      targetDateUtcIso: new Date(targetTimestamp).toISOString(),
    };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    isConfigured: true,
    isPassed: false,
    days,
    hours,
    minutes,
    seconds,
    targetDateUtcIso: new Date(targetTimestamp).toISOString(),
  };
}
