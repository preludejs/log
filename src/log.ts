import * as Severity from './severity.js'
import * as Target from './target.js'

/**
 * Default log level, determined from process.env.LOG or fallback to 'error'.
 */
const defaultLevel =
  'process' in globalThis &&
  (Severity.values as readonly unknown[]).includes(process?.env?.LOG) ?
    process?.env?.LOG as Severity.t :
    'error'

/**
 * Log interface defining the basic functionality a logger must implement.
 */
export interface Interface extends Target.t {

  /**
   * Log a message with the specified severity level.
   * @param severity - The severity level of the log message
   * @param entries - Values to log
   */
  log(severity: Severity.t, ...entries: unknown[]): void

  /**
   * Create an error handler that logs the error and returns a fallback value.
   * @param severity - The severity level to log the error with
   * @param message - The message to log with the error
   * @param result - The fallback value to return
   * @returns A function that logs errors and returns the fallback value
   */
  rescue<T>(severity: Severity.t, message: string, result: T): (err: unknown) => T

}

/**
 * Formats a log entry value as a string.
 * @param value - The value to format
 * @returns String representation of the value
 */
const mapEntry =
  (value: unknown): string => {
    if (typeof value !== 'object' || value === null) {
      return String(value)
    }
    if (value instanceof Error) {
      return value.stack || value.message
    }
    return JSON.stringify(value)
  }

/**
 * Logger implementation that filters messages by severity level
 * and forwards them to a target.
 */
export class Log implements Interface {

  /** Current minimum severity level threshold */
  level: Severity.t

  /** Name of the logger instance, included in log messages */
  name: string

  /** Target that handles the actual logging */
  target: Target.t

  /**
   * Creates a new Log instance.
   * @param name - Name of the logger
   * @param options - Configuration options
   * @param options.level - Minimum severity level to log (defaults to process.env.LOG or 'error')
   * @param options.target - Target to send logs to (defaults to console)
   */
  constructor(name: string, {
    level = defaultLevel,
    target = Target.console
  }: {
    level?: Severity.t,
    target?: Target.t
  } = {}) {
    this.name = name
    this.level = level
    this.target = target
  }

  /**
   * Log a message with the specified severity level.
   * Only logs if the severity is >= the current level.
   * @param severity - The severity level of the log message
   * @param entries - Values to log
   */
  log(severity: Severity.t, ...entries: unknown[]): void {
    const { name, level, target } = this
    if (Severity.cmp(severity, level) < 0) {
      return
    }
    target[severity](`${name}: [${severity}]`, ...entries.map(mapEntry))
  }

  trace(...entries: unknown[]): void {
    this.log('trace', ...entries)
  }

  debug(...entries: unknown[]): void {
    this.log('debug', ...entries)
  }

  info(...entries: unknown[]): void {
    this.log('info', ...entries)
  }

  warn(...entries: unknown[]): void {
    this.log('warn', ...entries)
  }

  error(...entries: unknown[]): void {
    this.log('error', ...entries)
  }

  fatal(...entries: unknown[]): void {
    this.log('fatal', ...entries)
  }

  rescue<T>(severity: Severity.t, message: string, result: T): (err: unknown) => T {
    return (err: unknown): T => {
      this[severity](message, err)
      return result
    }
  }

}

export default Log
