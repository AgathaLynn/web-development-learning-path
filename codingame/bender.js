/*
My solution to the CodinGame puzzle "Bender - Episode 1".
Not the prettiest code ever, but it worked!
*/

// get input
const [L, C] = readline().split(' ').map(x => parseInt(x));
let rows = [];
for (let i = 0; i < L; i++) {
    rows.push(readline().split(''));
}


// state constructor
function State(rows) {

    // 'private' variables
    var board = rows;
    var bender = {
        position: find('@', rows)[0],
        pattern: 'SENW',
        breaker: false,
        direction: 'S'
    };
    var path = [];

    // snapshot of current state - to help check for loops
    function curr() {
        var snapshot = [
                board.map(x => x.join('')).join(''),
                bender.position.row,
                bender.position.col,
                bender.pattern,
                bender.breaker,
                bender.direction
            ]
        return JSON.stringify(snapshot);
    }

    // locate character on board
    function find(char, board) {
        var results = [];

        for (var row = 0; row < board.length; row++) {
            for (var col = 0; col < board[row].length; col++) {
                if (board[row][col] === char) {
                    results.push({row, col});
                }
            }
        }
        return results;
    }

    function done() {
        return board[bender.position.row][bender.position.col] === '$';
    }

    // look ahead to next square in current direction
    function peek() {
        const directions = {
            'S' : {row: 1, col: 0},
            'N' : {row: -1, col: 0},
            'E' : {row: 0, col: 1},
            'W' : {row: 0, col: -1}
        };

        let ahead = {
            row: bender.position.row + directions[bender.direction].row,
            col: bender.position.col + directions[bender.direction].col,
        }
        ahead.val = board[ahead.row][ahead.col];

        return ahead;
    }

    // update direction
    function turn() {
        var next = peek();
        var index = -1;

        while (!isClear(next) && index < 3) {
            bender.direction = bender.pattern[++index];
            next = peek();
        }

        return isClear(next) ? next : false;
    }

    // determine whether bender can proced forward (or else must turn
    function isClear(next) {
        return next.val !== '#' && (next.val !== 'X' || bender.breaker);
    }

    // teleport bender
    function teleport() {
        var ports = find('T', board);
        if (bender.position.row === ports[0].row && bender.position.col === ports[0].col) {
            bender.position.row = ports[1].row;
            bender.position.col = ports[1].col;
        }
        else {
            bender.position.row = ports[0].row;
            bender.position.col = ports[0].col;
        }
    }

    // update position
    function move() {
        var next = peek();
        if (!isClear(next)) {
            next = turn();
        }
        if (next) {
            bender.position.row = next.row;
            bender.position.col = next.col;
        }
        path.push(bender.direction);
        updateState(next);
    }

    // updates state based on current position
    function updateState(pos) {
        if ('NEWS'.indexOf(pos.val) > -1) {
            bender.direction = pos.val;
        }
        else if (pos.val === 'B') {
            bender.breaker = !bender.breaker;
        }
        else if (pos.val === 'X') {
            board[pos.row][pos.col] = ' ';
        }
        else if (pos.val === 'I') {
            bender.pattern = bender.pattern.split('').reverse().join('');
        }
        else if (pos.val === 'T') {
            teleport();
        }
    }

    // output of entire path traveled by bender
    function getPath() {
        var directions = {
            'S' : 'SOUTH',
            'N' : 'NORTH',
            'W' : 'WEST',
            'E' : 'EAST'
        }
        return path.map(x => directions[x]).join('\n');
    }

    // sanity checks
    printErr('board: \n' + board.map(x => x.join('')).join('\n'));
    printErr('bender is at row ' + bender.position.row + ', col ' + bender.position.col);
    printErr(peek().val);

    // return object
    return {
        move,
        curr,
        getPath,
        done
    };
}


// runs test
function run(rows) {
    var state = State(rows); // get our state object & controls
    var history = []; // keep track of changes to history

    // run test
    while (!state.done() && !isLoop()) {
        history.push(state.curr());
        state.move();
    }

    // when done, print result
    print(state.done() ? state.getPath() : 'LOOP');

    // helper function to check history for loop (repeated state)
    function isLoop() {
        var last = history[history.length - 1];
        for (var i = 0; i < history.length - 1; i++) {
            if (history[i] === last) {
                return true;
            }
        }
        return false;
    }
}

run(rows);
