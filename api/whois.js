const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { name, suffix } = req.query;
    const apiUrl = `https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch WHOIS data');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
