function clicking() {
    let userName = prompt('Tell us what is your lovely name?');
    console.log(userName);
    let userAge = prompt('Hello ' + userName + '!' + ', Can you please tell me how old are you?');
    userAge = parseInt(userAge);
    console.log(userAge);
    let genre = prompt('Which genre do you prefer to watch the most?', 'Action, Comedy, Horror');
    console.log(genre);
    let lastMovie = prompt('What is the last movie you watched ' + 'in ' + genre +'?');
    console.log(lastMovie);
    if (genre=='Action'){
        alert('Hello '+userName+'!'+'Because you prefer action movies -just like hehe-, we recommend [The Old Guard] to you and hopefuly it will be better than ' + lastMovie);
    } else if  (genre=='Comedy')  {
        alert('Hello '+userName+'!'+'WOW! You prefer laughing!! good choice, and for that we recommend [The War with Grandpa] to you and hopefuly it will be better than ' + lastMovie);
    } else if (genre=='Horror'){
        alert('Hello '+userName+'!'+'We recommend [The call] to you and hopefuly it will be better than ' + lastMovie);
    }   
}