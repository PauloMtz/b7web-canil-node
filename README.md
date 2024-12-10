# b7web-canil
Aplicação criada no curso de NodeJs do site B7Web

### Para iniciar uma aplicação NodeJs, criar uma pasta vazia, e criar o arquivo package.json, com o comando a seguir
`npm init`

### Instalações globais
`npm install -g nodemon typescript ts-node`

### Criar o arquivo de configuração do typescript
`tsc --init`

### Dentro do arquivo tsconfig.json, alterar o target para es6
`"target": "es6"`

### Ainda dentro do arquivo tsconfig.json, fazer as sequintes alterações
`rootDir: "./src", outDir: "./dist"`
`"moduleResolution": "node"`

### Instalar dependências
`npm install express mustache-express dotenv`

### Instalar types
`npm install --save-dev @types/express @types/mustache-express @types/node`

### Ao baixar a aplicação do GitHub, para instalar todas as configurações de package.json e tsconfig.json
`npm install`