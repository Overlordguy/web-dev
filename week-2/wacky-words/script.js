var name;

var noun1,
  noun2,
  noun3,
  noun4,
  noun5,
  noun6,
  noun7,
  noun8,
  noun9,
  noun10,
  noun11,
  noun12,
  noun13,
  noun14,
  noun15,
  adj1,
  adj2,
  adj3,
  adj4,
  adj5,
  adj6,
  verb1,
  verb2,
  verb3,
  verb4,
  verb5,
  verb6,
  num1,
  num2,
  num3,
  num4,
  num5,
  num6;

function getName() {
  name = document.getElementById("name").value;
  if (name.length > 0) {
    // We can use document.getElementById("ID_NAME").innerHTML to set the text of
    // an HTML element. Use the name variable to make a greeting.

    document.getElementById("greeting").innerHTML = ``;
    showInputs("instructions", "nameInput");
  } else {
    document.getElementById("greeting").innerHTML =
      "Enter your name so we can get started!";
  }
}

function showInputs(newType, oldType) {
  let sectionToHide = document.getElementById(oldType);
  sectionToHide.classList.add("hidden");
  if (oldType == "nums") {
    showSayings();
  } else {
    let sectionToShow = document.getElementById(newType);
    sectionToShow.classList.remove("hidden");
  }
}

function getWords() {
  // document.getElementById("ID_NAME").value is how we will get the words that are added to the inputs.
  // Get the rest of the variables from the HTML by following the same format.
  noun1 = document.getElementById("noun1").value;

  return (sayings = [
    `A ${noun1} in the ${noun2} is worth ${num1} in the ${noun3}.`,
    `A ${noun4} is worth ${num2} words.`,
    `${verb1} up the ${adj1} ${noun5}.`,
    `Be ${adj2}, my ${verb2} ${noun6}.`,
    `${adj3} ${noun7} in a ${adj4} ${noun8}.`,
    `A ${noun9} is a person's ${adj5} ${noun10}.`,
    `Don't ${verb3} your chickens before they ${verb4}.`,
    `Genius is ${num3} percent ${noun11} and ${num4} percent ${noun12}.`,
    `${num5} ${noun13} are better than ${num6}.`,
    `Left ${noun14} doesn't know what the right ${noun14} is ${verb5}.`,
    `Never ${verb6} a ${adj6} horse in the ${noun15}.`
  ]);
}

function showSayings() {
  getWords();

  let element = document.getElementById("famousSayings");
  sayings.forEach(saying => {
    saying = saying.charAt(0).toUpperCase() + saying.slice(1);
    element.insertAdjacentHTML("beforeend", `<p>${saying}</p>`);
  });
}
