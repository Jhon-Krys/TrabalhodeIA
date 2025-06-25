const Cube = require('cubejs');
const BFS = require('./BFS.js');
const IDDFS = require('./IDDFS.js');
const AEstrela = require('./AE.js')

const { performance } = require('perf_hooks');


Cube.initSolver();

const cube = new Cube;
// const cube = Cube.random();

cube.move("L2 L' R B' F F2 U'");


const estadoInicial = cube.asString();

console.log(estadoInicial);

const tBFS0 = performance.now();
const solucao = BFS(estadoInicial);
const tBFS1 = performance.now();

console.log("Solução encontrada:", solucao);
console.log(`Tempo de execução do BFS: ${(tBFS1 - tBFS0).toFixed(2)} ms`);

const tDFS0 = performance.now();
const solucao2 = IDDFS(estadoInicial, 7);
const tDFS1 = performance.now();

console.log("Solução encontrada:", solucao2);
console.log(`Tempo de execução do IDDFS: ${(tDFS1 - tDFS0).toFixed(2)} ms`);

const tAE0 = performance.now();
const solucao3 = AEstrela(estadoInicial);
const tAE1 = performance.now();

console.log("Solução encontrada:", solucao3);
console.log(`Tempo de execução do A*: ${(tAE1 - tAE0).toFixed(2)} ms`);


