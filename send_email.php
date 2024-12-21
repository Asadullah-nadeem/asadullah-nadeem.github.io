<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate input fields
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        header("Location: index.html?status=missing_fields");
        exit();
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?status=invalid_email");
        exit();
    }

    // Main email recipient
    $to = "no-reply@codeaxe.co.in";
    $subject = "New Contact Form Submission";

    // Main email content
    $email_body = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    </body>
    </html>";

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: no-reply@codeaxe.co.in" . "\r\n";
    $headers .= "Reply-To: {$email}" . "\r\n";

    // Attempt to send the main email
    if (mail($to, $subject, $email_body, $headers)) {
        // Confirmation email recipient
        $confirmation_to = "asadullahn89@gmail.com";
        $confirmation_subject = "New Contact Form Submission";

        // Confirmation email content
        $confirmation_body = "
        <html>
        <head>
            <title>New Contact Form Submission</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; }
                .highlight { padding: 15px; border-left: 4px solid #db4a2b; background-color: #fff; }
                .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #777; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h1 style='color: #db4a2b;'>New Contact Form Submission</h1>
                <p>A new contact form submission has been received. Here are the details:</p>
                <div class='highlight'>
                    <p><strong>Name:</strong> {$name}</p>
                    <p><strong>Email:</strong> {$email}</p>
                    <p><strong>Message:</strong><br>{$message}</p>
                </div>
                <p class='footer'>© CodeAxe. All rights reserved.</p>
                                <p class='footer'>https://codeaxe.co.in/</p>

            </div>
        </body>
        </html>";

        // Confirmation email headers
        $confirmation_headers = "MIME-Version: 1.0" . "\r\n";
        $confirmation_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $confirmation_headers .= "From: no-reply@codeaxe.co.in" . "\r\n";

        // Send confirmation email
        mail($confirmation_to, $confirmation_subject, $confirmation_body, $confirmation_headers);

        // Redirect with success status
        header("Location: index.html?status=success");
        exit();
    } else {
        // Email sending failed
        header("Location: index.html?status=error_sending");
        exit();
    }
} else {
    // Invalid request method
    header("Location: index.html?status=invalid_request");
    exit();
}
?>
