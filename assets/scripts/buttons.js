//Buttons
buttonSubmit.addEventListener('click', function () {
    if (input.value !== '') {
        fetchUserData(url + input.value);
    }
});
//Enabling search on enter key
input.addEventListener(
    'keydown',
    function (e) {
        if (!e) {
            let e = window.event;
        }
        if (e.key == 'Enter') {
            if (input.value !== '') {
                fetchUserData(url + input.value);
            }
        }
    },
    false,
);

input.addEventListener('input', function () {
    noResult.style.display = 'none';
    profileContainer.classList.remove('active');
    searchBar.classList.add('active');
});

btnMode.addEventListener('click', function () {
    if (body.classList.value === 'dark') {
        body.classList.remove('dark');
        textMode.innerHTML = 'DARK';
        iconMode.src = './assets/images/icon-moon.svg';
        bio.innerText = 'This profile has no bio.'
    } else {
        body.classList.add('dark');
        textMode.innerHTML = 'LIGHT';
        iconMode.src = './assets/images/icon-sun.svg';
        bio.innerText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'
    }
});
