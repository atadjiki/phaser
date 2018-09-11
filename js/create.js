function create() {


    //set background
    this.add.image(screenWidth / 2, screenHeight / 2, 'background');

    //static group for ground, these are unnaffected by physics
    platforms = this.physics.add.staticGroup();
    platforms.create(screenWidth / 2, screenHeight - 2, 'ground').setScale(2).refreshBody();

    //add player sprite to game world
    player = this.physics.add.sprite(playerStartX, playerStartY, 'dude');
    player.setBounce(0);
    player.setCollideWorldBounds(true);
    //player.setGravityY(-1 * playerGravity);
    this.physics.pause();

    //setup spritesheets for character
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{key: 'dude', frame: 4}],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });

    //collider object
    this.physics.add.collider(player, platforms, playerLand, null, this);

    //initialize text
    scoreText = this.add.text(16, 16, 'Time: 0', {fontSize: '32px', fill: '#000'});
    menuText = this.add.text(screenWidth/4, screenHeight/2,
        'Welcome to SpyLander! \n Press Enter to Start Game',{fontSize: '32px', fill: '#000'});

    endText = this.add.text(screenWidth/4, screenHeight/2,
        '',{fontSize: '32px', fill: '#000'});


    //setup key press listeners
    this.qKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    //hide game actors for now
    hideGameActors();
    hideEndMenu();
    showStartMenu();

}