const catchAsync = (fn) => {
    return (req, res, next) => {
      return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
  };
  
  module.exports = catchAsync;