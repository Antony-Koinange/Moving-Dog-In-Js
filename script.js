//used to co-ordinate the movements of the sprite sheet
let playerState = 'idle'
//connects to the html player
const dropdown = document.getElementById('animation');
dropdown.addEventListener('change',function(t) {
    //target tefer to an element that was clicked
    playerState = t.target.value;
})
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height =600;

const playerImages= new Image();
playerImages.src ='shadow_dog.png';
// global variable
const spriteWidth = 575;
const spriteHeight =523;


let gameFrame= 0;
//helps reduce the speed of the frames in the sprite sheets
const staggerFrame =5;
//main datato hold all the animations
const spriteAnimation = [];
//creating simple canvas maps
const animationState =[
    {
        name: 'idle',
        frames:'7',
    },
    {
        name: 'jump',
        frames:'7',
    },
    {
        name: 'fall',
        frames:'7',
    },
    {
        name: 'run',
        frames:'9',
    },
    {
        name: 'dizzy',
        frames:'11',
    },{
        name: 'sit',
        frames:'5',
    },
    {
        name: 'roll',
        frames:'7',
    },
    {
        name: 'bite',
        frames:'7',
    },
    {
        name: 'ko',
        frames:'12',
    },
    {
        name: 'getHit',
        frames:'4',
    }
    
];
//used to access the data in the animationState as state
animationState.forEach((state, index) => {
    //mapping the spread sheets
    let frames ={
        loc:[],
    }

    for (let j = 0; j < state.frames; j++) {
        //calculate the number of sprites to move in the x and y axis
        let positionX = j * spriteWidth;
        let positionY = index* spriteHeight;
        //push to loc array
        frames.loc.push({x:positionX, y:positionY});
    }
    spriteAnimation[state.name]=frames;
});
console.log(spriteAnimation);


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //increase the gameFrame 5 times to get to 1
    //Math.floor is used to round off the value down 
let position =Math.floor(gameFrame/staggerFrame)% spriteAnimation[playerState].
loc.length;
 let frameX = spriteWidth*position;
 let frameY = spriteAnimation[playerState].loc[position].y;

    //cutting out the sprite sheets
    /*----------------------helps move the spritesheet vertically or 
    or horizontally--------------------------*/
    ctx.drawImage(playerImages,frameX,frameY,
    spriteWidth,spriteHeight,0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
