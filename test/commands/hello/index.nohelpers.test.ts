import { jest } from '@jest/globals'
import Hello from '../../../src/commands/hello'

let stdout: (string | Uint8Array)[]

beforeEach(() => {
  stdout = []
  jest
    .spyOn(process.stdout, 'write')
    .mockImplementation((val) => stdout.push(val) > -1)
})

describe('hello', () => {
  it('runs hello cmd', async () => {
    await Hello.run(['friend', '--from=oclif'])
    expect(stdout).toContainEqual(
      expect.stringContaining('hello friend from oclif!')
    )
  })
})
