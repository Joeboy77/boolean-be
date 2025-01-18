const { SimplificationLog } = require('../models/SimplificationLog');

// Utility functions for SOP, POS, Quine-McCluskey, and K-Map
const generateCanonicalForms = (variables, minterms) => {
    const sop = minterms.map(term => {
        let binary = term.toString(2).padStart(variables.length, '0');
        return binary.split('').map((bit, idx) => (bit === '1' ? variables[idx] : `${variables[idx]}'`)).join('');
    }).join(' + ');

    const maxTerm = 2 ** variables.length - 1;
    const pos = Array.from({ length: maxTerm + 1 }, (_, i) => i)
        .filter(term => !minterms.includes(term))
        .map(term => {
            let binary = term.toString(2).padStart(variables.length, '0');
            return binary.split('').map((bit, idx) => (bit === '0' ? variables[idx] : `${variables[idx]}'`)).join(' + ');
        }).map(term => `(${term})`).join(' ');

    return { sop, pos };
};

const quineMcCluskey = (variables, minterms, dontCares = []) => {
    // Your enhanced Quine-McCluskey implementation here
    return "Minimized Expression"; // Placeholder
};

const generateKMap = (variables, minterms) => {
    // K-Map implementation here
    return "Verified via K-Map"; // Placeholder
};

const processFunction = async (req, res, next) => {
    try {
        const { functionString } = req.body;
        // Parse input, e.g., F(A, B, C, D)=Σm(1, 3, 4, ...)
        const match = functionString.match(/F\((.*?)\)=Σm\((.*?)\)/);
        if (!match) return res.status(400).json({ error: 'Invalid function format.' });

        const variables = match[1].split(',').map(v => v.trim());
        const minterms = match[2].split(',').map(Number);

        const canonicalForms = generateCanonicalForms(variables, minterms);
        const minimized = quineMcCluskey(variables, minterms);
        const kMapVerification = generateKMap(variables, minterms);

        // Save to database (optional)
        const log = new SimplificationLog({
            functionString,
            sop: canonicalForms.sop,
            pos: canonicalForms.pos,
            minimized,
            kMapVerification
        });
        await log.save();

        res.json({
            sop: canonicalForms.sop,
            pos: canonicalForms.pos,
            minimized,
            kMapVerification
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { processFunction };
