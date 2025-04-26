//Scripts//
// ReadMe button Alert
function myfunction() {
    alert('Hello there, I am KENNY a Fullstack javascript developer!');
    alert('Welcome to my Website!')
    alert('By the end, You will be able to rate my experience')
    alert('Good Luck!')
}

//back to top button
document.getElementById("Top")
    .addEventListener(`click`, function(){

        window.scrollTo({
            top: 0,
            left: 0,
            behaviour: 'smooth'
        });
    }

);
