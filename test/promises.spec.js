const { expect } = require('chai')

const resolvePromises = require('js/promises')

describe('js/promises', () => {
  it('should unwrap the id of the user', () => {
    const userId = 42

    return resolvePromises(
      new Promise((resolve, reject) => resolve({ id: userId }))
    ).then(([unwrappedUserId]) => {
      expect(unwrappedUserId).to.equal(userId)
    })
  })

  it('should reject with an error if one of the promises gets rejected', () => {
    const error = new Error()

    return resolvePromises(
      new Promise((resolve, reject) => reject(error))
    ).catch(err => expect(err).to.equal(error))
  })

  it('should collect the results of all passed promises', () => {
    const userId = 42
    const results = [1,2,3]
    const promises = results.map(result => new Promise((resolve, reject) => resolve(result)))

    return resolvePromises(
      new Promise((resolve, reject) => resolve({ id: userId })),
      ...promises
    ).then(response => {
      expect(response).to.eql([userId, ...results])
    })
  })
})
