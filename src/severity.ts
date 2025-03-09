/**
 * Available severity levels in ascending order of importance.
 */
export const values = [
  'trace',
  'debug',
  'info',
  'warn',
  'error',
  'fatal'
] as const

/**
 * Type representing valid severity values.
 */
export type t =
  typeof values[number]

/**
 * Numeric values associated with each severity level.
 * Higher numbers indicate more severe log levels.
 */
export const levels: Record<t, number> = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}

/**
 * Compares two severity levels.
 * @param a - First severity level
 * @param b - Second severity level
 * @returns Negative number if a < b, positive if a > b, zero if equal
 */
export const cmp =
  (a: t, b: t): number =>
    levels[a] - levels[b]
