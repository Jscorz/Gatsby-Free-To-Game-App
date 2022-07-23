# Free Gamer | Free PC and Web Games

A Website built for anyone and everyone who loves to play games on PC, but doesn't want to spend money. The data was pulled from Freetogame API.

**Link to project: [Live-demo]https://jscorz-freegamer.netlify.app/**

---

![screen-gif](./src//assets/images/ezgif.com-gif-maker.gif)

---

## **How It's Made:**

I started the project with the hello world starter from Gatsby. After installing the dependencies/packages I built out the Navbar first, followed by the home page building the page layout. I retrieved the data for the games by using the freetogame api and creating source nodes. Then I built out graphQL queries to retrieve the data.I built out the categories page to let the user cycle through different genres of games. I built out different pages for all the different genres and a page that contains all the games available. I built out the design for the site mobile first and adjusted settings for bigger screens after. This helped remove the need for excessive media queries.

---

## **Tech used:**

HTML, CSS, Javascript, React JS, Gatsby JS, GraphQL, FreetoGame API @ https://www.freetogame.com/

---

## **Lesson's learned:**

This was a great project to learn to test development through different stages of the process right from the beginning. I had issues with a plugin where I built out the entirety of the site in development mode and once I went to run the build process, the process couldn't be finished because of the schema setup from the plugin. I had to research a bit, but ended up adjusted my gatsby node file to create the source nodes in a different manner and had to rebuild all graphQL queries afterwards. So on the next build I will test out the build process earlier.

---
