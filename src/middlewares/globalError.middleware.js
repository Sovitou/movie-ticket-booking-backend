const globalErrorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Server error";
  let details = undefined;

  if (err.name === "ZodError") {
    status = 400;
    message = "Validation error";
    details = err.errors;
  } else if (err.status) {
    status = err.status;
    message = err.message || message;
    details = err.details;
  } else if (err.message) {
    message = err.message;
  }

  // if (status === 500) {
  //   console.error(err);
  // }

  const response = { status, message };
  if (details) response.details = details;
  res.status(status).json(response);
};

export default globalErrorHandler;
