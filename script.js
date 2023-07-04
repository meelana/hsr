
const chars = [
  {
    name: 'arlan',
    path: 'destruction'
  },
  {
    name: 'asta',
    path: 'harmony'
  },
  {
    name: 'bailu',
    path: 'abundance'
  },
  {
    name: 'blade',
    path: 'destruction'
  },
  {
    name: 'bronya',
    path: 'harmony'
  },
  {
    name: 'clara',
    path: 'destruction'
  },
  {
    name: 'danheng',
    path: 'hunt'
  },
  {
    name: 'fuxuan',
    path: 'preservation'
  },
  {
    name: 'gepard',
    path: 'preservation'
  },
  {
    name: 'herta',
    path: 'erudition'
  },
  {
    name: 'himeko',
    path: 'erudition'
  },
  {
    name: 'hook',
    path: 'destruction'
  },
  {
    name: 'jingyuan',
    path: 'erudition'
  },
  {
    name: 'kafka',
    path: 'nihility'
  },
  {
    name: 'loucha',
    path: 'abundance'
  },
  {
    name: 'luka',
    path: 'nihility'
  },
  {
    name: 'mart7th',
    path: 'preservation'
  },
  {
    name: 'natasha',
    path: 'abundance'
  },
  {
    name: 'pela',
    path: 'nihility'
  },
  {
    name: 'qingque',
    path: 'erudition'
  },
  {
    name: 'sampo',
    path: 'nihility'
  },
  {
    name: 'seele',
    path: 'hunt'
  },
  {
    name: 'serval',
    path: 'erudition'
  },
  {
    name: 'silverwolf',
    path: 'nihility'
  },
  {
    name: 'sushang',
    path: 'hunt'
  },
  {
    name: 'tingyun',
    path: 'harmony'
  },
  {
    name: 'trailblazerthedestruction',
    path: 'destruction',
    trailblazer: true
  },
  {
    name: 'trailblazerthepreservation',
    path: 'preservation',
    trailblazer: true
  }, 
  {
    name: 'welt',
    path: 'nihility'
  },
  {
    name: 'yanqing',
    path: 'hunt'
  },
  {
    name: 'yukong',
    path: 'harmony'
  }
];


const paths = [
  {
    name: 'abundance'
  },
  {
    name: 'destruction'
  },
  {
    name: 'erudution'
  },
  {
    name: 'harmony'
  },
  {
    name: 'hunt'
  },
  {
    name: 'nihility'
  },
  {
    name: 'preservation'
  }
];

function charHTML (char) {
  let charHTML;
      charHTML = `
        <button class="CharCard">
          
          ${charPic(char)}

          <div class="CharCardRight">

            <div class="CharCardRightTop">
              ${char.name}
            </div>

            <div class="CharCardRightBottom">
            ${char.path}
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
  return `
    <img class="CharCardPic" src="./img/chars/${char.name}.${ext}"/>`;
}


const container = document.querySelector('.ContainerChars');

for (const char of chars) {
    container.innerHTML += charHTML(char);;
}
