const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
//delte event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
  e.preventDefault();
    // console.log(1);
  //get input value
  const newItem = document.getElementById('item').value;
  //create new li element
  const li = document.createElement('li');
  //add class
  li.className = 'list-group-item';
    // console.log(li);
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));
  //create del button element
  const deleteButton = document.createElement('button');
  //add classes to del button
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  //append text node
  deleteButton.appendChild(document.createTextNode('X'));
  //append button to li
  li.appendChild(deleteButton);
  //append li to list
  itemList.appendChild(li);
}

//remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
      // console.log(1);
    if(confirm('are you sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e){
  //convert to lowercase
  const text = e.target.value.toLowerCase();
    // console.log(text);
    //get list
  const items = itemList.getElementsByTagName('li');
    // console.log(items);
  //convert to an array
  Array.from(items).forEach(function(item){
    const itemName = item.firstChild.textContent;
      // console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) !== -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  })
}