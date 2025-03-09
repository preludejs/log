/**
 * Target interface that defines the core logging methods.
 *
 * Implementations of this interface handle the actual logging output.
 */
export interface t {

  /**
   * Log a message with 'trace' severity.
   * @param entries - Values to log
   */
  trace(...entries: unknown[]): void

  /**
   * Log a message with 'debug' severity.
   * @param entries - Values to log
   */
  debug(...entries: unknown[]): void

  /**
   * Log a message with 'info' severity.
   * @param entries - Values to log
   */
  info(...entries: unknown[]): void

  /**
   * Log a message with 'warn' severity.
   * @param entries - Values to log
   */
  warn(...entries: unknown[]): void

  /**
   * Log a message with 'error' severity.
   * @param entries - Values to log
   */
  error(...entries: unknown[]): void

  /**
   * Log a message with 'fatal' severity.
   * @param entries - Values to log
   */
  fatal(...entries: unknown[]): void

}
