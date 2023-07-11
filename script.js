
const chars = [
  {
    name: 'arlan',
    namecard: 'Arlan',
    path: 'destruction',
    pathcard: 'The Destruction' 
  },
  {
    name: 'asta',
    namecard: 'Asta',
    path: 'harmony',
    pathcard: 'The Harmony' 
  },
  {
    name: 'bailu',
    namecard: 'Bailu',
    path: 'abundance',
    pathcard: 'The Abundance',
    rarity: true
  },
  {
    name: 'blade',
    namecard: 'Blade',
    path: 'destruction',
    pathcard: 'The Destruction',
    rarity: true
  },
  {
    name: 'bronya',
    namecard: 'Bronya',
    path: 'harmony',
    pathcard: 'The Harmony',
    rarity: true
  },
  {
    name: 'clara',
    namecard: 'Clara',
    path: 'destruction',
    pathcard: 'The Destruction',
    rarity: true
  },
  {
    name: 'danheng',
    namecard: 'Dan Heng',
    path: 'hunt',
    pathcard: 'The Hunt' 
  },
  {
    name: 'fuxuan',
    namecard: 'Fu Xuan',
    path: 'preservation',
    pathcard: 'The Preservation',
    rarity: true
  },
  {
    name: 'gepard',
    namecard: 'Gepard',
    path: 'preservation',
    pathcard: 'The Preservation',
    rarity: true
  },
  {
    name: 'herta',
    namecard: 'Herta',
    path: 'erudition',
    pathcard: 'The Erudition' 
  },
  {
    name: 'himeko',
    namecard: 'Himeko',
    path: 'erudition',
    pathcard: 'The Erudition',
    rarity: true
  },
  {
    name: 'hook',
    namecard: 'Hook',
    path: 'destruction',
    pathcard: 'The Destruction' 
  },
  {
    name: 'jingyuan',
    namecard: 'Jing Yuan',
    path: 'erudition',
    pathcard: 'The Erudition',
    rarity: true
  },
  {
    name: 'kafka',
    namecard: 'Kafka',
    path: 'nihility',
    pathcard: 'The Nihility',
    rarity: true
  },
  {
    name: 'loucha',
    namecard: 'Loucha',
    path: 'abundance',
    pathcard: 'The Abundance',
    rarity: true
  },
  {
    name: 'luka',
    namecard: 'Luka',
    path: 'nihility',
    pathcard: 'The Nihility' 
  },
  {
    name: 'mart7th',    
    namecard: 'March 7th',
    path: 'preservation',
    pathcard: 'The Preservation' 
  },
  {
    name: 'natasha',
    namecard: 'Natasha',
    path: 'abundance',
    pathcard: 'The Abundance' 
  },
  {
    name: 'pela',
    namecard: 'Pela',
    path: 'nihility',
    pathcard: 'The Nihility'
  },
  {
    name: 'qingque',
    namecard: 'Qingque',
    path: 'erudition',
    pathcard: 'The Erudition' 
  },
  {
    name: 'sampo',
    namecard: 'Sampo',
    path: 'nihility',
    pathcard: 'The Nihility' 
  },
  {
    name: 'seele',
    namecard: 'Seele',
    path: 'hunt',
    pathcard: 'The Hunt',
    rarity: true
  },
  {
    name: 'serval',
    namecard: 'Serval',
    path: 'erudition',
    pathcard: 'The Erudition' 
  },
  {
    name: 'silverwolf',
    namecard: 'Silver Wolf',
    path: 'nihility',
    pathcard: 'The Nihility',
    rarity: true
  },
  {
    name: 'sushang',
    namecard: 'Sushang',
    path: 'hunt',
    pathcard: 'The Hunt' 
  },
  {
    name: 'tingyun',
    namecard: 'Tingyun',
    path: 'harmony',
    pathcard: 'The Harmony' 
  },
  {
    name: 'trailblazerthedestruction',
    namecard: 'Trailblazer - the Destruction',
    path: 'destruction',
    pathcard: 'The Destruction',
    trailblazer: true,
    rarity: true
  },
  {
    name: 'trailblazerthepreservation',
    namecard: 'Trailblazer - the Preservation',
    path: 'preservation',
    pathcard: 'The Preservation',
    trailblazer: true,
    rarity: true
  }, 
  {
    name: 'welt',
    namecard: 'Welt',
    path: 'nihility',
    pathcard: 'The Nihility',
    rarity: true
  },
  {
    name: 'yanqing',
    namecard: 'Yanqing',
    path: 'hunt',
    pathcard: 'The Hunt',
    rarity: true
  },
  {
    name: 'yukong',
    namecard: 'Yukong',
    path: 'harmony',
    pathcard: 'The Harmony'
  }
];

// const paths = [
//   {
//     name: 'abundance'
//   },
//   {
//     name: 'destruction'
//   },
//   {
//     name: 'erudition'
//   },
//   {
//     name: 'harmony'
//   },
//   {
//     name: 'hunt'
//   },
//   {
//     name: 'nihility'
//   },
//   {
//     name: 'preservation'
//   }
// ];

function charHTML (char) {
  let charHTML;
      charHTML = `
        <button class="CharCard">
          ${charPic(char)}

          <div class="CharCardRight">

            <div class="CharCardRightTop">
              ${char.namecard}
            </div>

            <div class="CharCardRightBottom">
              <img class="CharCardRightBottomImg" src="./img/paths/pathsname/${char.path}.png"/>
              ${char.pathcard}
            </div>
          </div>
        
          <img class="CharCardPath" src="./img/paths/${char.path}.png"/>          
        </button>        
      `;
      return charHTML;
}

function charPic(char) {
  let ext;
  if (char.trailblazer) {ext = "gif"} else {ext = "png"}

  let gradient;
  switch (char.rarity) {
    case true:
      gradient = 'Yellow';
      break;
    default:
      gradient = 'Purple';
      break;
  }
  return `<img class="CharCardPic CharCardPicGradient${gradient}" src="./img/chars/${char.name}.${ext}"/>`;
}


const container = document.querySelector('.ContainerChars');

for (const char of chars) {
    container.innerHTML += charHTML(char);;
}


const charCards = document.querySelectorAll('.CharCard');

// let i = 0;
// for (const charCard of charCards) {
//   charCard.onclick = function() {
//     console.log(chars.name)
//   }
//   i++;
// }

let i = 0;
while (i < chars.length) {
  let j = i;
  const charCard = charCards[j];
  charCard.onclick = function() {
    alert(chars[j].name)
  } 
  
  i++
}

// for (let i = 0; i < charCards.length; i++) {
//   ...
// }