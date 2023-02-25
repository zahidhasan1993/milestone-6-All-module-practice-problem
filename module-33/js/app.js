const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}


const displayUsers = users => {
    // console.log(users[0].name);
    const h1 = document.createElement('h1');

    h1.classList.add('text-4xl');
    h1.innerText = 'User Name';

    for(const  user of users){
        // console.log(user.name);
        const userDiv = document.getElementById('user_name_container');
        const p = document.createElement('p');
       
        p.innerText = user.name;
        
        // userDiv.appendChild(h1);
        userDiv.appendChild(p);
    }
}