module.exports = (...roles) => (req, res, next) => {
  if (roles.includes(req.query.role)) {
    next()
  } else {
    res.status(403).send('Forbidden')
  }
}
