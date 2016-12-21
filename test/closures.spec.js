const { expect } = require('chai')

const createIterator = require('js/closures')

describe('js/closures', () => {
  it('creates an iterator', () => {
    const iterator = createIterator()

    expect(iterator.next()).to.equal(0)
    expect(iterator.next()).to.equal(1)
    expect(iterator.next()).to.equal(2)
  })

  it('doesn\'t clash with another iterator', () => {
    const firstIterator = createIterator()
    const secondIterator = createIterator()

    expect(firstIterator.next()).to.equal(0)
    expect(firstIterator.next()).to.equal(1)
    expect(secondIterator.next()).to.equal(0)
    expect(secondIterator.next()).to.equal(1)
  })

  it('works with a different starting index', () => {
    const iterator = createIterator(5)

    expect(iterator.next()).to.equal(5)
    expect(iterator.next()).to.equal(6)
  })
})
