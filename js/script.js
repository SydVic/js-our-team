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

    const infoContainer = document.getElementById("info-container");
    const memberInfo = document.createElement("div");
    memberInfo.innerHTML = `${TeamMemberName} ${TeamMemberRole} ${TeamMemberImage}`;
    infoContainer.appendChild(memberInfo);
}

