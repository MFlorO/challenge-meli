const { isMutant } = require('../functions/isMutant');
// const adnData = require('../seed/data.json');

async function checkAndSaveMutant(req, res) {
    
    const { adn } = req.body;

    if (!adn || !Array.isArray(adn)) return res.status(400).json({ ok: false, error: 'Invalid ADN format' });
    
    const isMutantResult = isMutant(adn);

    if (isMutantResult) return res.status(200).json({ ok:  true, message: 'Mutant detected' });

    return res.status(404).json({ ok: false, message: 'No mutant' });
}

module.exports = { checkAndSaveMutant };
