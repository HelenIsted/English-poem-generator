function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: `Generating a poem for you...`,
    autoStart: true,
    delay: 50,
  });
}
//
let poemform = document.querySelector("#poem-generator-form");
poemform.addEventListener("submit", generatePoem);
