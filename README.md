# MasterClean 🧹

Landing page profissional para serviços de higienização e limpeza, desenvolvida com **React** + **Vite**.

## 📦 Stack Técnico

- **React 19.2** - Framework UI
- **Vite 8.0** - Build tool (dev server rápido)
- **Framer Motion** - Animações suaves
- **Phosphor Icons** - Ícones modernos
- **CSS Modular** - Estilo encapsulado por componente

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone https://github.com/usuario/masterclean.git
cd masterclean

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# A aplicação abrirá em http://localhost:5173
```

### Build para Produção

```bash
# Build otimizado
npm run build

# Preview do build
npm run preview

# Lint de código
npm lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/           # Componentes compartilhados (Navbar, Footer, etc)
│   ├── sections/         # Componentes de seções (Hero, Services, Reviews, etc)
│   └── ui/              # Componentes genéricos reutilizáveis (Button, Card)
├── hooks/               # Custom hooks (useWhatsApp, useScrollTo)
├── constants/           # Configurações e constantes (config.js)
├── types/               # Definições TypeScript
├── assets/              # Imagens e SVGs
├── App.jsx              # Componente raiz
├── main.jsx             # Entry point
├── index.css            # Estilos globais
└── App.css              # Estilos da aplicação
```

## 🎨 Componentes Principais

### Componentes de Seção
- **Hero** - Banner inicial com CTA
- **Services** - Catálogo de serviços
- **PriceEstimator** - Simulador de orçamento interativo
- **Reviews** - Carrossel de avaliações
- **ResultsCarousel** - Carrossel de antes/depois
- **FAQ** - Perguntas frequentes
- **ContactMap** - Formulário de contato
- **Diferenciais** - Diferenciais do negócio
- **About** - Sobre a empresa
- **NauticHighlight** - Destaque para serviço náutico

### Componentes UI Reutilizáveis
- **Button** - Botão com múltiplas variantes (primary, gold, secondary, outline)
- **Card** - Card container com diferentes estilos
- **Navbar** - Barra de navegação responsiva
- **Footer** - Rodapé com links e info de contato
- **ErrorBoundary** - Captura de erros

## 🎯 Funcionalidades

### ✅ Implementadas
- ✓ Design responsivo (mobile-first)
- ✓ Navegação suave entre seções
- ✓ Integração WhatsApp para orçamentos
- ✓ Simulador de preços interativo
- ✓ Carrosséis de fotos (antes/depois, avaliações)
- ✓ Animações com Framer Motion
- ✓ Acessibilidade (ARIA labels, semantic HTML)
- ✓ Performance otimizada (lazy loading, bundle compacto)
- ✓ Comentários em português

## 🔧 Configuração

### Variáveis de Ambiente

Arquivo `.env`:
```env
# WhatsApp (obrigatório)
VITE_WHATSAPP_NUMBER=5521992457714
VITE_WHATSAPP_MESSAGE=Olá! Gostaria de solicitar um orçamento grátis.

# Opcional
VITE_GA_ID=           # Google Analytics ID
VITE_API_URL=         # URL da API (se necessário)
```

## 🎨 Design Tokens

Definidos em `src/constants/config.js`:

```javascript
COLORS       // Paleta de cores
BREAKPOINTS  // Breakpoints responsivos
TRANSITIONS  // Transições de animação
SHADOWS      // Sombras do design system
BORDER_RADIUS // Raios de borda
NAV_SECTIONS  // IDs das seções
```

## 🪝 Custom Hooks

### `useWhatsApp()`
Facilita integração com WhatsApp:

```javascript
const { openChat, createMessage, whatsappLink } = useWhatsApp();

// Abrir chat
openChat('Mensagem personalizada');

// Criar mensagem formatada
const msg = createMessage({
  'Serviço': 'Limpeza de estofado',
  'Quantidade': 1,
});
```

### `useScrollTo()`
Scroll suave para seções:

```javascript
const { scrollTo } = useScrollTo();

scrollTo(event, 'price-estimator');
```

## 📊 Performance

- **Bundle Size**: 65.96 kB (gzipped)
- **Lazy Loading**: Componentes abaixo da dobra carregam sob demanda
- **CSS Modular**: Sem estilos globais desnecessários
- **Otimizações**: GPU acceleration, prefers-reduced-motion

## ♿ Acessibilidade

- ARIA labels em elementos interativos
- HTML semântico (nav, section, article)
- Contraste adequado de cores (WCAG AA)
- Suporte a navegação por teclado
- Focus indicators visíveis

## 📱 Breakpoints

```
xs:  320px
sm:  480px
md:  768px
lg:  1024px
xl:  1280px
xxl: 1440px
```

## 🚢 Deploy

### Vercel (Recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel
```

### Outras Plataformas

A build estática em `dist/` pode ser deployada em:
- GitHub Pages
- Netlify
- AWS S3 + CloudFront
- Qualquer servidor HTTP

## 📝 Licença

© 2026 MasterClean. Todos os direitos reservados.

## 👥 Contribuição

Para contribuições, favor seguir:
1. Criar branch (`git checkout -b feature/AmazingFeature`)
2. Commit das mudanças (`git commit -m 'Add AmazingFeature'`)
3. Push para branch (`git push origin feature/AmazingFeature`)
4. Abrir Pull Request

## 📞 Contato

- WhatsApp: [Clique aqui](https://wa.me/5521992457714)
- Email: contato@masterclean.com.br
- Site: https://master-clean-tawny.vercel.app

---

Desenvolvido com ❤️ usando React + Vite
