## Configurações de Dependências Básicas 1.0

#### package.json
Na pasta raiz execute:
`npm init -y`
Gerará arquivo com infomações das dependências da aplicação.

------------

#### Babel
Na pasta raiz execute:
`npm install --save-dev @babel/core @babel/cli @babel/preset-env`

Futuramente será preciso:
`npm install babel-loader -D`

Na raiz do projeto crie **.babelrc** com o seguinte código:


    {
        "presets": ["@babel/preset-env"]
    }

Acrescente ao **package.json**
```json
"dev" : "babel ./main.js -o bundle.js -w"
```
Para gerar o bundle.js execute:
`npm run dev`

------------

#### Webpack
No terminal, faça a instalação das dependências de desenvolvimento:
`npm install webpack webpack-cli --save-dev`

Na raiz crie o arquivo **webpack.config.js**
```javascript
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```

No **package.json** altere:
```json
-  "dev": "babel ./main.js -o bundle.js -w"
+ "dev": "webpack --mode=development -w"
```

E execute:
`npm run dev`

------------

#### Fim

**[Álesson de Jesus](https://github.com/alessondejesus "Álesson de Jesus")**