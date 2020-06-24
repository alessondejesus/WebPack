module.exports = {
    entry: './main.js', //arquivo principal
    output: { //saida dos codigos transpilados
        path: __dirname, //variavel global de diretorio raiz
        filename: './bundle.js' //arquivo de destino
    },
    module: {
        rules: [ //comportamento e manipulação
            {
                test: /\.js$/, //todo arquivo .js
                exclude: /node_modules/, //babel não rodará aqui
                use: {
                    loader: 'babel-loader' //o plugin será reponsavel pela regra acima
                }

            }
        ]
    }
}