<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = 'nshaft386@gmail.com';
$email_subject = "New Contact Form Submission: $subject";
$email_body = "You have received a new message from your website contact form.\n\n".
              "Name: $name\n".
              "Email: $email\n".
              "Phone: $phone\n".
              "Subject: $subject\n".
              "Message:\n$message";

$headers = "From: $email\n";
$headers .= "Reply-To: $email";

$success = mail($to, $email_subject, $email_body, $headers);

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Thank you for your message! I will get back to you soon.']);
} else {
    echo json_encode(['success' => false, 'message' => 'There was an error sending your message. Please try again later.']);
}
?>