/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

const parks = [];
const streets = [];

function calcAverage (arr) {
    let total = 0;
    for (let i of arr) {
        total += i;
    }

    let average = total / arr.length;
    return  {
        total,
        average
    };
}


class TownItem
{
    constructor(name, wasBuilt)
    {
        this.name = name;
        this.wasBuilt = wasBuilt;
    }

    pushItem (el, arr) {
        arr.push(el);
    }
}

// PARKS

class Park extends TownItem {
    constructor(name, wasBuilt, numberOfTrees, square) {
        super(name, wasBuilt);
        this.numberOfTrees = numberOfTrees;
        this.square = square;
    }

    calcDensity () {
        let density = this.numberOfTrees / this.square;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    };

    calcAge () {
        let age = new Date().getFullYear() - this.wasBuilt;
        this.pushItem(age, parks);
    }

    ifThousand () {
        if (this.numberOfTrees > 1000) {
            console.log(`${this.name} has more than 1000 trees.`);
        }
    }
}

const OctoberPark = new Park ('October Park', 1968, 1396, 70);
const ShevchenkosPark = new Park ('Shevchenkos Park', 1830, 973, 16);
const ShillerPark = new Park ('Shiller Park', 1890, 738, 4);

console.log(`----PARKS REPORT----`);

OctoberPark.calcDensity();
ShevchenkosPark.calcDensity();
ShillerPark.calcDensity();

OctoberPark.calcAge();
ShevchenkosPark.calcAge();
ShillerPark.calcAge();

function calcParks () {
    const {average} = calcAverage(parks);
    console.log(`Our 3 parks have an average age of ${average} years.`);
}
calcParks();

OctoberPark.ifThousand();
ShevchenkosPark.ifThousand();
ShillerPark.ifThousand();

// STREETS

class Street extends TownItem {
    constructor(name, wasBuilt, length, size = 'normal') {
        super (name, wasBuilt);
        this.length = length;
        this.size = size;
    }

    showSize () {
        console.log(`${this.name}, built in ${this.wasBuilt}, is a ${this.size} street.`)
    }
}

const IndependenceBlvrd = new Street('Independence Boulevard', 2019, 1300);
const June28th = new Street('June 28th Street', 1994, 320, 'tiny');
const RusskaStr = new Street('Russka Street', 1988, 4650, 'huge');
const KobylanskaStr = new Street('Kobylanska Street', 1940, 720, 'small');

console.log(`----STREETS REPORT----`);

IndependenceBlvrd.pushItem(IndependenceBlvrd.length, streets);
June28th.pushItem(June28th.length, streets);
RusskaStr.pushItem(RusskaStr.length, streets);
KobylanskaStr.pushItem(KobylanskaStr.length, streets);

function calcStreets () {
    const {total, average} = calcAverage(streets);
    console.log(`Our 4 streets have a total length of ${total} km, with an average of ${average} km.`);
}
calcStreets();

IndependenceBlvrd.showSize();
June28th.showSize();
RusskaStr.showSize();
KobylanskaStr.showSize();