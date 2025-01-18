const mongoose = require('mongoose');

const SimplificationLogSchema = new mongoose.Schema({
    functionString: { type: String, required: true },
    sop: { type: String, required: true },
    pos: { type: String, required: true },
    minimized: { type: String, required: true },
    kMapVerification: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const SimplificationLog = mongoose.model('SimplificationLog', SimplificationLogSchema);

module.exports = { SimplificationLog };