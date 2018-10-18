<?php

//database
$conn = mysqli_connect('localhost', 'root', '123456', 'ajaxtest');

echo 'Processing ...';

//check for get variable
if(isset($_GET['name'])){
  $name = msqli_real_escape_string($conn, $_POST['name']);
  echo 'GET: your name is '. $_GET['name'];

  $query = "insert into users(name values('$name')" ;
  if(mysqli_query($conn, $query)){
    echo 'user added...';
  } else {
    echo 'error adding user...:'. mysqli_error($conn);
  }
}

//check for post variable
if(isset($_POST['name'])){
  echo 'POST: your name is '. $_POST['name'];
}