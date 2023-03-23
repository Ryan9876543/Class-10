var box
var marks = [30,35,40,38,31,36]

function findAverage () {
  var sum = marks[0] + marks[1] + marks[2] + marks[3] + marks [4] + marks [5]
  var avg = sum/marks.length
  console.log(avg)
}

findAverage();

function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,35,45);
  box.shapeColor = "red"
}

function draw() 
{

  
  background(30);
  if (keyIsDown (RIGHT_ARROW) ) {
    box.x = box.x + 3
     }

     if (keyIsDown (LEFT_ARROW) ) {
      box.x = box.x - 3
       }

if (keyIsDown (UP_ARROW) ) {
      box.y = box.y - 3
       }

    if (keyIsDown (DOWN_ARROW) ) {
    box.y = box.y + 3
    }
drawSprites();
}

 


