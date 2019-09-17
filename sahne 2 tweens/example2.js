class example2 extends Phaser.Scene{
  constructor(){
    super({key:"example2"});
  }

  create(){

    this.text = this.add.text(0,0, "Sahne 2...", {font: "40px Georgia self"});

    var tween = this.tweens.add({
      targets: this.text,
      x:200,
      y:250,
      duration:3000,
      ease:"Elastic",
      easeParams:[0.5,1.5],
      delay:1000
    },this);

  }
}
