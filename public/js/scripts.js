const linkTarget = function (event) {
    event.preventDefault();
    console.log(event.target)
    let link = event.target.getAttribute('data-link')
    if (link === null) {
        link = event.target.parentElement.closest('article').getAttribute('data-link');
    }
    console.log(link)
    switch (link) {
        case 'garden2':
            window.open("https://garden2ed.herokuapp.com/");
            break;
        case 'weatherDash':
            window.open("https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/");
            break;
        case 'scribl':
            window.open("https://scribl-notes.herokuapp.com/");
            break;
        case 'wordguess':
            window.open("https://markgatx.github.io/The-Word-Guess-Game/");
            break;
        case 'playdate':
            window.open("https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/");
            break;
        case 'constell':
            window.open("https://www.youtube.com/playlist?list=PLtk51oTcFVK-t97eTz0cJXYqTu9zrxZx7");
            break;
        case 'tds':
            window.open("https://thisdoesntsuck.tv/");
            break;
        case 'hoa':
            window.open("https://www.youtube.com/playlist?list=PLtk51oTcFVK9U1QfOj18dAWu80QXEN9sG");
            break;
        default:
            break;

    }
}


let listeners = document.getElementsByClassName('projectFeat');
for (let i = 0; i < listeners.length; i++) {
    listeners[i].addEventListener('click', linkTarget);
}