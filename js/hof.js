module.exports = fn => {
  const results = {}

  return x => {
    if (results[x] !== undefined) {
      return results[x]
    }

    const result = fn(x)
    results[x] = result

    return result
  }
}
