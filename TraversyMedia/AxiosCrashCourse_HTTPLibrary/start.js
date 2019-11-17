// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


// GET REQUEST
function getTodos() {
  // console.log('GET Request');

  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params:{
  //     _limit: 5
  //   }
  // }).then(res => showOutput(res))
  //   .catch(err => console.error(err));

  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2', { timeout: 5000})
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// POST REQUEST
function addTodo() {
  // console.log('POST Request');

  // axios({
  //   method: 'post',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   data:{
  //     title: "new todo long ver",
  //     completed: false
  //   }
  // }).then(res => showOutput(res))
  //   .catch(err => console.error(err));

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: "new todo short ver",
    completed: false
  })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  // console.log('PUT/PATCH Request');

  // axios.put('https://jsonplaceholder.typicode.com/todos/1', {
  //   title: "updated todo short put ver",
  //   completed: true
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
    title: "updated todo short patch ver",
    completed: true
  })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  // console.log('DELETE Request');

  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  // console.log('Simultaneous Request');

  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
  ])
    .then(

      axios.spread((todos, posts) => showOutput(posts))
      
      // res => {
      //   console.log(res[0]);
      //   console.log(res[1]);
      //   showOutput(res[1]);
      // }
    )
    .catch(err => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  // console.log('Custom Headers');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  }

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: "new todo short ver",
    completed: false
  }, config)
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  // console.log('Transform Response');

  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };

  axios(options).then(res => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  // console.log('Error Handling');

  axios.get('https://jsonplaceholder.typicode.com/todoss', {
    // validateStatus: function(status){
    //   return status < 500; // only if status 
    // }
  })
    .then(res => showOutput(res))
    .catch(err => {
      if(err.response){
        // not 200 response
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if(err.response.status === 404){
          alert('error: page not found')
        }
      } else if (err.request){
        // req made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  // console.log('Cancel Token');

  const source = axios.CancelToken.source();

  axios.get('https://jsonplaceholder.typicode.com/todos', {
    cancelToken: source.token
  })
  .then(res => showOutput(res))
  .catch(thrown => {
    if(axios.isCancel(thrown)){
      console.log('Request canceled', thrown.message);
    }
  });

  if(true){
    source.cancel('Request canceled!!!!!');
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} request sent to  ${config.url} at ${new Date().getTime()}`);

  return config;
}, error => {
  return Promise.reject(error);
});

// AXIOS INSTANCES
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.get('/comments?_limit=2').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5 class="text-info">Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header bg-warning">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header bg-primary text-light">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header bg-success text-light">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);