class example1 extends Phaser.Scene {
  constructor() {
super({key:"example1"});
  }
  preload(){
    this.load.image("wine", "assets/wine.png");

  }
  create(){
    this.image = this.add.image(400,300, "wine");
    this.input.on('pointerdown', function(pointer){
      this.image.x = pointer.x;
      this.image.y = pointer.y;
      console.log("down");
    }, this)
  }
}
