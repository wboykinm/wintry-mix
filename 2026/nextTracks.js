const tracks = [
  {
    "order": 1,
    "artist": "The Womack Sisters",
    "song": "I Am Your Season",
    "url": "https://www.dropbox.com/scl/fi/8fv0lk63qactpbxcveg2m/01-I-Am-Your-Season.mp3?rlkey=7hszc4gkierdqjafksyedgtcg&st=xhqs88io&dl=1"
  },
  {
    "order": 2,
    "artist": "Donald Byrd",
    "song": "Cristo Redentor (Remastered)",
    "url": "https://www.dropbox.com/scl/fi/3iqrb6w21aa2t7p75tceb/02-Cristo-Redentor.mp3?rlkey=x0mb1ifys7lyho4oolnbkayjo&st=6vpftt8j&dl=1"
  },
  {
    "order": 3,
    "artist": "Fink",
    "song": "This Is The Thing",
    "url": "https://www.dropbox.com/scl/fi/stneze8rw2ug0400pfmuo/03-This-Is-The-Thing.mp3?rlkey=s0d0ry9cg6ttvxcq0g74h3ym6&st=mrr3a41t&dl=1"
  },
  {
    "order": 4,
    "artist": "Sam Fender",
    "song": "Rein Me In",
    "url": "https://www.dropbox.com/scl/fi/e4us45to18i6i1fm8fsrp/04-Rein-Me-In.mp3?rlkey=m94ykr88rd8vyiub9ujc5xl91&st=wydjmht4&dl=1"
  },
  {
    "order": 5,
    "artist": "Tin Hat Trio",
    "song": "The Longest Night",
    "url": "https://www.dropbox.com/scl/fi/swgrds8y6tsuc1irdbm43/05-The-Longest-Night.mp3?rlkey=hqsbdo448bwztdehl41r7apui&st=lq71bubq&dl=1"
  },
  {
    "order": 6,
    "artist": "Los Pleneros de la Cresta",
    "song": "Base y Fundamento",
    "url": "https://www.dropbox.com/scl/fi/bw6chyk0r89305vohkemw/06-Base-y-Fundamento.mp3?rlkey=mht8aywaacejcpjbdepjkgbzj&st=7iq2kdb0&dl=1"
  },
  {
    "order": 7,
    "artist": "Blizzi Boi",
    "song": "Snowfall",
    "url": "https://www.dropbox.com/scl/fi/41c8s8yk9886jiwshfwln/07-Snowfall.mp3?rlkey=b8mags6vku685i8andjkavy99&st=0wg6ftyg&dl=1"
  },
  {
    "order": 8,
    "artist": "Leon Bridges",
    "song": "A Merry Black Christmas",
    "url": "https://www.dropbox.com/scl/fi/sfds1fvs5v77qkbch962v/08-A-Merry-Black-Christmas.mp3?rlkey=r9heigdci3tulfbmpxyoqkyjr&st=udpjrleu&dl=1"
  },
  {
    "order": 9,
    "artist": "Kornog",
    "song": "Air Pour Faire Pleurer La Mariee/Gavottes",
    "url": "https://www.dropbox.com/scl/fi/9cqrhynpijxokx8v288sp/09-Air-Pour-Faire-Pleurer-La-Mariee_Gavottes.mp3?rlkey=4o2cf8h8v5yzix3na27zpk8l1&st=x50lnxeo&dl=1"
  },
  {
    "order": 10,
    "artist": "The Paul McKenna Band",
    "song": "Again For Greenland",
    "url": "https://www.dropbox.com/scl/fi/y30o8iybhqqmsmwmzaxcv/10-Again-For-Greenland.mp3?rlkey=t29f8n0pkilv7ytx4we02yzc7&st=9xu6es4x&dl=1"
  },
  {
    "order": 11,
    "artist": "Foy Vance",
    "song": "She Burns",
    "url": "https://www.dropbox.com/scl/fi/kb2bscb7mjzzxe1c58svm/11-She-Burns.mp3?rlkey=lt3bo9r9yjkyl2e5pmeo1sq0n&st=o3t4mjtk&dl=1"
  },
  {
    "order": 12,
    "artist": "Gregory Porter",
    "song": "Purple Snowflakes",
    "url": "https://www.dropbox.com/scl/fi/24f0daocnikmg09l47kqh/12-Purple-Snowflakes.mp3?rlkey=cewv3vhhn5trycg5scqoohbcl&st=6txoitlo&dl=1"
  },
  {
    "order": 13,
    "artist": "Liam St. John",
    "song": "Santa Baby (The Murder Ballad)",
    "url": "https://www.dropbox.com/scl/fi/8i85bxpwl6m8qkl87y6ri/13-Santa-Baby-The-Murder-Ballad.mp3?rlkey=uljs2xolpkpz06m62huwv1o4j&st=dkoxdi0v&dl=1"
  },
  {
    "order": 14,
    "artist": "Fall Out Boy",
    "song": "It Feels Like Christmas",
    "url": "https://www.dropbox.com/scl/fi/g14lkoyuni87pfvw696ap/14-It-Feels-Like-Christmas.mp3?rlkey=dndm3ehayir2cbdko5at2ccp9&st=7gwzu3x2&dl=1"
  },
  {
    "order": 15,
    "artist": "JOHNNYSWIM",
    "song": "Auld Lang Syne",
    "url": "https://www.dropbox.com/scl/fi/2htqn13w5ob3ico4ivjrd/15-Auld-Lang-Syne.mp3?rlkey=qcwqnpii5eqnpjez6aw61fvq0&st=8bugobv3&dl=1"
  },
  {
    "order": 16,
    "artist": "Grotte de Cristal · Maxime Simocelli",
    "song": "Sources des Glaces",
    "url": "https://www.dropbox.com/scl/fi/jhmb9wxi0259zgu7d2ppp/16-Sources-des-Glaces.mp3?rlkey=m8kyv2dw6rk59290yrglonxyx&st=aq3scy52&dl=1"
  }
];


const jCardContainer = document.getElementById('j-card');

// Add a title to the j-card
const title = document.createElement('h4');
title.textContent = 'A Wintry Mix 2026 • Track List';
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