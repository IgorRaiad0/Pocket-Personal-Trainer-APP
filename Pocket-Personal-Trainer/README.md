# Pocket Personal Trainer APP

O Pocket Personal Trainer é um aplicativo móvel que gera rotinas de treino de musculação personalizadas para o usuário. Utilizando a API do Gemini, o aplicativo cria um plano de treino detalhado com base nas informações fornecidas pelo usuário, como nível de experiência, objetivo, dias de treino, local, equipamentos e tempo disponível.

## ✨ Funcionalidades

- **Geração de Treinos Personalizados:** Crie rotinas de treino sob medida para suas necessidades e objetivos.
- **Interface Simples e Intuitiva:** Um formulário fácil de preencher para coletar suas informações.
- **Visualização Clara do Treino:** O plano de treino é exibido de forma organizada e fácil de entender.
- **Flexibilidade:** Gere novos treinos sempre que quiser, ajustando os parâmetros conforme sua evolução.

## 🚀 Tecnologias Utilizadas

- **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Expo:** Plataforma para facilitar o desenvolvimento e a publicação de aplicativos React Native.
- **Google Gemini API:** Modelo de linguagem para a geração dos treinos.
- **Axios:** Cliente HTTP para fazer as requisições à API do Gemini.

## Screenshots
![image](https://github.com/user-attachments/assets/d3930a7c-679b-433b-99f3-395c69d8b40c)
![image](https://github.com/user-attachments/assets/883a39a1-894b-4b9c-b11d-0852f038400d)
![image](https://github.com/user-attachments/assets/361a3c5d-931c-442c-89ba-f0051134993b)

## ⚙️ Instalação e Uso

1. **Clone o repositório:**
   ```bash
   git clone 
   ```

2. **Instale as dependências:**
   ```bash
   cd Pocket-Personal-Trainer-APP
   npm install
   ```

3. **Configure a API Key:**
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a sua chave da API do Gemini no arquivo:
     ```
     EXPO_PUBLIC_GEMINI_API_KEY=SUA_API_KEY
     ```

4. **Inicie o aplicativo:**
   ```bash
   npm start
   ```

   Use o aplicativo Expo Go no seu celular para escanear o QR Code e rodar o app.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
