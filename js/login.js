// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verifica as credenciais
  const user = users.find(conferir => conferir.username === username && conferir.password === password);

  if (user) {
      // Credenciais corretas, redireciona para a página inicial
      window.location.href = 'PaginaInicial.html';  // Redireciona para a página inicial
  } else {
      // Credenciais incorretas, exibe mensagem de erro
      document.getElementById('error-message').textContent = 'Login ou Senha incorretos!'; // Mostra a mensagem de erro
  }
});


