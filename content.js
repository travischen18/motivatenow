/* Currently using an array to hold text quotes */
var textArray = [
    'Do, or do not. There is no try.',
    'You have brains in your head. You have feet in your shoes. You can steer yourself, any direction you choose.',
    'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
    'You are not your resume, you are your work.',
    'Yesterday’s home runs don’t win today’s games.',
    'A professional is someone who can do his best work when he doesn\x27t feel like it.',
];

// Generate a random number to select a quote
var randomNumber = Math.floor(Math.random()*textArray.length);

var randomQuote = textArray[randomNumber].toUpperCase();


var popupBG = document.createElement('div');
popupBG.setAttribute('class', 'procras-overlay-bg');
document.body.appendChild(popupBG);

var popupContent = document.createElement('div');
popupContent.setAttribute('class', 'procras-overlay-content');
document.body.appendChild(popupContent);


var toptext = document.createElement('p');
toptext.setAttribute('class', 'popupText');
$(toptext).append(randomQuote);
$(popupContent).append(toptext);

var bottomDiv = document.createElement('div');
bottomDiv.setAttribute('id', 'buttonDiv');
$(popupContent).append(bottomDiv);

//add button to exit the popup/ just give in
var closeButton = document.createElement('button');
closeButton.setAttribute('class', 'procras-close-btn');
closeButton.setAttribute('id', 'closeButton');
$(closeButton).append("I give in!");
$(bottomDiv).append(closeButton);

//add button to go to different site/ avoid temptation
var newSiteButton = document.createElement('button');
newSiteButton.setAttribute('class', 'procras-go-btn');
newSiteButton.setAttribute('id', 'goButton');
$(newSiteButton).append("I will be strong!");
$(bottomDiv).append(newSiteButton);

$(document).ready(function(){
 
    // function to close our popups
    function closePopup(){
        document.body.removeChild(popupBG);
        document.body.removeChild(popupContent);
    }
   
    // hide popup when user clicks on close button
    $('#closeButton').click(function(){
        closePopup();
    });

    // go to another site when user clicks go button
    $('#goButton').click(function(){
        window.location.href = "http://www.google.com";
    });

});