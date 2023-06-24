class Projectile {
    constructor(playerTop, playerLeft) {
        this.player = player
        this.projectile = document.createElement("div")
        this.projectile.classList.add('projectile')
        this.top = playerTop
        this.left = playerLeft
        this.width = 10
        this.height = 3
        this.directionX = 0
        this.directionY = 0
        this.projectile.style.position = "absolute"

    }

    projectileShot() {
        //Start position
        this.projectile
        this.projectileClass
        document.querySelector("#game-screen").append(this.projectile)
        this.projectile.style.width = `${this.width}px`
        this.projectile.style.height = `${this.height}px`
    }

    projectileMovement() { //direction of shoot
        this.top += this.directionY
        this.left += this.directionX

        //if out of gamescreen, projectile deleted from html
        if (this.top < 0 + this.height) {
            this.projectile.remove()
        }
        if (this.top > 450) {
            this.projectile.remove()
        }
        if (this.left < 0 + this.width) {
            this.projectile.remove()
        }
        if (this.left > 450) {
            this.projectile.remove()
        }


        this.updateProjectilePosition()
    }

    updateProjectilePosition() {
        this.projectile.style.top = `${this.top}px`
        this.projectile.style.left = `${this.left}px`
    }
}
