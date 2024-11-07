import Ship from './ship.js';

export default class GameBoard{
    constructor(){
        this.board=[];

        for(let i=0;i<10;i++){
            this.board=[];
            for(let j=0;j<10;j++){
                this.board[i][j]=null;
            }
        }
        this.ships=[];
        this.missed=[];
    }
    placeShip(length, x, y, direction){
        const ship=new Ship(length);
        for (let i = 0; i < length; i++) {
            if (direction === 'horizontal') {
                this.board[x][y + i] = ship; 
            } else if (direction === 'vertical') {
                this.board[x + i][y] = ship; 
            }
        }
        this.ships.push(ship);
    }
    receiveAttack(x, y) {
        const ship = this.board[x][y];
        if (ship) {
            ship.hit(); // If a ship is there, register a hit
        } else {
            this.missedAttacks.push([x, y]); // If no ship, record a missed attack
        }
    }
    allShipsSunk() {
        // Return true if all ships are sunk
        return this.ships.every(ship => ship.isSunk());
    }
}