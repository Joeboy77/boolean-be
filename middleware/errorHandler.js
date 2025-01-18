const errorHandler = (err, req, res, next) => {
    res.status(500).json({ error: err.message || 'An error occurred.' });
};

module.exports = { errorHandler };