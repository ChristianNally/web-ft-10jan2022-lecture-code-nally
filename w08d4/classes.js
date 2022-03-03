
class Rectangle {

  constructor(width,height){
    this.width = width;
    this.height = height;
  }

  area(){
    return this.width * this.height;
  }

}

class Box extends Rectangle {

  constructor(width,height,depth){
    super(width,height);
    this.depth = depth;
  }

  volume(){
    return this.area() * this.depth;
  }

}


const r = new Rectangle(3,4);
const s = new Rectangle(4,5);

console.log('r',r);
console.log('r.area()',r.area());
console.log('s',s);

const b = new Box(6,7,5);
console.log('b',b);
console.log('b.volume()',b.volume());


const externalReference = b.volume;
// externalReference();