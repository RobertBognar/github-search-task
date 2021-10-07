//Importing variables & defining all variables
const searchBar = document.querySelector('.searchbar-container');
const profileContainer = document.querySelector('.profile-container');
const body = document.querySelector('body');
//Using params for shorter code and passing it to getElementById
const get = (param) => document.getElementById(`${param}`);
//Header Params
const btnMode = get('button-mode');
const textMode = get('text-mode');
const iconMode = get('mode-icon');
//Searchbar Container Params
const buttonSubmit = get('submit');
const input = get('input');
const noResult = get('no-results');
//Profile Container Params
const avatar = get('avatar');
const userName = get('name');
const user = get('user');
const date = get('date');
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const bio = get('bio');
//Profile Stats Container Params
const repos = get('repos');
const followers = get('followers');
const following = get('following');
//Profile Bottom Container Params
const userLocation = get('location');
const userPage = get('page');
const userTwitter = get('twitter');
const userCompany = get('company');
//let darkMode = false;
//API URL
const url = 'https://api.github.com/users/';

//Functions
function fetchUserData(git) {
    fetch(git)
        .then((response) => response.json())
        .then((data) => {
            profileUpdate(data);
        })
        .catch((error) => {
            throw error;
        });
}

//Octocat background start
fetchUserData(url + 'octocat');

//Function for importing data from API
function profileUpdate(data) {
    if (data.message !== 'Not Found') {
        noResult.style.display = 'none';
        function checkNull(paramOne, paramTwo) {
            if (paramOne === '' || paramOne === null) {
                paramTwo.style.opacity = 0.5;
                paramTwo.previousElementSibling.style.opacity = 0.5;
                return 'Not available';
            } else {
                return `${paramOne}`;
            }
        }
        //Importing values from API values
        avatar.src = `${data.avatar_url}`;
        userName.innerText = `${data.name}`;
        user.innerText = `@${data.login}`;
        datesegments = data.created_at.split('T').shift().split('-');
        date.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]
            } ${datesegments[0]}`;
        bio.innerText =
            data.bio == null ? 'This profile has no bio.' : `${data.bio}`;
        repos.innerText = `${data.public_repos}`;
        followers.innerText = `${data.followers}`;
        following.innerText = `${data.following}`;
        userLocation.innerText = checkNull(data.location, userLocation);
        page.innerText = checkNull(data.blog, page);
        userTwitter.innerText = checkNull(data.twitter_username, userTwitter);
        userCompany.innerText = checkNull(data.company, userCompany);
        searchBar.classList.toggle('active');
        profileContainer.classList.toggle('active');
    } else {
        noResult.style.display = 'block';
    }
}

profileContainer.classList.toggle('active');
