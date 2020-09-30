var scanf = require('scanf');

//Exemple de grille
var grid = [
    [0, 1, 1, 1, 0],
    [0, 2, 'M', 2, 0],
    [0, 2, 'M', 2, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

class Cellule {
    constructor() {
        this.estDecouvert = false;
        this.estFlag = false;
    }
};

class Mine extends Cellule {
    constructor() {
        super();
    }

};

class Nombre extends Cellule {
    constructor(value) {
        super();
        this.value = value;
    }

};

class Demineur {
    constructor(tailleChoisi) {

        this.tailleGrille = tailleChoisi; //difficulte * 5;
        this.nombreMines = Math.round((this.tailleGrille * this.tailleGrille) / 10);

        this.grille = new Array(this.tailleGrille);
        for (var x = 0; x < this.tailleGrille; x++) {
            this.grille[x] = new Array(this.tailleGrille);
            for (var y = 0; y < this.tailleGrille; y++) {
                this.grille[x][y] = new Nombre(0);
            }
        }

        var posX = 0;
        var posY = 0;
        let counter = this.nombreMines;
        while (counter > 0) {
            posX = getRandomInt(0, this.tailleGrille);
            posY = getRandomInt(0, this.tailleGrille);
            if (this.grille[posX][posY] instanceof Nombre) {
                this.grille[posX][posY] = new Mine;
                counter--;
            }
        }

        for (var x = 0; x < this.tailleGrille; x++) {
            for (var y = 0; y < this.tailleGrille; y++) {
                if (this.grille[x][y] instanceof Nombre) {
                    this.grille[x][y].value = this.checkMineArround(x, y, 0, this.tailleGrille);
                } else {

                }
            }
        }
    }

    //À factoriser !!!
    checkMineArround(posX, posY, valeurMin, valeurMax) {
        var mines = 0;
        if (posX == valeurMin) {
            if (posY == valeurMin) {
                if (this.grille[posX][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY] instanceof Mine) {
                    mines++;
                }
            } else if (posY > valeurMin && posY < valeurMax - 1) {
                if (this.grille[posX][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY - 1] instanceof Mine) {
                    mines++;
                }
            } else if (posY == valeurMax - 1) {
                if (this.grille[posX + 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY - 1] instanceof Mine) {
                    mines++;
                }
            }
        } else if (posX > valeurMin && posX < valeurMax - 1) {
            if (posY == valeurMin) {
                if (this.grille[posX - 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY] instanceof Mine) {
                    mines++;
                }
            } else if (posY > valeurMin && posY < valeurMax - 1) {
                if (this.grille[posX - 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY - 1] instanceof Mine) {
                    mines++;
                }
            } else if (posY == valeurMax - 1) {
                if (this.grille[posX + 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX + 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY] instanceof Mine) {
                    mines++;
                }
            }
        } else if (posX == valeurMax - 1) {
            if (posY == valeurMin) {
                if (this.grille[posX - 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY + 1] instanceof Mine) {
                    mines++;
                }
            } else if (posY > valeurMin && posY < valeurMax - 1) {
                if (this.grille[posX][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY + 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX][posY + 1] instanceof Mine) {
                    mines++;
                }
            } else if (posY == valeurMax - 1) {
                if (this.grille[posX][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY - 1] instanceof Mine) {
                    mines++;
                }
                if (this.grille[posX - 1][posY] instanceof Mine) {
                    mines++;
                }
            }
        }
        return mines;
    };

    display() {
        var toDisplay = "";
        for (var y = 0; y < this.tailleGrille; y++) {
            for (var x = 0; x < this.tailleGrille; x++) {
                if (this.grille[x][y].estDecouvert == true) {
                    if (this.grille[x][y] instanceof Mine) {
                        toDisplay += ` M`;
                    } else if (this.grille[x][y] instanceof Nombre) {
                        toDisplay += ` ${this.grille[x][y].value}`;
                    }
                } else {
                    if (this.grille[x][y].estFlag == true) {
                        toDisplay += ` F`;
                    } else {
                        toDisplay += ` #`;
                    }
                }
            }
            if ((x >= this.tailleGrille - 1) && (y < this.tailleGrille)) {
                x = 0;
                toDisplay += `\n`;
            }
        }
        console.log(toDisplay);
    };

    reveal() {
        for (var x = 0; x < this.tailleGrille; x++) {
            for (var y = 0; y < this.tailleGrille; y++) {
                this.grille[x][y].estFlag = false;
                this.grille[x][y].estDecouvert = true;
            }
        }
    }

    click(x, y) {
        var perdu = false;
        if (this.grille[x][y].estFlag == true) {
            console.log("Vous ne pouvez pas cliquer sur une cellule marqué. Veuillez la démarquer avant de cliquer.");
            scanf('%s');
            return 0;
        } else if (this.grille[x][y].estDecouvert == true) {
            console.log("Cette cellule est déjà découverte.");
            scanf('%s');
            return 0;
        } else {
            if (this.grille[x][y] instanceof Mine) {
                perdu = true;
                return perdu;
            } else if (this.grille[x][y] instanceof Nombre) {
                this.decouvrir(x, y);
            }
        }
    }

    //Récursif ne dévoile pas les angles de certains 0 à fix !
    decouvrir(x, y) {
        this.grille[x][y].estDecouvert = true;
        if (this.grille[x][y].value == 0) {
            if ((x > 0) && (y > 0) && (this.grille[x - 1][y - 1].estDecouvert == true)) {
                this.decouvrir(x - 1, y - 1);
            }
            if ((x > 0) && (this.grille[x - 1][y].estDecouvert == false)) {
                this.decouvrir(x - 1, y);
            }
            if ((x > 0) && (y < this.tailleGrille - 1) && (this.grille[x][y].estDecouvert == false)) {
                this.decouvrir(x - 1, y);
            }
            if ((y < this.tailleGrille - 1) && (this.grille[x][y + 1].estDecouvert == false)) {
                this.decouvrir(x, y + 1);
            }
            if ((x < this.tailleGrille - 1) && (y < this.tailleGrille - 1) && (this.grille[x + 1][y + 1].estDecouvert == false)) {
                this.decouvrir(x + 1, y);
            }
            if ((x < this.tailleGrille - 1) && (this.grille[x + 1][y].estDecouvert == false)) {
                this.decouvrir(x + 1, y);
            }
            if ((x < this.tailleGrille - 1) && (y > 0) && (this.grille[x + 1][y - 1].estDecouvert == false)) {
                this.decouvrir(x + 1, y - 1);
            }
            if ((y > 0) && (this.grille[x][y - 1].estDecouvert == false)) {
                this.decouvrir(x, y - 1);
            }
        }
        return 0;
    }

    flag(x, y) {
        if (this.grille[x][y].estDecouvert == true) {
            console.log("Vous ne pouvez pas marquer une cellule découverte.");
        } else {
            if (this.grille[x][y].estFlag == true) {
                console.log("Cette cellule est déjà marqué. Voulez vous la démarquer ? (1 : oui; 2 : non)");
                while (!((answer == 1) || (answer == 2))) {
                    var answer = scanf('%d');
                }
                if (answer == 1) {
                    this.grille[x][y].estFlag = false;
                }
            } else {
                console.log("Voulez-vous marquer cette cellule ? (1 : oui; 2 : non)");
                while (!((answer == 1) || (answer == 2))) {
                    var answer = scanf('%d');
                }
                if (answer == 1) {
                    this.grille[x][y].estFlag = true;
                }
            }
        }
    };
}


function play() {
    console.log("Jeu du démineur (par WadeFade)");
    console.log("Voulez-vous jouer ? (1 : oui; 2 : non)");
    var jouer = scanf('%d');
    if (jouer == 1) {
        console.clear();
        console.log("Jeu du démineur (par WadeFade)");
        console.log("Veuillez choisir la taille de la grille (min : 5; max : 15)");
        var tailleChoisi = 0;
        while (!((tailleChoisi >= 5) && (tailleChoisi <= 15))) {
            console.clear();
            console.log("Jeu du démineur (par WadeFade)");
            console.log("Veuillez choisir la taille de la grille (min : 5; max : 15)");
            var tailleChoisi = scanf('%d');
        }
        var demineur = new Demineur(tailleChoisi);
        var perdu = false;
        while (jouer == 1 && perdu == false) {
            console.clear();
            console.log("Jeu du démineur (par WadeFade)");
            console.log("À vous de jouer ! =)");
            console.log(`Nombre de mines : ${demineur.nombreMines}`);
            demineur.display();
            console.log('Que voulez-vous faire ? (1 : cliquer; 2 : marquer)');
            var choixAction = 0;
            while (!((choixAction == 1) || (choixAction == 2))) {
                choixAction = scanf('%d');
            }
            if (choixAction == 1) {
                console.log("Choisissez la cellule à cliquer : ");
                console.log(`X (de 0 à ${demineur.tailleGrille - 1}) = `);
                var abscisse = demineur.tailleGrille + 1;
                while (!((abscisse >= 0) && (abscisse < demineur.tailleGrille))) {
                    abscisse = scanf('%d');
                }
                console.log(`Y (de 0 à ${demineur.tailleGrille - 1}) = `);
                var ordonnee = demineur.tailleGrille + 1;
                while (!((ordonnee >= 0) && (ordonnee < demineur.tailleGrille))) {
                    ordonnee = scanf('%d');
                }
                let test = demineur.click(abscisse, ordonnee);
                if (test == true) {
                    perdu = true;
                }
            } else if (choixAction == 2) {
                console.log("Choisissez la cellule à marquer : ");
                console.log(`X (de 0 à ${demineur.tailleGrille - 1}) = `);
                var abscisse = demineur.tailleGrille + 1;
                while (!((abscisse >= 0) && (abscisse < demineur.tailleGrille))) {
                    abscisse = scanf('%d');
                }
                console.log(`Y (de 0 à ${demineur.tailleGrille - 1}) = `);
                var ordonnee = demineur.tailleGrille + 1;
                while (!((ordonnee >= 0) && (ordonnee < demineur.tailleGrille))) {
                    ordonnee = scanf('%d');
                }
                demineur.flag(abscisse, ordonnee);
            }
        }
        if (perdu == true) {
            console.clear();
            console.log("Jeu du démineur (par WadeFade)");
            console.log(`Nombre de mines : ${demineur.nombreMines}`);
            demineur.reveal();
            demineur.display();
            console.log("Vous avez perdu :(");
            scanf('%s');
            console.clear();
            return 0;
        }
    } else if (jouer == 2) {
        console.clear();
        console.log("À bientôt ! =)");
        scanf('%s');
        console.clear();
        return 0;
    }
}

play();
