// Array of countries and their capitals
const countryData = [
    { country: 'Mexico', capital: 'Mexico City' },
    { country: 'Argentina', capital: 'Buenos Aires' },
    { country: 'South Korea', capital: 'Seoul' },
    { country: 'Egypt', capital: 'Cairo' },
    { country: 'Sweden', capital: 'Stockholm' },
    { country: 'Netherlands', capital: 'Amsterdam' },
    { country: 'Turkey', capital: 'Ankara' },
    { country: 'Switzerland', capital: 'Bern' },
    { country: 'Spain', capital: 'Madrid' },
    { country: 'South Africa', capital: 'Pretoria' }

];
  // Function to sort and display countries
  function sortCountries(order) {
    // Sort the array based on country names
    for (let i = 0; i < countryData.length - 1; i++) {
        for (let j = i + 1; j < countryData.length; j++) {
            if (order === 'asc' && countryData[i].country > countryData[j].country) {
                // Swap for ascending order
                let temp = countryData[i];
                countryData[i] = countryData[j];
                countryData[j] = temp;
            } else if (order === 'desc' && countryData[i].country < countryData[j].country) {
                // Swap for descending order
                let temp = countryData[i];
                countryData[i] = countryData[j];
                countryData[j] = temp;
            }
        }
    }
    displayCountries();
}

// Function to display sorted countries in the table
function displayCountries() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear previous rows
    for (let i = 0; i < countryData.length; i++) {
        const data = countryData[i];
        const row = `<tr><td>${data.country}</td><td>${data.capital}</td></tr>`;
        tableBody.innerHTML += row;
    }
}
// Display countries when page loads
window.onload = function() {
    displayCountries();
}