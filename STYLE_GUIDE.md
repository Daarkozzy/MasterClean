# 🎨 Guia de Estilos - MasterClean

## Design System

### Paleta de Cores

```
Cores Primárias:
  Azul Principal:    #0F59D4  (--brand-blue)
  Ouro Principal:    #E8A800  (--brand-gold)

Cinzas (Neutras):
  Branco:           #FFFFFF  (--white)
  Off-White:        #F8FAFF  (--off-white)
  Gray-50:          #F1F5FB
  Gray-100:         #E4ECF7
  Gray-200:         #C8D9EF
  Gray-400:         #8FA3C0
  Gray-600:         #4A6080
  Gray-800:         #1E3050
  Gray-900:         #0D1F38  (--gray-900, muito escuro)

Azuis (Escalas):
  Blue-500:         #1A6EF5
  Blue-600:         #0F59D4
  Blue-700:         #0A46B0 (hover)
```

### Tipografia

```
Fonte de Corpo: 'Inter' (sans-serif)
  Regular: 400
  Medium:  500
  Semi-bold: 600
  Bold:    700

Fonte de Headings: 'Outfit' (sans-serif)
  Light:   300
  Regular: 400
  Medium:  500
  Semi-bold: 600
  Bold:    700
  Extra-bold: 800
  Black:   900
```

### Tamanhos de Fonte

```
Heading 1 (h1):   3.5rem - 4rem  (56px - 64px)
Heading 2 (h2):   2.25rem - 2.5rem (36px - 40px)
Heading 3 (h3):   1.75rem - 2rem  (28px - 32px)
Heading 4 (h4):   1.5rem          (24px)
Body:             1rem            (16px)
Body Small:       0.95rem         (15px)
Caption:          0.875rem        (14px)
Label:            0.78rem - 0.85rem (12px - 13px)
```

### Espaçamento

```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 20px
2xl: 24px
3xl: 28px
4xl: 32px
5xl: 40px
6xl: 48px
```

### Raios de Borda

```
sm:   8px   (pequenos botões, badges)
md:   14px  (cards, inputs)
lg:   20px  (containers)
xl:   28px  (grande layouts)
pill: 999px (botões redondos)
```

### Sombras

```
xs:    0 1px 2px rgba(13, 31, 56, 0.05)
sm:    0 2px 8px rgba(13, 31, 56, 0.06)
md:    0 4px 16px rgba(13, 31, 56, 0.1)
lg:    0 8px 32px rgba(13, 31, 56, 0.15)
gold:  0 10px 20px -5px rgba(249, 184, 0, 0.4)
```

### Transições

```
fast:   all 0.18s cubic-bezier(0.4, 0, 0.2, 1)
normal: all 0.28s cubic-bezier(0.4, 0, 0.2, 1)
slow:   all 0.45s cubic-bezier(0.4, 0, 0.2, 1)
```

## Componentes

### Button

Variantes:
- `btn--primary` (Azul, background sólido)
- `btn--gold` (Ouro, para CTAs importantes)
- `btn--secondary` (Contorno azul)
- `btn--outline` (Transparente com borda)

Tamanhos:
- `btn--sm` (pequeno: 8px 16px)
- `btn--md` (médio: 12px 24px) - padrão
- `btn--lg` (grande: 14px 32px)

Exemplo de uso:
```jsx
<Button variant="primary" size="lg">
  Solicitar Orçamento
</Button>

<Button variant="gold" size="md">
  Entrar em contato
</Button>
```

### Card

Variantes:
- `card--default` (branco com borda leve e sombra suave)
- `card--elevated` (branco com sombra acentuada, lift on hover)
- `card--minimal` (branco com borda, sem sombra)

Exemplo de uso:
```jsx
<Card variant="default">
  Conteúdo aqui
</Card>
```

### Navbar

- Altura fixa: 80px
- Responsiva em 968px (hide desktop links, show hamburger)
- Scrolled state: background mais opaco + shadow
- Mobile drawer: slide-in do topo

### Footer

- Fundo escuro: #0D1F38
- Múltiplas colunas: Brand, Nav, Contact, Social
- Responsive: 1 col em mobile → 4 cols em desktop

## Padrões de Código

### CSS

```css
/* Comentário de seção */
.component {
  /* Propriedades de layout */
  display: flex;
  
  /* Propriedades visuais */
  background: var(--white);
  color: var(--text-primary);
  
  /* Transições */
  transition: var(--transition-fast);
}

.component:hover {
  /* Variações */
}

/* Responsive */
@media (max-width: 768px) {
  .component {
    /* Ajustes mobile */
  }
}
```

### React Component

```jsx
/**
 * Descrição breve do componente
 * @param {string} prop1 - Descrição do prop
 * @param {boolean} prop2 - Descrição do prop
 */
export default function Component({ prop1, prop2 }) {
  return (
    <div className="component">
      {/* JSX */}
    </div>
  );
}
```

## Breakpoints de Responsividade

```
xs:  320px  - Pequenos celulares
sm:  480px  - Celulares
md:  768px  - Tablets
lg:  1024px - Laptops pequenos
xl:  1280px - Desktops
xxl: 1440px - Desktops grandes
```

Uso em media queries:
```css
/* Mobile first */
.elemento {
  /* Estilos para mobile */
}

@media (min-width: 768px) {
  .elemento {
    /* Estilos para tablet+ */
  }
}

@media (max-width: 480px) {
  .elemento {
    /* Estilos específicos para mobile pequeno */
  }
}
```

## Acessibilidade

### Cores

- Sempre respeitar contraste WCAG AA (4.5:1 para texto normal)
- Não usar apenas cor para transmitir informação
- Considerar daltonismo (teste com ferramentas como WebAIM)

### Interatividade

- Botões devem ter mínimo 44x44px de hit area
- Foco visível em todos elementos interativos
- Usar `aria-label` para elementos sem texto
- Usar `role` para elementos não semânticos

### Exemplo:
```jsx
<button 
  className="btn--primary"
  aria-label="Solicitar orçamento"
>
  Solicitar
</button>
```

## Performance

- Usar CSS modular, não global
- Evitar inline styles (usar CSS classes)
- Lazy load imagens com `loading="lazy"`
- Respeitar `prefers-reduced-motion` para animações

## Naming Conventions

### Diretórios
```
components/      - Componentes React
assets/         - Imagens, fontes, SVGs
constants/      - Configurações
hooks/          - Custom hooks
types/          - TypeScript types
```

### Arquivos
```
NomeComponente.jsx     - Componente
NomeComponente.css     - Estilos
useCustomHook.js       - Custom hook
NomeConfig.js          - Configurações
```

### CSS Classes (BEM com modificadores)
```css
.block { }
.block__element { }
.block__element--modifier { }

Exemplo:
.btn { }
.btn--primary { }
.btn--large { }
.btn__icon { }
```

---

**Última atualização**: Junho 2026  
**Versão**: 1.0
