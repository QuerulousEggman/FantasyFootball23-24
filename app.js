const teamObject = {
  "Arsenal": {
    "Goalkeeper": ["Aaron Ramsdale", "David Raya", "Karl Hein"],
    "Defender": ["Ben White", "Takehiro Tomiyasu", "Gabriel", "William Saliba", "Oleksandr Zinchenko", "Jurrien Timber", "Jakub Kiwior", "Cedric Soares"],
    "Midfielder": ["Martin Odegaard", "Thomas Partey", "Jorginho", "Mohamed Elneny", "Declan Rice", "Emile Smith-Rowe", "Fabio Vieira"],
    "Forward": ["Gabriel Jesus", "Kai Havertz", "Bukayo Saka", "Gabriel Martinelli", "Leandro Trossard", "Edward Nketiah", "Reiss Nelson"]
  },
  "Aston Villa": {
    "Goalkeeper": ["Emiliano Martinez", "Robin Olsen"],
    "Defender": ["Matty Cash", "Pau Torres", "Lucas Digne", "Tyrone Mings", "Diego Carlos", "Alex Moreno", "Calum Chambers", "Ezri Konsa", "Kortney Hause", "Clement Lenglet"],
    "Midfielder": ["Youri Tielemans", "Emiliano Buendia", "Douglas Luiz", "Boubacar Kamara", "Leander Dendoncker", "Jacob Ramsey", "John McGinn", "Tim Iroegbunam", "Nicolo Zaniolo"],
    "Forward": ["Moussa Diaby", "Ollie Watkins", "Leon Bailey", "Bertrand Traore", "Jhon Duran", "Omari Kellyman"]
  },
  "Bournemouth": {
    "Goalkeeper": ["Neto", "Ionut Radu", "Darren Randolph"],
    "Defender": ["Ryan Frefericks", "Adam Smith", "Lloyd Kelly", "Chris Mepham", "Max Aarons", "Illia Zabarnyi", "Marcos Senesi", "Milos Kerkez"],
    "Midfielder": ["Joe Rothwell", "Gavin Kilkenny", "Lewis Cook", "Marcus Tavernier", "Ryan Christie", "David Brooks", "Alex Scott", "Philip Billing", "Hamed Junior Traore", "Tyler Adams", "Dango Ouattara", "Luis Sinisterra"],
    "Forward": ["Justin Kluivert", "Dominic Solanke", "Antoine Semenyo", "Kieffer Moore", "Emiliano Marcondes"]
  },
  "Brentford": {
    "Goalkeeper": ["Emiliano Martinez", "Robin Olsen"],
    "Defender": ["Matty Cash", "Pau Torres", "Lucas Digne", "Tyrone Mings", "Diego Carlos", "Alex Moreno", "Calum Chambers", "Ezri Konsa", "Kortney Hause", "Clement Lenglet"],
    "Midfielder": ["Youri Tielemans", "Emiliano Buendia", "Douglas Luiz", "Boubacar Kamara", "Leander Dendoncker", "Jacob Ramsey", "John McGinn", "Tim Iroegbunam", "Nicolo Zaniolo"],
    "Forward": ["Moussa Diaby", "Ollie Watkins", "Leon Bailey", "Bertrand Traore", "Jhon Duran", "Omari Kellyman"]
  },
  "Brighton and Hove Albion": {
    "Goalkeeper": ["Thomas Strakosha", "Mark Flekken", "Ellery Balcombe"],
    "Defender": ["Charlie Goode", "Zanka", "Rico Henry", "Ethan Pinnock", "Kristoffer Ajer", "Nathan Collins", "Ben Mee", "Aaron Hickey"],
    "Midfielder": ["Myles Peart-Harris", "Shandon Baptiste", "Mads Roerslev", "Yehor Yarmoliuk", "Vitaly Janelt", "Joshua Dasilva", "Frank Onyeka", "Christian Norgaard", "Mathias Jensen", "Mikkel Damsgaard"],
    "Forward": ["Ivan Toney", "Bryan Mbeumo", "Yoane Wissa", "Saman Ghoddos", "Neal Maupay", "Kevin Schade", "Keane Lewis-Potter", "Michael Olakigbe"]
  },
  "Burnley": {
    "Goalkeeper": ["James Trafford", "Arijanet Muric", "Denis Franchi", "Lawrence Vigouroux"],
    "Defender": ["Charlie Taylor", "Dara O'Shea", "CJ Egan-Riley", "Hjalmar Ekdal", "Hannes Delcroix", "Vitinho", "Jordan Beyer", "Connor Roberts", "Ameen Al-Dakhil"],
    "Midfielder": ["Jack Cork", "Samuel Bastien", "Han-Noah Massengo", "Johann Gudmundsson", "Josh Brownhill", "Josh Cullen", "Aaron Ramsey", "Nathan Redmond", "Sander Berge", "Mike Tresor", "Anass Zaroury"],
    "Forward": ["Zeki Amdouni", "Lyle Foster", "Michael Obafemi", "Jacob Bruun Larsen", "Manuel Benson", "Wilson Odobert", "Luca Koleosho", "Jay Rodriguez", "Darko Churlinov", "Enock Agyei"]
  },
  "Chelsea": {
    "Goalkeeper": ["Robert Sanchez", "Marcus Bettinelli", "Dorde Petrovic"],
    "Defender": ["Reece James", "Ben Chilwell", "Thiago Silva", "Marc Cucurella", "Wesley Fofana", "Benoit Badiashile", "Trevoh Chalobah", "Malo Gusto", "Levi Colwill", "Axel Disasi", "Malang Sarr", "Ian Maatsen"],
    "Midfielder": ["Enzo Fernandez", "Mykhaylo Mudryk", "Moises Caicedo", "Conor Gallagher", "Cole Palmer", "Romeo Lavia", "Carney Chukwuemeka", "Lesley Ugochukwu"],
    "Forward": ["Raheem Sterling", "Christopher Nkunku", "Nicolas Jackson", "Noni Madueke", "Armando Broja", "Deivid Washington"]
  },
  "Crystal Palace": {
    "Goalkeeper": ["Dean Henderson", "Sam Johnstone", "Joe Whitworth", "Remi Matthews"],
    "Defender": ["Rob Holding", "Marc Guehi", "Joachim Andersen", "Chris Richards", "Tyrick Mitchell", "Nathaniel Clyne", "Joel Ward", "James Tomkins", "Nathan Ferguson", "Finley Marjoram"],
    "Midfielder": ["Michael Olise", "Eberechi Eze", "Cheick Doucoure", "Jefferson Lerma", "Jeffrey Schlupp", "Naouirou Ahamada", "Malcolm Ebiowei", "Will Hughes", "Jairo Riedewald"],
    "Forward": ["Jordan Ayew", "Odsonne Edouard", "Matheus Franca", "Jean-Philippe Mateta", "Jesurun Rak-Sakyi"]
  },
  "Everton": {
    "Goalkeeper": ["Jordan Pickford", "Joao Virginia", "Andy Lonergan", "William Crellin"],
    "Defender": ["Vitaliy Mykolenko", "Ashley Young", "James Tarkowski", "Jarrad Branthwaite", "Seamus Coleman", "Nathan Patterson", "Michael Keane", "Ben Godfrey", "Roman Dixon"],
    "Midfielder": ["Idrissa Gueye", "Dele Alli", "Amadou Onana", "James Garner", "Andre Gomes", "Abdoulaye Doucoure", "Jack Harrison", "Dwight McNeil", "Francis Okoronkwo", "Jenson Metcalfe"],
    "Forward": ["Dominic Calvert-Lewin", "Arnaut Danjuma", "Beto", "Youssef Chermiti", "Lewis Dobbin", "Katia Kouyate"]
  },
  "Fulham": {
    "Goalkeeper": ["Bernd Leno", "Marek Rodak", "Steven-Andreas Benda"],
    "Defender": ["Timothy Castagne", "Calvin Bassey", "Fode Ballo-Toure", "Antonee Robinson", "Kenny Tete", "Issa Diop", "Tim Ream", "Tosin Adarabioyo", "Luc De Fougerolles"],
    "Midfielder": ["Willian", "Andreas Pereira", "Joao Palhinha", "Alex Iwobi", "Harry Wilson", "Sasa Lukic", "Bobby Decordova-Reid", "Tom Cairney", "Harrison Reed", "Luke Harris", "Tyrese Francois"],
    "Forward": ["Adama Traore", "Raul Jimenez", "Carlos Vinicius", "Rodrigo Muniz"]
  },
  "Liverpool": {
    "Goalkeeper": ["Alisson", "Caoimhin Kelleher", "Adrian"],
    "Defender": ["Trent Alexander-Arnold", "Virgil van Dijk", "Andrew Robertson", "Ibrahima Konate", "Konstantinos Tsimikas", "Joel Matip", "Joe Gomez", "Jarell Quansah"],
    "Midfielder": ["Alexis MacAllister", "Dominik Szoboszlai", "Thiago Alcantara", "Harvey Elliott", "Ryan Gravenberch", "Curtis Jones", "Wataru Endo", "Stefan Bajcetic"],
    "Forward": ["Mohamed Salah", "Darwin Nunez", "Luis Diaz", "Cody Gakpo", "Diogo Jota"]
  },
  "Luton Town": {
    "Goalkeeper": ["Tim Krul", "Thomas Kaminski", "James Shea"],
    "Defender": ["Issa Kabore", "Teden Mengi", "Ryan Giles", "Amari'i Bell", "Mads Juel Andersen", "Tom Lockyer", "Reece Burke", "Gabriel Osho", "Daniel Potts", "Aidan Francis-Clarke", "Josh Odell-Bature"],
    "Midfielder": ["Albert Sambi Lokonga", "Ross Barkley", "Tahith Chong", "Marvelous Nakamba", "Pelly Ruddock Mpanzu", "Jacob Brown", "Alfie Doughty", "Jordan Clark", "Luke Berry", "Zack Nelson", "Jayden Luker"],
    "Forward": ["Carlton Morris", "Elijah Adebayo", "Chiedozie Ogbene", "Cauley Woodrow"]
  },
  "Manchester City": {
    "Goalkeeper": ["Ederson", "Stefan Ortega", "Scott Carson", "Zack Steffen"],
    "Defender": ["Josko Gvardiol", "Ruben Dias", "Kyle Walker", "John Stones", "Nathan Ake", "Manuel Akanji", "Rico Lewis", "Sergio Gomez"],
    "Midfielder": ["Kevin De Bruyne", "Bernardo Silva", "Mateo Kovacic", "Rodri", "Kalvin Phillips", "Matheus Nunes", "Oscar Bobb", "Phil Foden", "Jack Grealish"],
    "Forward": ["Erling Haaland", "Julian Alvarez", "Jeremy Doku"]
  },
  "Manchester United": {
    "Goalkeeper": ["Andre Onana", "Altay Bayindir", "Tom Heaton"],
    "Defender": ["Lisandro Martinez", "Raphael Varane", "Harry Maguire", "Luke Shaw", "Aaron Wan-Bissaka", "Diogo Dalot", "Tyrell Malacia", "Victor Lindelof", "Jonny Evans", "Sergio Reguilon"],
    "Midfielder": ["Bruno Fernandes", "Casemiro", "Mason Mount", "Christian Eriksen", "Sofyan Amrabat", "Donny van de Beek", "Hannibal Mejbri", "Scott McTominay", "Kobbie Mainoo"],
    "Forward": ["Facundo Pellistri", "Alejandro Garnacho", "Jadon Sancho", "Antony", "Marcus Rashford", "Anthony Martial", "Rasmus Hojlund", "Amad Diallo", "Shola Shoretire"]
  },
  "Newcastle United": {
    "Goalkeeper": ["Nick Pope", "Loris Karius", "Martin Dubravka", "Mark Gillespie"],
    "Defender": ["Kieran Trippier", "Sven Botman", "Valentino Livramento", "Lewis Hall", "Fabian Schar", "Dan Burn", "Matt Targett", "Jamaal Lascelles", "Emil Krafth", "Javier Manquillo", "Paul Dummett"],
    "Midfielder": ["Matt Ritchie", "Bruno Guimaraes", "Sandro Tonali", "Joelinton", "Harvey Barnes", "Joe Willock", "Sean Longstaff", "Elliot Andersen", "Jacob Murphy"],
    "Forward": ["Alexander Isak", "Miguel Almiron", "Callum Wilson", "Anthony Gordon"]
  },
  "Nottingham Forest": {
    "Goalkeeper": ["Odysseas Vlachodimos", "Matt Turner", "Ethan Horvath", "Wayne Hennessey", "Will Brook"],
    "Defender": ["Gonzalo Montiel", "Serge Aurier", "Neco Williams", "Moussa Niakhate", "Willy Boly", "Murillo", "Andrew Omobamidele", "Joe Worrall", "Scott McKenna", "Giulian Biancone", "Harry Toffolo"],
    "Midfielder": ["Callum Hudson-Odoi", "Andrey Santos", "Ibrahim Sangare", "Danilo", "Nuno Tavares", "Cheikhou Kouyate", "Nicolas Dominguez", "Ola Aina", "Orel Mangala", "Jonjo Shelvey", "Brandon Aguilera", "Ryan Yates", "Harry Arter", "Josh Powell", "Morgan Gibbs-White"],
    "Forward": ["Divock Origi", "Anthony Elanga", "Taiwo Awoniyi", "Emmanuel Dennis", "Chris Wood"]
  },
  "Sheffield United": {
    "Goalkeeper": ["Jordan Amissah", "Wesley Foderingham", "Adam Davies"],
    "Defender": ["Anel Ahmedhodzic", "Yasser Larouci", "Auston Trusty", "Luke Thomas", "John Egan", "Jack Robinson", "Chris Basham", "Rhys Norrington-Davies", "Sai Sachdev", "Connor Barrett", "Ben Drake"],
    "Midfielder": ["James McAtee", "Anis Ben Slimane", "Vinicius Souza", "Gustavo Hamer", "George Baldock", "Tom Davies", "Oliver Norwood", "Ismaila Cheick Coulibaly", "Jayden Bogle", "John Fleck", "Max Lowe", "Ben Osborn", "Andre Brooks", "Jili Buyabu", "Joshua Smith", "George Dickinson", "Charlie Staniland"],
    "Forward": ["Rhian Brewster", "Cameron Archer", "Benie Traore", "Oliver McBurnie", "William Osula", "Daniel Jebbison", "Fernando Macedo", "Billy Blacker"]
  },
  "Tottenham Hotspur": {
    "Goalkeeper": ["Hugo Lloris", "Guglielmo Vicario", "Fraser Forster", "Brandon Austin", "Alfie Whiteman"],
    "Defender": ["Cristian Romero", "Eric Dier", "Ban Davies", "Micky van de Ven", "Ashley Phillips", "Emerson Royal", "Pedro Porro", "Destiny Udogie", "Ryan Sessegnon"],
    "Midfielder": ["Ivan Perisic", "James Maddison", "Giovani Lo Celso", "Pape Matar Sarr", "Rodrigo Bentancur", "Yves Bissuoma", "Pierre-Emile Hojbjerg", "Oliver Skipp"],
    "Forward": ["Manor Solomon", "Son Heung-Min", "Richarlison", "Dejan Kulusevski", "Bryan Gil", "Brennan Johnson", "Alejo Veliz"]
  },
  "West Ham United": {
    "Goalkeeper": ["Lukasz Fabianski", "Alphonse Areola", "Joseph Anang"],
    "Defender": ["Nayef Aguerd", "Kurt Zouma", "Emerson Palmieri", "Thilo Kehrer", "Konstantinos Mavropanos", "Vladimir Coufal", "Aaron Cresswell", "Angelo Ogbonna", "Ben Johnson"],
    "Midfielder": ["Maxwell Cornet", "Mohammed Kudus", "Lucas Paqueta", "Edson Alvarez", "James Ward-Prowse", "Jarrod Bowen", "Tomas Soucek", "Pablo Fornals", "Conor Coventry"],
    "Forward": ["Said Benrahma", "Michail Antonio", "Danny Ings", "Divin Mubama"]
  },
  "Wolverhampton Wanderers": {
    "Goalkeeper": ["Jose Sa", "Daniel Bentley", "Tom King"],
    "Defender": ["Matt Doherty", "Rayan Ait Nouri", "Nelson Semedo", "Max Kilman", "Santiago Bueno", "Craig Dawson", "Toti Gomes", "Hugo Bueno", "Jonny Otto"],
    "Midfielder": ["Joao Gomes", "Mario Lemina", "Tommy Doyle", "Boubacar Traore", "Jean-Ricner Bellegarde", "Enso Gonzalez", "Bruno Jordao", "Joe Hodge"],
    "Forward": ["Matheus Cunha", "Hwang Hee-Chan", "Pablo Sarabia", "Pedro Neto", "Fabio Silva", "Sasa Kalajdzic"]
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

