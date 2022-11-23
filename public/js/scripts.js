const quest = document.getElementById('question');
const ans = document.getElementById('answer');


const aboutMe = [
    ["Favorite food?", "Mole enchiladas or sushi"], 
    ["Favorite movie?", "Serenity"],
    ["Star Wars or Star Trek?", "Both, all day long"],
    ["Hogwart's House?", "Hufflepuff, Huffle-proud"],
    ["Favorite Artist?", "John Singer Sargent"],
    ["Dream Job?", "Starfleet Captain"],
    ["Best Star Trek Captain?", "Captain Pike, SNW"],
    ["Hobby?", "Board games"],
    ["Guilty Pleasure?", "None! You shouldn't feel guilty for doing fun things."],
    ["Favorite Pokemon?", "Eevee"],
    ["Favorite Graphic Novel?", "Y: The Last Man"],
    ["Current Favorite Author?", "N.K. Jemison"],
    ["Scariest Show Ever?", "The Haunting of Hill House (Netflix)"],
    ["Marvel or DC?","I choose both"],
    ["Mountains or Beach?", "Mountains all day"],
    ["Favorite Sport?", "Volleyball"],
    ["Second Favorite Sport?", "Soccer"],
    ["Cake or pie?", "Quit trying to make me choose!"],
    ["Favorite Fruit?", "Strawberries"],
    ["Favorite Board Games", "Powergrid, Brass, Dune:Imperium, Underwater Cities"]
]

const questNum = Math.floor(Math.random() * aboutMe.length+1);
quest.textContent="Random question: " + aboutMe[questNum][0];
ans.textContent=aboutMe[questNum][1];

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
        case 'wg':
            window.open("https://youtu.be/MRzQGe8m_4A");
            break;
            case 'csssnips':
            window.open("https://markgatx.github.io/CSS-Cheat-Sheet/");
            break;
        default:
            break;

    }
}


let listeners = document.getElementsByClassName('projectFeat');
for (let i = 0; i < listeners.length; i++) {
    listeners[i].addEventListener('click', linkTarget);
}

