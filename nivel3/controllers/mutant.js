const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { isMutant } = require('../functions/isMutant');

async function checkAndSaveMutant(req, res) {

    const { adn } = req.body;

    if (!adn || !Array.isArray(adn)) return res.status(400).json({ ok: false, error: 'Invalid ADN format' });
    
    const isMutantResult = isMutant(adn);

    try {
        await prisma.adn.create({
            data: {
                sequence: adn.join(','),
                isMutant: true
            }
        });

        if (isMutantResult) return res.status(200).json({ ok:  true, message: 'Mutant detected' });
        
        return res.status(404).json({ ok: false, message: 'No mutant' });
    } catch (error) {
        console.error('Error saving DNA result:', error);
        return res.status(500).json({ ok: false, error: 'Internal server error' });
    }
}

module.exports = { checkAndSaveMutant };