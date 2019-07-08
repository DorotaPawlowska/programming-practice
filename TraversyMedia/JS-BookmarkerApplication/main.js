const saveBookmark = (e) => {
  e.preventDefault();
  let siteName = document.getElementById('siteName').value;
  let siteUrl = document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)){
    return false;
  }

  const bookmark = {
    name: siteName,
    url: siteUrl
  }

  // localstorage
  // localStorage.setItem('test', 'hello world');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));
  // console.log(bookmark);  

  if(localStorage.getItem('bookmarks') === null ){
    let bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  document.getElementById('myForm').reset();

  fetchBookmarks();
}

const fetchBookmarks = () => {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // console.log(bookmarks);  
  let bookmarksResults = document.getElementById('results');

  bookmarksResults.innerHTML = "";
  bookmarks.forEach(element => {
    let name = element.name;
    let url = element.url;
    bookmarksResults.innerHTML += `
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${url}</p>
        <a href="${url}" target="_blank" class="btn btn-primary">Visit</a>
        <a onclick=deleteBookmark("${url}") href="#" class="btn btn-danger delete">Delete</a>
      </div>
    </div>
    `
  });
}

const deleteBookmark = (url) => {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks.forEach( del => {
    if(del.url === url){
      bookmarks.splice(del, 1);
    }
  });
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
}

const validateForm = (siteName, siteUrl) => {
  if(!siteName || !siteUrl){
    alert('fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('must be valid url');
    return false;
  }

  return true;
}

fetchBookmarks();

document.getElementById('myForm').addEventListener('submit', saveBookmark);
