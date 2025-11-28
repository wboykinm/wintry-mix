const tracks = [
  {
    "order": 1,
    "artist": "James McMurtry",
    "song": "Blackberry Winter",
    "url": "https://www.dropbox.com/scl/fi/dgiyk1puc37rxb3pcs9as/01-James-McMurtry-Blackberry-Winter.mp3?rlkey=iildjt6pyd7gjxal5gmygq6ar&dl=1"
  },
  {
    "order": 2,
    "artist": "Eddie Vedder",
    "song": "Save It For Later",
    "url": "https://www.dropbox.com/scl/fi/y2ufqbj2ioj9ab36wdnhp/02-Save-It-For-Later.mp3?rlkey=5yexiuuiizlvb6igymkdwhcfo&dl=1"
  },
  {
    "order": 3,
    "artist": "Boyz II Men · Brian McKnight",
    "song": "Let It Snow",
    "url": "https://www.dropbox.com/scl/fi/oem1212p5863dcr5m7ujh/03-Let-It-Snow-Remastered-2024-feat.-Brian-McKnight.mp3?rlkey=bkmzj001dfhasti0to50gbnm2&dl=1"
  },
  {
    "order": 4,
    "artist": "John Abercrombie · Andy LaVerne",
    "song": "Skating in Central Park",
    "url": "https://www.dropbox.com/scl/fi/is25b38d4hgxje8q6q4l0/04-Skating-in-Central-Park.mp3?rlkey=dqlwnhpb2q64bn8ckyjjtcukt&dl=1"
  },
  {
    "order": 5,
    "artist": "Phoebe Bridgers",
    "song": "Christmas Song",
    "url": "https://www.dropbox.com/scl/fi/boxixsd9r92ommjk21sga/05-Phoebe-Bridgers-Christmas-Song.mp3?rlkey=i9ab3up01oraeq7tlusf9wdrx&dl=1"
  },
  {
    "order": 6,
    "artist": "Idealism",
    "song": "Snowfall",
    "url": "https://www.dropbox.com/scl/fi/ukqog24ey05iioswbga6s/06-Idealism-Snowfall.mp3?rlkey=gdo9wzxyil5oq1l5czo780sit&dl=1"
  },
  {
    "order": 7,
    "artist": "HAIM",
    "song": "Hallelujah",
    "url": "https://www.dropbox.com/scl/fi/ycuaszu1n03fc14zn6oue/07-Hallelujah-Bonus-Track.mp3?rlkey=nyxvtmpokrsknu3djkt9qn33l&dl=1"
  },
  {
    "order": 8,
    "artist": "Beirut",
    "song": "Mani's 7 Books",
    "url": "https://www.dropbox.com/scl/fi/i2g0vjoae0frxhs5q0gsk/08-Mani-s-7-Books.mp3?rlkey=gowd6p94phsh1baz8n5lgfse9&dl=1"
  },
  {
    "order": 9,
    "artist": "The Philly Specials · Mt. Joy",
    "song": "Santa Drives An Astrovan",
    "url": "https://www.dropbox.com/scl/fi/1tahg30tfsmke0rkl8rjy/09-Santa-Drives-An-Astrovan.mp3?rlkey=lmbfi2yy2ch1f5o7lr2dijujb&dl=1"
  },
  {
    "order": 10,
    "artist": "Stephen Mougin · Jana Mougin",
    "song": "Frozen In Time",
    "url": "https://www.dropbox.com/scl/fi/tu5rffzuzkyw4siny8nrv/10-Frozen-In-Time.mp3?rlkey=ycyba5xrw7dhfrwssk7vn7idk&dl=1"
  },
  {
    "order": 11,
    "artist": "Konzerthaus Kammerorchester Berlin",
    "song": "Richter: Winter 1",
    "url": "https://www.dropbox.com/scl/fi/fipea5o1wwpoowrp2a5tp/11-Richter_-Winter-1-2012.mp3?rlkey=8n6ihw870yze695avzwwfgwkp&dl=1"
  },
  {
    "order": 12,
    "artist": "Carlos Mena · Lambert Climent · Jordi Ricart · Daniele Carnovich",
    "song": "El Fin Del Al-Andalus, 1492 (2 de Enero) La Conquista de Granada: Villancico - Levanta Pascual",
    "url": "https://www.dropbox.com/scl/fi/51f70oodza626j0rvknp7/12-IV.-El-Fin-Del-Al-Andalus-1492-2-de-Enero-La-Conquista-de-Granada_-Villancico-_Levanta-pascual-que-Grenada-es-tomada_.mp3?rlkey=m2661lm8mqg99sbbvecorycmf&dl=1"
  },
  {
    "order": 13,
    "artist": "boygenius · Ye Vagabonds",
    "song": "The Parting Glass",
    "url": "https://www.dropbox.com/scl/fi/o4mf6begefs4iokokgdjt/13-The-Parting-Glass.mp3?rlkey=a3p928by9owz9xixvntnc9mlt&dl=1"
  },
  {
    "order": 14,
    "artist": "Robert Glasper · The Baylor Project",
    "song": "Little Drummer Boy",
    "url": "https://www.dropbox.com/scl/fi/xfxj521x6l71bg0sk37du/14-Little-Drummer-Boy-feat.-The-Baylor-Project.mp3?rlkey=zlw6b9snbomfn0n6cq90yz9uw&dl=1"
  }
];

const jCardContainer = document.getElementById('j-card');

// Add a title to the j-card
const title = document.createElement('h4');
title.textContent = 'A Wintry Mix 2024 • Track List';
jCardContainer.appendChild(title);

// Add track list
const trackList = document.createElement('ul');
tracks.forEach(track => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span class="track-order">${track.order}.</span>
    <span class="track-artist">${track.artist}</span>
    - <span class="track-title">${track.song}</span>
`;
    trackList.appendChild(listItem);
});

jCardContainer.appendChild(trackList);