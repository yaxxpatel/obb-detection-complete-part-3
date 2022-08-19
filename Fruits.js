function preload()
{
    img = loadImage('https://tse2.mm.bing.net/th?id=OIP.6ZBqDsjHny9C92HEXahPhQHaFC&pid=Api&P=0');
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
    text("Apple", 220, 135);
    noFill();
    stroke("red")
    rect(220, 140, 350, 200);

    fill("red");
    text("Grapes", 320, 235);
    noFill();
    stroke("red")
    rect(320, 240, 270, 300);

    fill("red");
    text("Oranges", 225, 235);
    noFill();
    stroke("red")
    rect(225, 240, 170, 300);
}