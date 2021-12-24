/**
 * When ever there exists a WHOLE - PART relationship between two classes then their exists either
 * 
 *  1) Agggregation  (or)
 *  2) Composition
 */


/**
 * Whole     | part       |
 * ------------------------
 * Team      | player
 * club      | memeber
 * Library   | Book
 * Car       | Music player
 */


/**
 * Aggregation:
 * - Here whole is made up of one or more parts.
 * - Part can be added/removed from whole whithout distrubing it's functionality.
 * - Whole and part are independent of each other
 */

/**
 * Composition:
 * It is a WHOLE - PART relationship where
 *   - whole is responsible for creation and destruction of the parts
 *   - Part will not function independently
 *   - Whole will not function without the part.
 *   - Whole and part are dependent of each other
 */

class MusicPlayer {
    public model: string;
    public make: string;
    public price: number;
    public specifications: {
        [key: string]: number | string | boolean
    };

    constructor(model: string, make: string, price: number) {
        this.model = model;
        this.make = make;
        this.price = price;
    }

    public start() {
        console.log("Music player started");
    }


    public stop() {
        console.log("Music player stopped");
    }

    public play() {
        console.log("Playing music");
    }
}

class Engine {
    private engineCapacity: number;
    private horsePower: number;
    private strokeType: number;
    private fuelMode: string;

    constructor(engineCapacity: number, horsePower: number, strokeType: number, fuelMode: string) {
             this.engineCapacity = engineCapacity;
             this.horsePower = horsePower;
             this.strokeType = strokeType;
             this.fuelMode = fuelMode;
    }
}

class Wheels {
    private make: string;
    private materialType: string;

    constructor(make: string, materialType: string) {
        this.make = make;
        this.materialType = materialType;
    }
}

class MyCar {
    private engine: Engine;
    private wheels: Wheels;
    private musicPlayer: MusicPlayer;
    private color: string;
    private ac: string;

    // Composition
    constructor() {
        this.engine = new Engine(4000, 550, 4, 'petrol');
        this.wheels = new Wheels('MRF', 'Hard Rubber');
    }

    // Aggregation
    public AddMusicplayer(player: MusicPlayer): void {
        this.musicPlayer = player;
    }

    public playMusic() {
        this.musicPlayer.start();
        this.musicPlayer.play();
    }

    get getEngineSpec(): Engine {
        return this.engine;
    }

}

// const car1 = new MyCar();
// console.log(car1.getEngineSpec);

const musicPlayer = new MusicPlayer("SB001", "Sony", 10000);

// car1.AddMusicplayer(musicPlayer);
// car1.playMusic(); 