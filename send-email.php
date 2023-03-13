<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'Ohmelchior@gmail.com';
    $subject = 'New form submission';
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}
?>
