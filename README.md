# Portfólio Joabson Nogueira — React

Portfólio profissional desenvolvido com React, Vite, Framer Motion e Lucide React.

## Recursos

- Interface moderna e responsiva
- Tema claro e escuro
- Menu mobile
- Seções de apresentação, sobre, experiência, habilidades, projetos e contato
- Filtros de projetos
- Animações suaves
- Formulário que abre o aplicativo de e-mail
- Configuração pronta para Netlify
- Redirecionamento SPA incluído

## Instalação

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:5173
```

## Gerar versão de produção

```bash
npm run build
```

A pasta final será:

```text
dist
```

## Publicar no Netlify

1. Envie o projeto para o GitHub.
2. No Netlify, clique em **Add new site**.
3. Escolha **Import an existing project**.
4. Selecione o repositório.
5. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Publique.

O arquivo `netlify.toml` já possui essa configuração.

## Onde alterar informações

### Projetos

Arquivo:

```text
src/data/projetos.js
```

Troque os links `#` pelos links reais de demonstração e GitHub.

### Habilidades

Arquivo:

```text
src/data/habilidades.js
```

### Experiência

Arquivo:

```text
src/data/experiencias.js
```

### E-mail

O e-mail está definido em:

```text
src/components/Contato.jsx
src/components/Inicio.jsx
```

### LinkedIn e GitHub

Atualize os links em:

```text
src/components/Inicio.jsx
src/components/Contato.jsx
```

## Currículo

Coloque o arquivo na pasta:

```text
public/curriculo-joabson.pdf
```

Depois você poderá criar um botão com:

```jsx
<a href="/curriculo-joabson.pdf" download>
  Baixar currículo
</a>
```
"# portifolio-react" 
