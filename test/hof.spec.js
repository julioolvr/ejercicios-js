const { expect } = require('chai')

const memoize = require('js/hof')

describe('js/hof', () => {
  it('executes the function only once if the same parameter is passed again', () => {
    let executions = 0

    function fn(x) {
      executions++
      return x * x
    }

    const memoized = memoize(fn)

    expect(memoized(2)).to.equal(2 * 2)
    expect(executions).to.equal(1)

    expect(memoized(2)).to.equal(2 * 2)
    expect(executions).to.equal(1)
  })

  it('executes the function again for different parameters', () => {
    let executions = 0

    function fn(x) {
      executions++
      return x * x
    }

    const memoized = memoize(fn)

    expect(memoized(2)).to.equal(2 * 2)
    expect(executions).to.equal(1)

    expect(memoized(3)).to.equal(3 * 3)
    expect(executions).to.equal(2)
  })

  it('works even if the result is falsey', () => {
    let executions = 0

    function fn(x) {
      executions++
      return x * x
    }

    const memoized = memoize(fn)

    expect(memoized(0)).to.equal(0)
    expect(executions).to.equal(1)

    expect(memoized(0)).to.equal(0)
    expect(executions).to.equal(1)
  })
})
