const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//milestone 1 -> stampare in console nome - ruolo - stringa foto
const TeamMemberKeyName = "name";
const TeamMemberKeyRole = "role";
const TeamMemberKeyImage = "image";

for (let i = 0; i < team.length; i++) {
  const teamMemberObject = team[i];
  //console.log(teamMemberObject);
    
  // console.log("name", teamMemberObject[TeamMemberKeyName]);
  // console.log("role", teamMemberObject[TeamMemeberKeyRole]);
  // console.log("image", teamMemberObject[TeamMemberKeyImage]);

  // milestone 2 -> stampare le informazioni in DOM come stringa
  const TeamMemberName = teamMemberObject[TeamMemberKeyName];
  const TeamMemberRole = teamMemberObject[TeamMemberKeyRole];
  const TeamMemberImage = teamMemberObject[TeamMemberKeyImage];

  // const teamContainer = document.getElementsByClassName("team-container");
  // prelevo il container
  const teamContainer = document.getElementById("team-container");
  console.log("teamContainer", teamContainer);

  // creo la card per contenere immagine e testo
  const teamCard = document.createElement("div");
  teamCard.classList.add("team-card");
  console.log("teamCard", teamCard);
  teamContainer.appendChild(teamCard);
  
  // aggiungo l'immagine
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  cardImage.innerHTML = `<img src="img/${TeamMemberImage}" alt="${TeamMemberName}">`;
  teamCard.appendChild(cardImage);

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");
  cardText.innerHTML = `<h3>${TeamMemberName}</h3>`;
  cardText.innerHTML += `<p>${TeamMemberRole}</p>`;
  teamCard.appendChild(cardText);
}