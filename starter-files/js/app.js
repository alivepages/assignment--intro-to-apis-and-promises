const request = superagent;
let statesTable = document.querySelector('.countries-container');

request
  .get('https://restcountries.eu/rest/v2/all')
  .then(function saveStatesInAVariable(data) {
    const states = data.body
    return states
  })
  .then(function printInWebpage(statesList) {
    statesList.forEach(function(obj) {
      statesTable.innerHTML += `
      <div class="country-card">
        <img class="country-flag" src="${obj.flag}" alt="flag">
        <h4 class="country-name">${obj.name}</h4>
        <p class="country-capital">${obj.capital}</p>
      </div>
      `
    });
  })
  .catch(function() {
    var elem = document.createElement('p')
    elem.innerHTML = 'Error al momento de obtener los datos'
    document.querySelector('.errors').appendChild(elem)
  })
