# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- :white_check_mark: Render the page in
- :white_check_mark: See the advice & number upon rendering.
- :white_check_mark: Be able to click the button to generate new advice.

### Screenshot

![Desktop Solution](images/advice-generator-screenshot.JPG.jpg)


### Links

- Solution URL: [https://github.com/Shadyxstep/advice-generator](https://github.com/Shadyxstep/advice-generator)
- Live Site URL: [https://shadyxstep.github.io/advice-generator/](https://shadyxstep.github.io/advice-generator/)

## My process

- I initially built the HTML & CSS template using measurements from the figma design file & style guide.

- After implementing the HTML & CSS for both desktop & mobile versions, I wrote the JavaScript to pull advice data from the Advice Slip API.

- I then wired the button to update the advice number span & advice text span with a random quote every time it was clicked.

- After the main functionality, I decided to play around a bit with adding a spinning animation to the button & an animation to the attribution div.

### Built with

- Semantic HTML5 markup
- SASS (Css Preprocessor)
- Flexbox
- CSS Table
- Desktop-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This helped me in practicing SASS & JavaScript. I particularly enjoyed adding my own animations to the project after completing the main functionality to improve the user experience.

Some of the code I enjoyed writing during the project:

```html
<div class="attribution_img normal" onclick="Rotate()" id="vector_div">
    <img src="images/up-arrow-svgrepo-com.svg" alt="vectorup" class="vector" id="vector">
</div>
```
```css
.rotate {
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    transition-duration: 1.5s;
}

.normal {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    transition-duration: 1.5s;
}
```
```js
const Rotate = () => {
    if (vector_div.classList.contains("normal")) {
        vector_div.classList.add("rotate");
        vector_div.classList.remove("normal");
    } else if (vector_div.classList.contains("rotate")){
        vector_div.classList.add("normal");
        vector_div.classList.add("rotate");
    }
}
```

### Continued development

I would like to continue focusing on getting better at adding animation interactions whilst maintaining best practices when writing code.

I would like to focus on becoming more adept at improving user experience through improving my typography, animation skillset & copywriting.


### Useful resources

- [Example resource 1](https://www.stackoverflow.com) - This helped me with any SCSS & JS problems I was running into during making this project.


## Author

- Website - [Leo Morgan](https://www.leomorgan.com)
- Frontend Mentor - [@Shadyxstep](https://www.frontendmentor.io/profile/Shadyxstep)
- Twitter - [@_leomorgan](https://www.twitter.com/_leomorgan_)

