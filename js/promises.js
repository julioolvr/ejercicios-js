module.exports = (onCreate, ...others) => {
  return Promise.all([
    onCreate.then(user => user.id),
    ...others
  ]).catch(err => err)
}
