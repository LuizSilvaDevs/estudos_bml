
// config.js

const users = [
  {
      username: 'dasilva',
      password: 'dasilva'
  },
  // {
  //     username: 'cabosblm',
  //     password: 'cabosblm'
  // },
  // {
  //   username: 'cfc2025',
  //   password: 'cfc2025'
  // }
];


const activeSessions = [];  // Lista de sessões ativas

// Função para verificar se o usuário já está logado
function isUserLoggedIn(username) {
    return activeSessions.includes(username);
}

// Função para adicionar uma nova sessão
function addSession(username) {
    activeSessions.push(username);
}

// Função para remover uma sessão
function removeSession(username) {
    const index = activeSessions.indexOf(username);
    if (index > -1) {
        activeSessions.splice(index, 1);
    }
}
