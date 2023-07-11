
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
    pathcard: 'The Abundance'
  },
  {
    name: 'blade',
    namecard: 'Blade',
    path: 'destruction',
    pathcard: 'The Destruction'
  },
  {
    name: 'bronya',
    namecard: 'Bronya',
    path: 'harmony',
    pathcard: 'The Harmony'
  },
  {
    name: 'clara',
    namecard: 'Clara',
    path: 'destruction',
    pathcard: 'The Destruction'
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
    pathcard: 'The Preservation'
  },
  {
    name: 'gepard',
    namecard: 'Gepard',
    path: 'preservation',
    pathcard: 'The Preservation'
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
    pathcard: 'The Erudition'
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
    pathcard: 'The Erudition'
  },
  {
    name: 'kafka',
    namecard: 'Kafka',
    path: 'nihility',
    pathcard: 'The Nihility'
  },
  {
    name: 'loucha',
    namecard: 'Loucha',
    path: 'abundance',
    pathcard: 'The Abundance'
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
    pathcard: 'The Hunt'
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
    pathcard: 'The Nihility'
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
    trailblazer: true
  },
  {
    name: 'trailblazerthepreservation',
    namecard: 'Trailblazer - the Preservation',
    path: 'preservation',
    pathcard: 'The Preservation',
    trailblazer: true
  }, 
  {
    name: 'welt',
    namecard: 'Welt',
    path: 'nihility',
    pathcard: 'The Nihility'
  },
  {
    name: 'yanqing',
    namecard: 'Yanqing',
    path: 'hunt',
    pathcard: 'The Hunt'
  },
  {
    name: 'yukong',
    namecard: 'Yukong',
    path: 'harmony',
    pathcard: 'The Harmony'
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
    name: 'erudition'
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
  return `
    <img class="CharCardPic" src="./img/chars/${char.name}.${ext}"/>`;
}


const container = document.querySelector('.ContainerChars');

for (const char of chars) {
    container.innerHTML += charHTML(char);;
}
