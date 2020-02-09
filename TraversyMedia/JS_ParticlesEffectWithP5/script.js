// let p;

const particles = [];

function setup(){
  // console.log('setup');
  createCanvas(window.innerWidth, window.innerHeight);
  // console.log(random(100));

  // p = new Particle();
  const particlesLength = Math.floor(window.innerWidth / 10);
  // console.log(particlesLength);
  for(let i = 0; i < particlesLength; i++){
    particles.push(new Particle());
  }
}

function draw(){
  // console.log('draw');
  if(mouseIsPressed){
    // console.log(mouseX, mouseY);
    // fill(0);
  } else {
    // fill(100);
  }
  // circle(150, 150, 80);
  // circle(mouseX, mouseY, 50);


  // particles  =====================================================

  background(55, 100, 144);
  particles.forEach( (p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });

}

class Particle {
  constructor(){
    // props
    this.position = createVector(random(width), random(height));
    // velocity
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    // size
    this.size = 10;
  }

  update(){
    this.position.add(this.velocity);
    this.edges();
  }

  draw(){
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.position.x, this.position.y, this.size);
  }

  edges(){
    if(this.position.x < 0 || this.position.x > width){
      this.velocity.x *= -1;
    }

    if(this.position.y < 0 || this.position.y > height){
      this.velocity.y *= -1;
    }
  }

  checkParticles(particles){
    particles.forEach(particle => {
      const d = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);

      if(d < 120){
        stroke('rgba(255,255,255,0.1)');
        line(this.position.x, this.position.y, particle.position.x, particle.position.y);
      }
    });
  }
}