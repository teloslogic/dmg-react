import {describe, expect, it} from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

import IO from '../io'
import IoOf from '../io.of'

describe('The IO Monad', () => {
  it('should be able to execute a simple run()', () => {
    const TEST_STR = 'Hello, World!!'

    const readLine: IO<string> = IoOf<string>(() => TEST_STR)

    const result = readLine.run()

    expect(result).toEqual(TEST_STR)
  })

  it('should be able to execute a simple program', () => {
    const lineFilePath: string = path.join(__dirname, 'io.data.txt')

    const mockConsole = {console: ''}

    const readFile = (filename: string) => IoOf(() => fs.readFileSync(filename, 'utf8'))
    const printLine = (line: string) => IoOf(() => (mockConsole.console = line))

    const program = readFile(lineFilePath)
      .map(line => line.toUpperCase())
      .flatMap(line => printLine(line))

    program.run()

    expect(mockConsole.console).toBe('INPUT/OUTPUT (IO) MONAD SAMPLE TEXT\n')
  })
})
