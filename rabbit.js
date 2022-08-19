function preload()
{
    img = loadImage('https://tse2.mm.bing.net/th?id=OIP.FH8Cfg-poRN45cbFAr9hOwHaE7&pid=Api&P=0');
}

function setup()
{
    canvas = createCanvas(800, 580);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 800, 580);
    fill("red");
    text("Rabbit", 320, 35);
    noFill();
    stroke("red")
    rect(320, 40, 450, 450);

}