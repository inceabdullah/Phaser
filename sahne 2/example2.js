class example2 extends Phaser.Scene{
  constructor(){
    super({key:"example2"});
  }

  create(){

    this.text = this.add.text(0,0, "Sahne 2...", {font: "40px Georgia self"});

  }
}
