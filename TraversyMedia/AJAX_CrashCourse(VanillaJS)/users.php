<?php

$conn = msqli_connect('localhost', 'root', '123456', 'ajaxtest');

$query = 'SELECT * FROM users';

$result = msqli_query($conn, $query);

$users = msqli_fetch_all($result, MYSQLI_ASSOC);

echo_json_ecode($users);