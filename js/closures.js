module.exports = start => {
  let current = start || 0

  return {
    next() { return current++ }
  }
}
