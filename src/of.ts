import Log from './log.js'

/**
 * Factory function that creates a new Log instance.
 *
 * Useful when star importing this package.
 *
 * @param name - Name of the logger
 * @param options - Optional configuration (level, target)
 * @returns A new Log instance
 */
export const of =
  (...args: ConstructorParameters<typeof Log>) =>
    new Log(...args)

export default of
