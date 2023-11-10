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
        nomeCognome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    }

]
for (let i = 0; i < persone.length; i++) {
        
    for(let chiave in persone[i]) {
        console.log( chiave, persone[i][chiave] );
        document.getElementById("prs").innerHTML = persone[i];
    }

}
