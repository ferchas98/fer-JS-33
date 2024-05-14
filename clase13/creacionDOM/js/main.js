const koders = ["Jair", "Daniel", "Maria", "Natalia"];

//crear elementos
let paragraph = document.createElement("p");
console.log(paragraph);

//crear texto del elemento
let paragraphText = document.createTextNode("Gloriela");
let paragraphText1 = document.createTextNode("Suarez");

let checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
console.log(paragraphText);

//para insertar un elemento dentro de otro elemento

// paragraph.append(paragraphText, paragraphText1, checkbox);
// console.log(paragraph);

// let koderCard = document.getElementById("koder-card");
// koderCard.append(paragraph);

//Cards

const createCard = (tittle) => {
  let cardBody = document.createElement("div");
  cardBody.classList.add("card", "mb-3");

  let contentElement = document.createElement("div");
  contentElement.classList.add("card-body");

  let cardTittle = document.createElement("h3");
  let cardTittleText = document.createTextNode(tittle);
  cardTittle.append(cardTittleText);

  let cardParagraph = document.createElement("p");
  let cardParagraphText = document.createTextNode("texto del parrafo");
  cardParagraph.append(cardParagraphText);

  let cardButton = document.createElement("button");
  let cardButtonText = document.createTextNode("Click me");
  cardButton.classList.add("btn", "btn-dark");
  cardButton.append(cardButtonText);

  cardBody.append(cardTittle, cardParagraph, cardButton);

  return cardBody;
};

let cardWrapper = document.getElementById("card-wrapper");

koders.forEach((koder) => {
  let newCard = createCard(koder);
  cardWrapper.append(newCard);
});
