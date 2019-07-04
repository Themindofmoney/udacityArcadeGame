// Enemies our player must avoid

class Enemy {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.speed = s;
    this.sprite = 'images/enemy-bug.png';
    };
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;

    if (this.x > 800) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 200);
    };
 //collision Detection
    if (player.x < this.x + 70 &&
        player.x + 70 > this.x &&
        player.y < this.y + 50 &&
        50 + player.y > this.y) {
            playerReset();
    };
}

function playerReset() {
    player.x = 202;
    player.y = 405;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
class Player {
    constructor(x, y,) {
        this.x = x;
        this.y = y;
    this.player = 'images/char-boy.png';
}

}
// This player class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function () {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.render = function () {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.handleInput = function (keyPress) {
  
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };

    if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };

    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };

    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };
  
    if (this.y < 50) {
       playerReset();
       displayCongrats();
    };
};

//WIN

function displayCongrats() {
    const popup = document.getElementById('modal-container');
    popup.classList.remove('hide');
  }
  

// Now instantiate your objects.
// Place the player object in a variable called player
let player = new Player(202, 405);
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// 3 enemies starting y coordinate.
let enemyPositions = [63, 147, 230];

enemyPositions.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
});





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
