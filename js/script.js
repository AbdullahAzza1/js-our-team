const persone = [
    {
        nomeCognome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nomeCognome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nomeCognome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nomeCognome: "Angela Lopez",
        ruolo: "Social Media Manage",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nomeCognome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nomeCognome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }

]
for (let i = 0; i < persone.length; i++) {
    console.log(persone[i].nomeCognome);
    console.log(persone[i].ruolo);
    console.log(persone[i].foto);

    const div = document.createElement("div")
    document.getElementById("person").appendChild(div)
    document.getElementById("person").innerHTML += persone[i].nomeCognome;

}
