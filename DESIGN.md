---
name: Ezequiel Reyes Portfolio
description: Clean engineering aesthetic design system for full-stack developer portfolio
colors:
  primary: "#2563eb"
  primary-hover: "#3b82f6"
  neutral-bg: "#0a0f1d"
  surface-card: "#111827"
  surface-sub: "#182234"
  surface-hover: "#151e30"
  border-edge: "#1e293b"
  border-hover: "#3b82f6"
  text-main: "#f8fafc"
  text-muted: "#94a3b8"
  text-subtle: "#64748b"
  success: "#10b981"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Fira Code', monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  "2xl": "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  chip-tech:
    backgroundColor: "{colors.surface-sub}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.sm}"
    padding: "5px 10px"
  card-container:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.2xl}"
    padding: "24px"
---

# Design System: Ezequiel Reyes Portfolio

## Overview

**Creative North Star: "The Precision Engineering Console"**

El sistema visual del portafolio se concibe como una consola técnica de ingeniería de alta precisión. Cada decisión visual proyecta autoridad, fiabilidad operativa y sobriedad arquitectónica. El entorno visual toma como referencia la elegancia austera de herramientas de desarrollo líderes como Linear, Supabase y Stripe, sustituyendo las estéticas estridentes por superficies oscuras equilibradas, una micro-retícula arquitectónica y un contraste tipográfico nítido.

La experiencia prioriza la rápida asimilación de competencias técnicas y proyectos reales por parte de reclutadores y líderes de ingeniería en ventanas de decisión de 30 a 60 segundos. La interfaz elimina adornos superficiales para que la verdad del producto (código limpio, SLAs < 24h, arquitectura .NET/Angular y bases de datos afinadas) sea el protagonista inmediato.

**Key Characteristics:**
- Superficies sólidas en pizarra profunda con bordes estructurales de 1px (`#1e293b`).
- Regla 60-30-10 estricta con acento azul cobalto dosificado exclusivamente en llamadas a la acción primarias e indicadores activos.
- Micro-retícula arquitectónica de fondo (`.bg-grid-ambient`) atenuada con máscara radial elíptica.
- Tipografía dual rigurosa: `Plus Jakarta Sans` para lectura fluida y `Fira Code` con `font-variant-numeric: tabular-nums` para exactitud métrica.

## Colors

La paleta cromática se basa en tonos neutros pizarra profundos con un acento tecnológico azul cobalto preciso y un acento funcional verde esmeralda para disponibilidad y comunicación directa.

### Primary
- **Cobalt Core Tech** (`#2563eb` / `#3b82f6`): Acento de alta visibilidad reservado para botones de acción primarios (CTAs), enlaces activos en navegación, bordes de enfoque y badges prioritarios.

### Secondary
- **Functional Emerald** (`#10b981` / `#34d399`): Indicador de estado activo (disponibilidad inmediata para contratación) y acceso al canal de WhatsApp directo.

### Neutral
- **Deep Obsidian Slate** (`#0a0f1d` / Light: `#f8fafc`): Fondo principal de lectura que evita el negro puro `#000000` para mitigar la fatiga visual.
- **Steel Slate** (`#111827` / Light: `#ffffff`): Superficie principal para tarjetas, contenedores estructurados y barras fijas.
- **Carbon Sub-Surface** (`#182234` / Light: `#f1f5f9`): Superficie secundaria para paneles anidados, chips tecnológicos y cajas de datos.
- **Structural Border** (`#1e293b` / Light: `#e2e8f0`): Delimitación geométrica nítida de componentes con ratio de contraste accesible.
- **Slate Text Main** (`#f8fafc` / Light: `#0f172a`): Texto primario de alto contraste.
- **Slate Text Muted** (`#94a3b8` / Light: `#64748b`): Texto secundario para subtítulos, etiquetas y descripciones técnicas.

### Named Rules
**The Signal Rarity Rule.** El color de acento azul (`#2563eb`) se utiliza en ≤ 10% de la superficie visible en cualquier viewport. Su fuerza radica en su escasez: si todo resalta, nada es prioritario.

## Typography

**Display & Body Font:** Plus Jakarta Sans (fallback: system-ui, -apple-system, sans-serif)
**Label/Mono Font:** Fira Code (fallback: monospace)

**Character:** Rigorous Technical Dual. La calidez geométrica y humanista de Plus Jakarta Sans transmite claridad ejecutiva en títulos y narrativa, complementada por la exactitud milimétrica de Fira Code para métricas numéricas y fichas técnicas.

### Hierarchy
- **Display** (800 weight, `clamp(3rem, 6vw, 4.5rem)`, line-height 1.15, letter-spacing -0.03em): Título principal del Hero.
- **Headline** (800 weight, `clamp(2.25rem, 4vw, 2.75rem)`, line-height 1.15, letter-spacing -0.03em): Títulos principales de sección (`.section-title`).
- **Title** (700 weight, `1.25rem` a `1.5rem`, line-height 1.3, letter-spacing -0.02em): Encabezados de tarjetas de proyecto, experiencia laboral y bloques de perfil.
- **Body** (400-500 weight, `0.9375rem` a `1rem`, line-height 1.6): Párrafos de descripción técnica con `text-wrap: pretty` para evitar líneas huérfanas.
- **Label / Metric** (600-700 weight, `0.75rem` a `1.85rem`, monospace, tabular-nums): Contadores numéricos (`+3`, `< 24h`), fechas y badges de tecnología.

### Named Rules
**The Tabular Metric Rule.** Todo número, fecha o indicador estadístico debe renderizarse obligatoriamente con `font-variant-numeric: tabular-nums` o dentro de fuente monoespaciada para evitar saltos y desalineaciones de interfaz.

## Layout

El sistema espacial se rige matemáticamente por múltiplos de 4px y 8px (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `80px`). El contenedor central tiene un ancho máximo estricto de `1152px` (`max-w-6xl`) centrado con padding horizontal de `16px` en móvil y `24px` en pantallas de escritorio.

- **Espaciado de Secciones:** `py-20` (80px) con separadores sutiles de borde superior (`border-t border-edge`).
- **Grillas Asimétricas:** Composiciones funcionales divididas (ej. 7 columnas para biografía de impacto y 5 columnas para credenciales y disponibilidad) evitando las grillas genéricas repetitivas de 3 tarjetas idénticas.

## Elevation & Depth

La interfaz es predominantemente plana y táctil ("Restrained & Structural"). La profundidad no se genera con sombras difusas deslumbrantes ni halos de neón, sino mediante superposición de superficies tonales sólidas (`#111827` sobre `#0a0f1d`) y bordes geométricos precisos de 1px.

### Shadow Vocabulary
- **Shadow Card** (`box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.35), 0 2px 6px -1px rgba(0, 0, 0, 0.2)`): Elevación natural de reposo para tarjetas principales.
- **Shadow Hover** (`box-shadow: 0 10px 25px -4px rgba(0, 0, 0, 0.45), 0 4px 10px -2px rgba(0, 0, 0, 0.25)`): Respuesta táctil de elevación al interactuar.
- **Shadow Glow Subtle** (`box-shadow: 0 0 20px -5px rgba(59, 130, 246, 0.25)`): Destacado exclusivo en tarjeta de proyecto insignia ("Bola de Nieve").

### Named Rules
**The Flat-at-Rest Rule.** Los elementos interactivos reposan planos o con sombra neutra difusa mínima; la elevación y el resaltado de borde son exclusivamente una respuesta háptica a la acción del usuario (`:hover` o `:focus-visible`).

## Shapes

- **Escala de Radios:**
  - `sm` (`6px`): Chips tecnológicos (`.tech-chip`) y badges monoespaciados.
  - `md` (`8px`): Botones de acción rápida con icono (`.btn-icon`) y badges de sección.
  - `lg` (`10px`): Botones primarios y secundarios (`.btn-primary`, `.btn-secondary`).
  - `xl` (`14px`): Tarjetas de métricas estadísticas (`.stat-card`).
  - `2xl` (`16px`): Tarjetas contenedoras principales (`.card`).
  - `full` (`9999px`): Píldora de disponibilidad inmediata e indicadores de pulso.
- **Bordes:** Trazo uniforme de 1px (`#1e293b`), que se ilumina con suavidad a `#3b82f6` al enfocar o posar el cursor.

## Components

### Buttons
- **Shape:** Radio de 10px (`rounded-lg`).
- **Primary (`.btn-primary`):** Fondo azul cobalto `#2563eb`, texto blanco, tipografía semibold (14px), padding `12px 24px`. Elevación sutil de -1px en hover y feedback táctil `scale(0.98)` en active.
- **Secondary (`.btn-secondary`):** Fondo superficie `#111827`, borde de 1px `#1e293b`, texto principal, con hover hacia `#182234`.
- **Icon (`.btn-icon`):** Caja simétrica de `38px × 38px`, radio 8px, centrada para theme toggle y menú móvil.

### Chips (Tech Chips)
- **Style:** Fondo `#182234`, borde sutil `#1e293b`, tipografía `Fira Code` (12px, 500 weight), padding `5px 10px`.
- **Core Highlight (`.tech-chip-core`):** Acento azul sutil (8% opacidad) para tecnologías prioritarias (.NET, Angular, SQL Server).

### Cards
- **Corner Style:** Radio de 16px (`rounded-2xl`).
- **Background:** Sólido `#111827` con borde perimetral `#1e293b`.
- **Padding:** 24px a 32px (`p-6` a `p-8`).
- **Featured Card (`.card-featured`):** Borde perimetral azul con glow sutil en hover para el proyecto estrella.

### Navigation
- **Header:** Barra flotante fija con `backdrop-filter: blur(12px)`, fondo `--bg-nav`, contenedor de enlaces con `scroll-target-group: auto` y anclas sincronizadas con `:target-current`.
- **Mobile Drawer:** Panel retráctil con animación suave y cierre automático en clic externo o tecla `Escape`.

## Do's and Don'ts

### Do:
- **Do** reservar el color de acento azul (`#2563eb`) estrictamente para llamadas a la acción, enlaces activos e indicadores de estado clave.
- **Do** usar `tabular-nums` en toda métrica, fecha, temporizador o cifra numérica en tablas y dashboards.
- **Do** garantizar en todo momento un contraste mínimo conforme al estándar WCAG AA (ratio mínimo de 4.5:1 para texto normal).
- **Do** implementar visualmente los 4 estados en todo elemento interactivo (Hover, Focus-visible, Active, Disabled).
- **Do** utilizar iconografía vectorial SVG profesional (Phosphor Icons) con tamaños consistentes (16-24px).

### Don't:
- **Don't** utilizar degradados repetitivos neón morado/cian genéricos de IA como fondo o bordes iluminados.
- **Don't** abusar del efecto *glassmorphism* con desenfoques excesivos que degraden la legibilidad o ralenticen el renderizado en móviles.
- **Don't** emplear emojis como sustitutos de iconos de interfaz en botones o tarjetas.
- **Don't** construir grillas simétricas repetitivas de 3 tarjetas idénticas en todas las secciones; variar la composición según la naturaleza del contenido.
- **Don't** utilizar frases de relleno vacías de marketing ("potencia tu negocio"); comunicar hechos técnicos precisos y comprobables.
