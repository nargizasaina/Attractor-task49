const createChessboard = () => {
let string = "";
    for (let i = 1; i < 8 + 1; i++) {
        for (let j = 1; j < 8 + 1; j++) {
            
            if (((i % 2 === 0) && (j % 2 === 0)) || ((i % 2 !== 0) && (j % 2 !== 0))) {
                string += '██';
            } else {
                string += '  ';
            }
        }
            string += '\n';
    }
    return string;
};

console.log(createChessboard());
