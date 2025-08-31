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

//scroll-based animation effect
// const sections = document.querySelectorAll('div');

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//             observer.unobserve(entry.target); // Stop observing once animated
//         }
//     });
// }, {
//     threshold: 0.5 // Trigger when 50% of the element is visible
// });

// sections.forEach(section => {
//     observer.observe(section);
// });
