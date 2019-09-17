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

      var physics_image = this.physics.add.image(pointer.x, pointer.y, "wine");
      physics_image.setVelocity(Phaser.Math.RND.integerInRange(-200,200), -200);

      //this.image.x = pointer.x;
      //this.image.y = pointer.y;
      console.log("physics");
    }, this)
  }
}
