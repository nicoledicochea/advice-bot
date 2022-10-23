# The Best Advice No One Told You
Write a short sentence or two about this project and what it does. Be sure to include a link and a screenshot (we're front end devs so we can actually see our work!).

<img width="792" alt="advice" src="https://user-images.githubusercontent.com/111663583/197367937-8e30b218-f303-4f36-8894-fcb93e563220.png">

**Link to project:** [Get Advice](https://nicoledicochea.github.io/advice-bot/)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, JSON, API

I'm giving the people what they want: the best advice no one's ever told them!

Technically, it's not me who's giving the advice though. I used the [Advice Slip API](https://api.adviceslip.com/).

When the user clicks the 'Get Advice' button, the fetch request is triggered and their tidbit of wise saying is placed in the DOM.

## Lessons Learned:

I added the Oscar Wilde quote because the section still had a border even when a request had not been made yet and I didn't want the awkward empty space there. I realized later that I could add in the 'classList.remove' function to have the border gone on page load, and then 'classList.add' the border once the button is clicked.

But, I liked the Oscar Wilde so I kept it!

I kept this method in mind when I worked on [Picturesque](https://nicoledicochea.github.io/picturesque-pixabay-api/).
