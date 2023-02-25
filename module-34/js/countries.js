const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = users =>{
    const containerData = document.getElementById('data_container');
    for(const user of users){
        
        const countryContainer = document.createElement('div');
        countryContainer.classList.add('country');
        countryContainer.innerHTML = `
            <h3>Country Name : ${user.name.common}</h3>
            <button onclick="loadCountyDetails('${user.cca2}')">Details</button>
        `;
        containerData.appendChild(countryContainer);

        
        // console.log(user.name)
    }
}

const loadCountyDetails = country =>{
    const url = `https://restcountries.com/v3.1/alpha/${country}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
    
}

const displayCountryDetails = details => {
    const detailContainer = document.getElementById('details');
    // const containerDiv = document.createElement('div');
    detailContainer.innerHTML =`
        <img src ="${details[0].flags.png}">
        <h3>Name : ${details[0].name.official}</h3>
        <h4>Capital : ${details[0].capital[0]}</h4>
        <h4>Area : ${details[0].area}</h4>
        <h5>Region : ${details[0].region}</h5>

    `;

    // detailContainer.appendChild(containerDiv);
    
    
    // console.log(details[0].area)

}





loadData();