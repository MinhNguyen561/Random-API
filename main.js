async function getUser() {
    const response = await fetch('https://randomuser.me/api/')
    var data = await response.json();
    var user = data.results[0]
    console.log(data)
    
    const userInfo = document.getElementById('user-info');
                /*userInfo.style.display = 'block';*/

    document.querySelector('#user-image').src = user.picture.large
    document.querySelector('#user-name').innerHTML = 'Name: ' + user.name.first + " " + user.name.last
    document.querySelector('#user-email').innerHTML = 'Email: ' + user.email
    document.querySelector('#user-DoB').innerHTML = 'My birthday is: ' + new Date(user.dob.date).toLocaleDateString()
    document.querySelector('#user-location').innerHTML = 'location: ' + user.location.city + ' ' + user.location.country
    document.querySelector('#user-phone').innerHTML = 'My phone number is: ' + user.cell
    document.querySelector('#user-password').innerHTML = 'My password is: ' + user.login.password
}

function displayInfor(type) {
    const userInfo = document.getElementById('user-info')
    userInfo.style.display = 'block';

    document.querySelector('#user-name').style.display = 'none';
    document.querySelector('#user-email').style.display = 'none';
    document.querySelector('#user-DoB').style.display = 'none';
    document.querySelector('#user-location').style.display = 'none';
    document.querySelector('#user-phone').style.display = 'none';
    document.querySelector('#user-password').style.display = 'none';


switch (type) {
    case 'name':
        document.querySelector('#user-name').style.display = 'block';
        break;
    case 'email':
        document.querySelector('#user-email').style.display = 'block';
        break;
    case 'DoB':
        document.querySelector('#user-DoB').style.display = 'block';
        break;
    case 'location':
        document.querySelector('#user-location').style.display = 'block';
        break;
    case 'phone':
        document.querySelector('#user-phone').style.display = 'block';
        break;
    case 'password':
        document.querySelector('#user-password').style.display = 'block';
        break;
}
}