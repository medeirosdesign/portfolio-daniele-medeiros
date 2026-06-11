# Portfólio — Daniele Medeiros

Portfólio profissional de Product Designer Sênior, construído com React + Vite.

---

## Como rodar o projeto localmente

**Pré-requisitos:** Node.js 18+ e pnpm instalados.

```bash
# 1. Instalar dependências (na raiz do repositório)
pnpm install

# 2. Rodar o servidor de desenvolvimento
pnpm --filter @workspace/portfolio run dev
```

O site ficará disponível em `http://localhost:<porta>` (a porta é exibida no terminal).

---

## Como gerar o build final

```bash
pnpm --filter @workspace/portfolio run build
```

Os arquivos de produção serão gerados na pasta `artifacts/portfolio/dist/`.

---

## Como publicar

### Vercel

1. Faça login em [vercel.com](https://vercel.com) e clique em **Add New Project**
2. Importe este repositório
3. Em **Root Directory**, aponte para `artifacts/portfolio`
4. Defina **Build Command**: `pnpm run build`
5. Defina **Output Directory**: `dist`
6. Clique em **Deploy**

### Netlify

1. Faça login em [netlify.com](https://netlify.com) e clique em **Add new site → Import an existing project**
2. Conecte o repositório
3. Em **Base directory**: `artifacts/portfolio`
4. Em **Build command**: `pnpm run build`
5. Em **Publish directory**: `artifacts/portfolio/dist`
6. Clique em **Deploy site**

---

## Onde ficam os textos

| Conteúdo | Arquivo |
|----------|---------|
| Página inicial | `src/pages/Home.tsx` |
| Página Sobre | `src/pages/About.tsx` |
| Página Experiência | `src/pages/Experience.tsx` |
| Página Contato | `src/pages/Contact.tsx` |
| Lista de projetos | `src/pages/AllProjects.tsx` |
| Case study — TOTVS | Produtos Financeiros | `src/pages/projects/Totvs.tsx` |
| Case study — Zendry Cripto | `src/pages/projects/ZendryCripto.tsx` |
| Case study — Zendry Plataforma Financeira | `src/pages/projects/ZendryPlataforma.tsx` |
| Case study — Sol Agora | `src/pages/projects/SolAgora.tsx` |
| Case study — B3 / SINACOR | `src/pages/projects/B3.tsx` |
| Rodapé | `src/components/layout/Footer.tsx` |
| Menu de navegação | `src/components/layout/Navbar.tsx` |

---

## Onde ficam as imagens

Todas as imagens ficam em `src/assets/`.

| Arquivo | Uso |
|---------|-----|
| `b3-hero.png` | Imagem principal do case B3 |
| `b3-1.jpg`, `b3-2.jpg`, `b3-3.jpg` | Galeria do case B3 |
| `sol-agora-hero.png` | Imagem principal do case Sol Agora |
| `sol-agora-1.png`, `sol-agora-2.jpg`, `sol-agora-3.jpg` | Galeria do case Sol Agora |
| `zendry-hero.png` | Imagem principal dos cases Zendry |
| `zendry-cripto-1.png`, `zendry-cripto-2.png`, `zendry-cripto-3.png` | Galeria do case Zendry Cripto |
| `zendry-plat-1.png`, `zendry-plat-2.png`, `zendry-plat-3.png` | Galeria do case Zendry Plataforma |
| `portal-ia-1.png`, `portal-ia-2.png`, `portal-ia-3.png` | Galeria do case TOTVS | Produtos Financeiros |
| `designer-portrait.png` | Foto na página Sobre |

### Como trocar uma imagem

1. Coloque o novo arquivo em `src/assets/` com o mesmo nome do arquivo original (ex: `b3-hero.png`)
2. O Vite substitui automaticamente — nenhuma alteração de código é necessária
3. Se quiser usar um nome diferente, atualize o `import` correspondente no arquivo `.tsx` do case

---

## Como configurar o envio de e-mail no formulário de contato

O formulário em `src/pages/Contact.tsx` está preparado para integração. Localize o comentário `CONFIGURAÇÃO DE ENVIO DE E-MAIL` no arquivo e substitua o `setTimeout` pela chamada à API escolhida.

Opções sem backend:
- **Formspree** (recomendado): crie uma conta em [formspree.io](https://formspree.io), obtenha seu ID de formulário e use `fetch("https://formspree.io/f/SEU_ID", ...)`
- **EmailJS**: crie uma conta em [emailjs.com](https://emailjs.com) e siga a documentação

---

## Como adicionar o currículo em PDF

1. Coloque o arquivo `daniele-medeiros-cv.pdf` na pasta `public/` (na raiz do projeto)
2. Em `src/pages/Experience.tsx`, altere o botão para:
   ```tsx
   href="/daniele-medeiros-cv.pdf"
   ```

---

## Stack utilizada

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| React | 18 | Interface |
| Vite | 5 | Build e servidor de desenvolvimento |
| TypeScript | 5 | Tipagem |
| Tailwind CSS | 4 | Estilos |
| Framer Motion | 11 | Animações |
| Wouter | 3 | Roteamento |
| shadcn/ui | — | Componentes base |
| Lucide React | — | Ícones |

---

## Estrutura de pastas

```
src/
├── assets/           # Imagens e arquivos estáticos
├── components/
│   ├── case-study/   # Componentes dos estudos de caso
│   │   ├── CaseStudyHero.tsx
│   │   ├── CaseStudySection.tsx
│   │   ├── CaseStudyNav.tsx
│   │   ├── Gallery.tsx
│   │   ├── Lightbox.tsx
│   │   └── BeforeAfter.tsx
│   ├── layout/       # Layout global (Navbar, Footer, Layout)
│   └── ui/           # Componentes base (shadcn/ui)
├── pages/
│   ├── projects/     # Páginas individuais dos cases
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── AllProjects.tsx
├── App.tsx           # Rotas
└── main.tsx          # Ponto de entrada
```
