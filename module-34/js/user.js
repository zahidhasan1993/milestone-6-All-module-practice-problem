const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => userData(data))
}

const userData = users =>{
    const userContainer = document.getElementById('user_container');
    console.log(users.results[0].picture.large);

    const userName = document.getElementById('user_name');
    userName.innerText = users.results[0].name.title + ' ' + users.results[0].name.first + ' ' + users.results[0].name.last;

    const userGender = document.getElementById('user_gender')
    userGender.innerText = users.results[0].gender;

    const userImg = document.getElementById('user_img');
    userImg.src = users.results[0].picture.large;


    



}


loadUser();