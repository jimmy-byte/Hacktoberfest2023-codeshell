<? php
  if (isset($_POST['name']))
    $name = $_POST['name'];
  if (isset($_POST['email']))
    $email = $_POST['email'];
  if (isset($_POST['message']))
    $message = $_POST['message'];
  if (isset($_POST['subject']))
    $subject = $_POST['subject'];
  if ($name === '') {
    echo "Name cannot be empty So you have to complte it..";
    die();
  }
  if ($email === '') {
    echo "Email cannot be empty So you have to complte it..";
    die();
  } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "Email format is invalid So you have to complte it..";
      die();
    }
  }
  if ($subject === '') {
    echo "Subject cannot be empty. So you have to complte it.";
    die();
  }
  if ($message === '') {
    echo "Message cannot be empty.";
    die();
  }
  $content = "From: $name \nEmail: $email \nMessage: $message";
  $recipient = "youremail@here.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email sent!";
?>
