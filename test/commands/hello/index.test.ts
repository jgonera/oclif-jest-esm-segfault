import { expect, test } from '@oclif/test'
console.log(1)
describe('hello', () => {
  console.log(2)
  test
    .stdout()
    .command(['hello', 'friend', '--from=oclif'])
    .it('runs hello cmd', (ctx) => {
      console.log(3)
      expect(ctx.stdout).to.contain('hello friend from oclif!')
    })
})
