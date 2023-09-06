const teamObject = {
  "Arsenal": {
    "Goalkeeper": ["Aaron Ramsdale", "David Raya"],
    "Defender": ["Ben White", "Takehiro Tomiyasu", "Gabriel", "William Saliba", "Oleksandr Zinchenko", "Jurrien Timber", "Jakub Kiwior", "Kieran Tierney", "Rob Holding", "Cedric Soares"],
    "Midfielder": ["Martin Odegaard", "Thomas Partey", "Jorginho", "Mohamed Elneny", "Declan Rice", "Emile Smith-Rowe", "Fabio Vieira", "Nuno Tavares", "Albert Sambi Lokonga"],
    "Forward": ["Gabriel Jesus", "Kai Havertz", "Bukayo Saka", "Gabriel Martinelli", "Leandro Trossard", "Nicolas Pepe", "Edward Nketiah", "Folarin Balogun", "Reiss Nelson"]
  },
  "Aston Villa": {
    "Goalkeeper": ["Emiliano Martinez", "Robin Olsen"],
    "Defender": ["Matty Cash", "Pau Torres", "Lucas Digne", "Tyrone Mings", "Diego Carlos", "Alex Moreno", "Calum Chambers", "Ezri Konsa", "Kortney Hause"],
    "Midfielder": ["Philippe Coutinho", "Youri Tielemans", "Emiliano Buendia", "Douglas Luiz", "Boubacar Kamara", "Leander Dendoncker", "Jacob Ramsey", "John McGinn", "Jaden Philogene-Bidace", "Tim Iroegbunam", "Nicolo Zaniolo"],
    "Forward": ["Moussa Diaby", "Ollie Watkins", "Leon Bailey", "Bertrand Traore", "Jhon Duran", "Cameron Archer", "Keinan Davis", "Omari Kellyman"]
  }
}
window.onload = function() {
  const teamSel = document.getElementById("teams");
  const positionSel = document.getElementById("position");
  const playerSel = document.getElementById("player")
  for (const x in teamObject) {
    teamSel.options[teamSel.options.length] = new Option(x, x);
  }
  teamSel.onchange = function() {
    //empty Position and Player- dropdowns
    positionSel.length = 1;
    //display correct values
    for (const y in teamObject[this.value]) {
      positionSel.options[positionSel.options.length] = new Option(y, y);
    }
  }
  positionSel.onchange = function() {
    //empty Player dropdown
    playerSel.length = 1;
    //display correct values
    let z = teamObject[teamSel.value][this.value];
    for (let i = 0; i < z.length; i++) {
      playerSel.options[playerSel.options.length] = new Option(z[i], z[i]);
    }
  }
}

// const navExpandButton = document.querySelector('#nav-expand-button')
// const nav = document.getElementById('mainNav')
// function handleClick() {
//   nav.classList.toggle('open')
//   const expandedState = nav.getAttribute('aria-expanded')
//   nav.setAttribute('aria-expanded', !eval(expandedState))
// };
// navExpandButton.addEventListener('click', handleClick)

