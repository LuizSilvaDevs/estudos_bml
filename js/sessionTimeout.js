// sessionTimeout.js

// Tempo limite em milissegundos (10 minutos)
const TIMEOUT = 60 * 1000;
let timeout;

// Função para deslogar o usuário
function logout() {
    alert('Sessão expirada por inatividade. Você será redirecionado para a página de login.');
    window.location.href = 'index.html'; // Redireciona para o login
}

// Função para resetar o temporizador
function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(logout, TIMEOUT);
}

// Adiciona eventos para resetar o temporizador quando houver atividade
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('click', resetTimer);
document.addEventListener('scroll', resetTimer);

// Inicia o temporizador quando a página carregar
resetTimer();
