import type * as Target from './target.js'

/**
 * Target implementation that writes logs to the console.
 * Maps each severity level to the corresponding console method.
 * `fatal` is mapped to `console.error(...)` since there is no `console.fatal(...)`.
 */
export const console_: Target.t = {
  trace: console.trace,
  debug: console.debug,
  info: console.info,
  warn: console.warn,
  error: console.error,
  fatal: console.error
}

export { console_ as console }

export default console
