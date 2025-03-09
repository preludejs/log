# Log package

A lightweight, flexible TypeScript logging library with configurable severity levels and pluggable log targets.

## Features

- Simple, intuitive API
- Configurable log severity levels (trace, debug, info, warn, error, fatal)
- Pluggable log targets (console, memory, or custom)
- Namespace support for easy identification of log sources
- Environment variable control for log levels
- Error handling utilities with rescue pattern
- TypeScript support with strict typing

## Usage

```bash
pnpm i -E @prelude/log
```

```ts
import * as Fs from 'node:fs/promises'
import Log from '@prelude/log'

// Create a logger with namespace
const log = new Log('my-module')

// Log at different severity levels
log.info('application started')
log.debug('processing request', { id: 123 })

// Use the rescue pattern for error handling
const file = await Fs
  .readFile('config.json', 'utf-8')
  .catch(log.rescue('error', 'Error while trying to read file', undefined))

// Continue with file if available
if (file) {
  // Process file
}
```

Use with:
```bash
LOG=debug tsx my-script.ts
```

# License

```
MIT License

Copyright 2025 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
