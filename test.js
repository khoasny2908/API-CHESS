const { Chess } = require("chess.js");
const chess = new Chess('2bqkbnr/2pppp2/6p1/7p/N3P3/P4N2/1rPP1PPP/R2QKB1R b KQk - 1 11');

// Di chuyển quân tốt từ b2 đến b1 và phong thành quân hậu
//chess.move({ from: 'b2', to: 'b1', promotion: 'q' });

// In ra loại quân ở ô b1
console.log(chess.turn())
console.log(chess.get('b2').type);