function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-submit");
  let apiKey = "41aob4b0d9c63f894f5ae29a4ce68ta0";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You have a lot of knowledge of english literature, your speciality being poetry. You can easily formulate short english poems when given a topic. Your mission is to generate a four line poem in basic HTML and seperate each line with a <br/>, do not inlcude a title to the poem, sign the poem with <strong>SheCodes AI</strong>";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //
  axios.get(apiURL).then(displayPoem);
}
//
let poemform = document.querySelector("#poem-generator-form");
poemform.addEventListener("submit", generatePoem);
