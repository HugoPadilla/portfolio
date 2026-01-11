---
trigger: always_on
---

# Design System: Hugo Javier Padilla Cavadia (Hugo.DS)

**Versión:** 1.0
**Filosofía:** Minimalismo, Seguridad, Claridad.
**Tech Stack:** Tailwind CSS, HTML5.

## 1. Paleta de Colores (Theme Tokens)

El sistema utiliza un tema oscuro de alto contraste con acentos dorados.

| Nombre Token      | Valor Hex | Uso Principal                   |
|-------------------|-----------|---------------------------------|
| `primary`         | #FFC107   | Acentos, CTAs, Oro              |
| `primary-hover`   | #e0a800   | Estados hover                   |
| `background-dark` | #1A1A1A   | Fondo principal (Deep Charcoal) |
| `surface-dark`    | #252525   | Secciones secundarias           |
| `surface-card`    | #2A2A2A   | Tarjetas, contenedores          |
| `text-dark`       | #FFFFFF   | Títulos, Texto alto contraste   |
| `muted-dark`      | #9CA3AF   | Subtítulos, textos secundarios  |
| `border-dark`     | #333333   | Líneas divisorias, bordes       |

## 2. Tipografía

* **Display (Títulos):** `Poppins` (Sans-serif).
    * Pesos: Semi-Bold (600), Bold (700).
    * H1: 60px (5xl/6xl) - Bold.
    * H2: 36px (3xl/4xl) - Semi-Bold.
* **Body (Cuerpo):** `Inter` (Sans-serif).
    * Pesos: Regular (400), Medium (500).
    * Body: 18px - Regular.
    * Caption/Label: 14px - Medium.

## 3. Componentes UI (Reglas de Construcción)

### Botones

* **Primario:** Fondo `primary`, texto negro, esquinas `rounded-lg`, sombra `shadow-lg`.
* **Secundario (Outline):** Fondo transparente, borde gris, texto blanco, hover `bg-white/5`.

### Tarjetas (Cards)

* Estilo "Glass/Dark": Fondo `surface-card`, borde `border-dark`, esquinas `rounded-2xl`.
* Comportamiento: Al hacer hover, el borde puede cambiar a `primary/50` y puede haber un brillo sutil.

### Inputs (Formularios)

* Fondo `#151515`, borde `border-dark`, texto blanco.
* Focus: Ring de color `primary`.

## 4. Iconografía y Espaciado

* **Iconos:** Google Material Symbols (Outlined). Estilo fino y técnico.
* **Grid:** Contenedor máximo `max-w-7xl` (1280px). 12 Columnas.
* **Espaciado:** Separación de secciones `py-24` (96px).