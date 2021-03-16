function message() {
  let username = document.getElementById('username').value;
  if (username == '' || username != username) {
    alert('Form anda masih kosong');
  } else {
    alert('Terima kasih ' + username);
  }
  document.forms[0].reset();
}
