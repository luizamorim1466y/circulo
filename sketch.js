let cor;
let circuloX;
let circuloy;

function setup() {
  createcanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255));

  circulox = [0, 0, 0];
  circuloy = [random(height)];
}

function draw() {
  fill(cor);
  
for(let contador in circulox) {
  circle(circulox[contador],
circuloy[contador], 50);
     circulox[contador]+=random(0,3);
    circuloY[contador]+=random(-3,3);
  
  if(circulox[contador] >= width){
    circulox[contador]=0;
    circuloY[contador]=random(height);
    
    
     if(mouseIspressed) {
       cor = color(random(0,
2559))
     }  
 }
  }

    
    
}