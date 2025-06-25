function gerarEstados(Movimentos) {
    const moves = [
        "U", "U'", "U2",
        "D", "D'", "D2",
        "L", "L'", "L2",
        "R", "R'", "R2",
        "F", "F'", "F2",
        "B", "B'", "B2"
    ];

    const estados = [];

    for (const move of moves) {

        const novoEstado = Movimentos.trim() + " " + move;
        estados.push(novoEstado.trim());
    }

    return estados;
}

module.exports = { gerarEstados };
