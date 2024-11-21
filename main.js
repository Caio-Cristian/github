document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Caio-Cristian')
    .then(function(res) {
        if (!res.ok) {
            throw new Error('Erro ao buscar os dados: ' + res.status);
        }
        return res.json();
    })
    .then(function(json){
        nameElement.innerText = json.name || 'Nome não disponível';
        usernameElement.innerText = json.login || 'Usuário não disponível';
        avatarElement.src = json.avatar_url || '';
        followingElement.innerText = json.following ?? 0;
        followersElement.innerText = json.followers ?? 0;
        repos.innerText = json.public_repos ?? 0;
        linkElement.href = json.html_url || '#';
    })
    .catch(function(erro) {
        console.error('Erro ao carregar dados do usuário', erro);

        nameElement.innerText = 'Erro ao carregar informações';
        usernameElement.innerText = 'Tente novamente mais tarde';
        avatarElement.src = '';
    })
})