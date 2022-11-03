


async function getSynonyms() {
    let url = 'https://www.openthesaurus.de/synonyme/search?q=test&format=application/json';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log('Response is ', responseAsJson);
    let synsets = responseAsJson['synsets'];
    renderSynsets(synsets);
}


function renderSynsets(synsets) {
    let result = document.getElementById('result');
    result.innerHTML = `Es wurden <b>${synsets.length}</b> Synonym-Sets geladen.`;
    
    let subcontainer = document.getElementById('sub-container');

    for (let i = 0; i < synsets.length; i++) {
        const terms = synsets[i]['terms'];
        subcontainer.innerHTML += /*htmL*/ `
        <table id="synset-table-${i}" class="synsetTable">
        </table>`;
        const mytable = document.getElementById(`synset-table-${i}`);
        mytable.innerHTML += `<tr><th>Synset ${i}</th></tr>`;
        for (let j = 0; j < terms.length; j++) {
            const term = terms[j]['term'];
            mytable.innerHTML += `<tr><td>${term}</td></tr>`;
            
        }
    }
}




