module.exports = async (req, res) => {
    const { name, suffix } = req.query;
    const apiUrl = `https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (!response.ok) {
            console.error('API response error:', data);
            throw new Error(`API response not ok: ${response.status}`);
        }

        res.json(data);
    } catch (error) {
        console.error('Serverless Function error:', error);
        res.status(500).json({ error: error.message });
    }
};
