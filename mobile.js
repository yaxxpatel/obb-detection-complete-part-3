function preload()
{
    img = loadImage('https://tse4.mm.bing.net/th?id=OIP.wmV_rMKNWV3K7Diih2cNwwHaE7&pid=Api&P=0');
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
    text("Mobile", 75, 235);
    noFill();
    stroke("red")
    rect(320, 40, 350, 500);

    fill("red");
    text("Hands", 320, 235);
    noFill();
    stroke("red")
    rect(75, 240, 670, 300);

}