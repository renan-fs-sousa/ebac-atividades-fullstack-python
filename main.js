document.addEventListener("DOMContentLoaded", function(){
    const myGithub = 'https://api.github.com/users/renan-fs-sousa';
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar');
    const reposElement = document.getElementById('repositories');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const profileLinkElement = document.getElementById('profile-link');

    fetch(myGithub)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        reposElement.innerHTML = json.public_repos;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        profileLinkElement.href = json.html_url;
    })
    .catch(function(erro) {
        console.log('Mensagem de erro: ', erro);
    })
    .finally(function() {
        console.log('fim');
    });
});