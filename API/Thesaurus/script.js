async function getSynonyms(text) {
    try {
        const response = await fetch(`https://www.openthesaurus.de/synonyme/search?q=${text}&format=application/json`);
        const data = await response.json();
        for (const term of data.synsets[0].terms) {
            document.getElementById('synonyms').innerHTML += `${term.term}<br>`;
        }
        console.log('Fertig');
    } catch (error) {
        console.error('Fehler');
    }
}