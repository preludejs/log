# Development Guide

## Build Commands
- This package is using pnpm
- `make build` - Build both CJS and ESM modules
- `make rebuild` - Clean and rebuild
- `make test` - Run all tests
- `pnpm jest src/log.test.ts` - Run a specific test file

## Code Style
- TypeScript with strict type checking
- 2-space indentation
- Functional programming approach
- Type exports use `.t` convention (e.g., `Severity.t`)
- Include `.js` extensions in imports
- Export default for main classes
- Named exports for utility functions and constants
- Explicit parameter and return types
- No unused variables or parameters
- Prefer `export const foo = ...` over functions
- Ident most constructs on next line

## Error Handling
- Use typed error returns rather than exceptions
- Provide informative error messages
- Handle edge cases explicitly

## Module Structure
- Modular design with focused responsibilities
- Main exports in index.ts
- Separate files for core concepts
