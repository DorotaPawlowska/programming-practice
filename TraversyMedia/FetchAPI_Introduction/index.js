const gText = document.getElementById('getText');
const gOutput = document.getElementById('output');
const gUsers = document.getElementById('getUsers');
const gPosts = document.getElementById('getPosts');
const aPost = document.getElementById('addPost');

function getText (){
  // console.log(123);
  // fetch('sample.txt')
  // .then( function(res){
  //   return res.text();
  // })
  // .then(function(data){
  //   console.log(data);
  // })

  fetch('sample.txt')
  .then((res) => res.text())
  .then((data) => {
    gOutput.innerHTML = data;
  })
  .catch((err) => console.log(err));
}

function getUsers(){

  fetch('users.json')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2 class="mb-4">Users:</h2>';
    // console.log(data);
    data.forEach( user => {
      output += `
        <ul class="list-group mb-3" >
          <li class="list-group-item">ID: ${user.id}</li>
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Email: ${user.email}</li>
        </ul>
      `;
    });
    gOutput.innerHTML = output;
  })
}

function getPosts(){

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2 class="mb-4">Posts:</h2>';
    // console.log(data);
    data.forEach( post => {
      output += `
        <div class="card card-body mb-3">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </div>
      `;
    });
    gOutput.innerHTML = output;
  })
}

function addPost(e){
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({title: title, body: body})
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}

gText.addEventListener('click', getText);
gUsers.addEventListener('click', getUsers);
gPosts.addEventListener('click', getPosts);
aPost.addEventListener('submit', addPost);
