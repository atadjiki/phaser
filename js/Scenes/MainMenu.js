var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function MainMenu() {
            Phaser.Scene.call(this, {key: 'mainmenu'});
            window.MENU = this;
        },

    create: function () {

        if(!gameStarted){
            menuMusic = this.sound.add(startMusicName);
            if(audio) menuMusic.play();

            this.add.image(screenWidth / 2, screenHeight / 2, titleName).setDisplaySize(screenWidth, screenHeight);
            this.add.text(screenWidth/3, 100, 'SpyLander', {font: '100px ' + fontName, fill: white});
            this.add.text(screenWidth/3 + 50, 700, 'Any Key to Start', {font: '24px '+ fontName, fill: white});

            this.input.keyboard.on('keydown', function (event){
                if(audio) menuMusic.pause();
                this.scene.start('game');
                this.input.keyboard.stopListeners();

            }, this);
            gameStarted = true;
        } else{
            this.scene.start('game');
        }

    }

});