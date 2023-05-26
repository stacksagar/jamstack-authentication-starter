function notFoundHandler(_req, _res, next) {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
}

function errorHandler(error, _req, res, _next) {
  if (error?.status) {
    return res.status(error.status).json({
      message: error?.message,
    });
  }
  if (error) return res.status(403).json({ message: error?.message || error });
  return res.status(500).json({ message: `System Server Error!` });
}

module.exports = { notFoundHandler, errorHandler };
