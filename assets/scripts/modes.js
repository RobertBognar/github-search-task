//Dark & Light Mode Settings Toggle, using premade get param to short code
function darkModeSettings() {
    document.body.style.backgroundColor = '#141D2F';
    document.body.style.transition = '0.5s';
    get('devfinder').style.color = '#FEFEFE';
    get('searchbar').style.backgroundColor = '#1E2A47';
    get('profilecontainer').style.backgroundColor = '#1E2A47';
    userName.style.color = '#FEFEFE';
    date.style.color = '#FEFEFE';
    bio.style.color = '#FEFEFE';
    get('profileStatsContainer').style.backgroundColor = '#141D2F';
    get('reposStat').style.color = '#FEFEFE';
    repos.style.color = '#FEFEFE';
    get('followersStat').style.color = '#FEFEFE';
    followers.style.color = '#FEFEFE';
    get('followingStats').style.color = '#FEFEFE';
    following.style.color = '#FEFEFE';
    userLocation.style.color = '#FEFEFE';
    userPage.style.color = '#FEFEFE';
    userTwitter.style.color = '#FEFEFE';
    userCompany.style.color = '#FEFEFE';


    textMode.style.color = '#FEFEFE';
    textMode.innerText = 'LIGHT';
    bio.innerText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.';
    iconMode.src = "./assets/images/icon-sun.svg";
    darkMode = true;
}
function lightModeSettings() {
    document.body.style.backgroundColor = '#F6F8FF';
    get('devfinder').style.color = '#222731';
    get('searchbar').style.backgroundColor = '#FEFEFE';
    get('profilecontainer').style.backgroundColor = '#FEFEFE';
    userName.style.color = '#2B3442';
    date.style.color = '#697C9A';
    bio.style.color = '#4B6A9B';
    get('profileStatsContainer').style.backgroundColor = '#F6F8FF';
    get('reposStat').style.color = '#4B6A9B';
    repos.style.color = '#2B3442';
    get('followersStat').style.color = '#4B6A9B';
    followers.style.color = '#2B3442';
    get('followingStats').style.color = '#4B6A9B';
    following.style.color = '#2B3442';
    userLocation.style.color = '#4B6A9B';
    userPage.style.color = '#4B6A9B';
    userTwitter.style.color = '#4B6A9B';
    userCompany.style.color = '#4B6A9B';


    textMode.style.color = "#4B6A9B";
    textMode.innerText = "DARK";
    bio.innerText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
    iconMode.src = "./assets/images/icon-moon.svg";
    darkMode = false;
}