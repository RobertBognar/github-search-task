//Importing variables & Root elements from CSS for toggle mode
const root = document.documentElement.style;
const searchBar = document.querySelector('.searchbar-container');
const profileContainer = document.querySelector('.profile-container');
//Using params for shorter code and passing it to getElementById
const get = (param) => document.getElementById(`${param}`);
//Header Params
let btnMode = get('button-mode');
let textMode = get('text-mode');
let iconMode = get('mode-icon');
//Searchbar Container Params
let buttonSubmit = get('submit');
let input = get('input');
let noResult = get('no-results');
//Profile Container Params
let avatar = get('avatar');
let userName = get('name');
let user = get('user');
let date = get('date');
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let bio = get('bio');
//Profile Stats Container Params
let repos = get('repos');
let followers = get('followers');
let following = get('following');
//Profile Bottom Container Params
let userLocation = get('location');
let userPage = get('page');
let userTwitter = get('twitter');
let userCompany = get('company');
let darkMode = false;
//API URL
const url = 'https://api.github.com/users/';