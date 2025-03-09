import { test, expect } from '@jest/globals'
import * as Log from './index.js'

test('simple', () => {
  const target = new Log.Target.Memory()
  const log = Log.of('test', {
    level: 'info',
    target,
  })
  log.info('hello')
  log.debug('bye')
  expect(target.length).toBe(1)
  expect(target.last).toEqual([ 'info', 'test: [info]', 'hello' ])
})

test('error', () => {
  const target = new Log.Target.Memory()
  const log = Log.of('test', {
    level: 'info',
    target,
  })
  log.error('hello', new Error('world'))
  expect(target.length).toBe(1)
  expect(target.last).toEqual([ 'error', 'test: [error]', 'hello', expect.stringContaining('world') ])
})
