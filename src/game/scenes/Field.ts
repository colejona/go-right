import {Scene} from "phaser";
import {FLOOR_HEIGHT, FLOOR_WIDTH, FLOOR_Y} from "../constants";

export class Field extends Scene {
    private floor: Phaser.Physics.Arcade.StaticGroup;

    constructor() {
        super('Field');
    }

    preload() {
        this.load.image('floor', 'assets/platform.png');
    }

    create() {
        this.floor = this.physics.add.staticGroup();
        this.floor.create(0.5 * FLOOR_WIDTH, FLOOR_Y + 0.5 * FLOOR_HEIGHT, 'floor');
    }

    update() {

    }
}
