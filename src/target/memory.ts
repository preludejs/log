import type * as Target from './target.js'

/**
 * In-memory implementation of the Target interface.
 * Stores log entries in memory for later retrieval, useful for testing.
 */
export class Memory implements Target.t {

  /** Array containing all logged entries */
  entries: unknown[][] = []

  log(...entries: unknown[]): void {
    this.entries.push(entries)
  }

  /**
   * Clear all stored log entries.
   */
  clear(): void {
    this.entries = []
  }

  /**
   * Get the number of stored log entries.
   * @returns The number of entries
   */
  get length(): number {
    return this.entries.length
  }

  /**
   * Get a log entry at the specified index.
   * @param index - Index of the entry to retrieve
   * @returns The log entry
   */
  get(index: number): unknown[] {
    return this.entries[index]
  }

  /**
   * Get the most recent log entry.
   * @returns The last log entry
   */
  get last(): unknown[] {
    return this.entries[this.entries.length - 1]
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

}

export default Memory
