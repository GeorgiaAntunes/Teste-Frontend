# Desafio Instivo - Teste Frontend

## 📌 Descrição do Projeto
Este projeto é um desafio de frontend que consiste na criação de um formulário de endereço que permite buscar dados de um CEP, preenchendo automaticamente os campos correspondentes, e salvando os dados localmente em um arquivo JSON.

## 🚀 Tecnologias Utilizadas
- **Next.js** - Framework para React
- **TypeScript** - Tipagem estática
- **Styled Components** - Estilização de componentes com temas dinâmicos
- **Material-UI (MUI)** - Biblioteca de componentes UI
- **Jest & Testing Library** - Testes unitários
- **Cypress** - Testes end-to-end

## 📂 Estrutura do Projeto
```
/src
 |--/app
 |   |--/components    # Componentes reutilizáveis
 |   |--/pages         # Páginas do projeto
 |   |--/constants     # Constantes
 |   |--/schemas       # Schemas
 |   |--/utils         # Utils
 |   |--/services      # Serviços de API (CEP, Endereços)
 |   |--/viewmodels    # Lógica do formulário
 |   |--/theme         # Definição de temas e estilos globais
 |--/data              # Armazena os endereços salvos em JSON
 |--/tests             # Testes unitários
```

## 📜 Funcionalidades
- Buscar endereço pelo CEP via API externa
- Preenchimento automático dos campos
- Validação de dados antes do envio
- Armazenamento local dos endereços em um arquivo JSON
- Testes unitários e end-to-end

## ⚙️ Como Executar o Projeto
### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/desafio-instivo.git
cd desafio-instivo
```

### 2️⃣ Instalar dependências
```bash
yarn install # ou npm install
```

### 3️⃣ Rodar o projeto em ambiente de desenvolvimento
```bash
yarn dev # ou npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 4️⃣ Rodar os testes
#### 🧪 Testes unitários
```bash
yarn test # ou npm run test
```

## 📌 API de CEP
O projeto consome uma API externa para buscar endereços.
Exemplo de resposta:
```json
{
  "cep": "91150-400",
  "logradouro": "Avenida Ecoville",
  "bairro": "Sarandi",
  "cidade": "Porto Alegre",
  "estado": "RS"
}
```


