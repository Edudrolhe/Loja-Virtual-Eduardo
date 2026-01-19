
# Loja Next.js – pronta para deploy na Vercel

Este projeto foi gerado automaticamente. Ele usa **Next.js (App Router)**, **React Context** para o carrinho, **CSS puro (sem Tailwind)** e está **pronto para deploy na Vercel**.

## Requisitos
- Node.js >= 18.17
- npm ou yarn

## Rodar localmente
```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## Build de produção
```bash
npm run build
npm start
```

## Deploy na Vercel (2 opções)
### 1) Via GitHub
1. Suba este projeto para um repositório.
2. No painel da Vercel, clique em **New Project** e importe o repo.
3. Framework será detectado como **Next.js** – aceite as defaults e clique em **Deploy**.

### 2) Via Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

## Estrutura
```
src/
  app/
    layout.jsx
    page.jsx
    carrinho/page.jsx
    produto/[id]/page.jsx
  components/
    Header.jsx
    ProdutoCard.jsx
    GridProdutos.jsx
    Botao.jsx
    CarrinhoResumo.jsx
  context/
    CarrinhoContext.jsx
  data/
    produtos.js
  styles/
    globals.css
    catalogo.css
    produto.css
    carrinho.css
  utils/
    moeda.js
public/
  images/ (placeholders gerados)
```
