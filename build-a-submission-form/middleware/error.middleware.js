function notFoundHandler(req, res, next) {
  const err = new Error(`${req.originalUrl} not found.`);
  err.status = 404;
  next(err);
}

function finalErrorHandler(err, req, res, next) {
    const status = err.status || 500;
    console.log("Error " + status);
    res.status(status).json({
        error: true,
        message: status === 500 ? "Internal Server Error (Check Server Logs)" : err.message,
        status: status
    });
}

export { notFoundHandler, finalErrorHandler };
