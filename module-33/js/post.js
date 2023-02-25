function fetchElement(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postDisplay(data))
}

fetchElement();

function postDisplay(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('my-5')
        
        containerDiv.innerHTML = `
            <h1 class="text-4xl font-bold">Title : ${post.title} </h1><hr>
            <h2 class="text-2xl">ID : ${post.userId} </h2> <hr>
            <p class="text-xl font-semibold">Post : ${post.body}</p><hr> <br><br> 
        `;

        postContainer.appendChild(containerDiv);
    }
}