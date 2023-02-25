const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = quotes => {
    const dataContainer = document.getElementById('data_container');
    // const h4 = document.createElement('h4');
    dataContainer.innerText = quotes.quote;
    // dataContainer.appendChild(h4);
    

    console.log(quotes);
}

loadData();