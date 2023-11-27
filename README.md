# Traductor de Emojis

Este repositorio contiene un traductor de emojis implementado en JavaScript, HTML y CSS. A continuación, se proporciona una descripción más detallada de cada sección y los elementos clave en cada archivo.

- [HTML](#html)
- [CSS](#css)
- [JavaScript - Diccionario](#javascript---diccionario)
- [JavaScript - Traductor de Emojis](#javascript---traductor-de-emojis)
- [Resumen](#resumen)
- [Justificación de Expresiones Regulares](#justificación-de-expresiones-regulares)
- [Autores](#autores)

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Traductor</title>
    <link rel="stylesheet" href="./style.css">
    <script type="module" src="./script.mjs" defer></script>
</head>
<body>
<!-- Contenido del HTML -->
</body>
</html>

```markdown
## Descripción:

### HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Traductor</title>
    <link rel="stylesheet" href="./style.css">
    <script type="module" src="./script.mjs" defer></script>
</head>
<body>
<!-- Contenido del HTML -->
</body>
</html>
```

- **Descripción:**
  - `<head>`: Contiene la configuración del documento, incluyendo la declaración del tipo de documento, el juego de caracteres y referencias al archivo CSS y JavaScript.
  - `<body>`: Contiene el cuerpo del documento, donde se ubicarán los elementos visibles de la interfaz de usuario.

### CSS:

```css
/* Contenido del CSS */
```

- **Descripción:**
  - **Estilos Globales:** Define estilos que se aplicarán a todos los elementos del documento, como la tipografía y el fondo.
  - **Estilos Específicos:** Define estilos para elementos específicos, como botones, formularios y títulos.
  - **Estilos Responsivos:** Contiene reglas de estilo para adaptar la apariencia en pantallas más pequeñas.

### JavaScript - Diccionario:

```javascript
// Contenido del diccionario (dic.mjs)

let dic = new Set();

function quitarTildes(cadena) {
    // Función para quitar tildes de una cadena
}

async function initialize(directoryHandle) {
    // Inicializa el diccionario a partir de un directorio
}

async function validate_word(word) {
    // Valida si una palabra está en el diccionario
}

export { initialize, validate_word, dic };
```

- **Descripción:**
  - `dic`: Un conjunto que almacenará las palabras del diccionario.
  - `quitarTildes`: Función para eliminar tildes de una cadena.
  - `initialize`: Inicializa el diccionario a partir de un directorio de palabras.
  - `validate_word`: Valida si una palabra está en el diccionario.

### JavaScript - Traductor de Emojis:

```javascript
// Contenido del traductor de emojis (script.mjs)

import { validate_word, initialize, dic } from "./dic.mjs";

const dict_emojis = {
    // Diccionario de emojis y palabras clave
};

// Funciones para manipular texto y emojis
const pattern = /* Expresión regular generada a partir del diccionario */;
const replace_emoji = (string) => { /* Reemplaza palabras clave por emojis */ };
const delete_emoji = (string) => { /* Elimina emojis del texto */ };
const emoji_count = (string) => { /* Cuenta emojis en el texto */ };
async function word_count(string) { /* Cuenta palabras en el texto */ }

// Funciones para interactuar con la interfaz de usuario
const btnTraducir = /* Referencia al botón "Traducir" */;
const btnCerrarResultado = /* Referencia al botón "Cerrar Resultado" */;
const btnCerrarError = /* Referencia al botón "Cerrar Error" */;
const btnCargarArchivo = /* Referencia al botón "Cargar Archivo" */;

// Referencias a elementos en la interfaz de usuario
const dialog = /* Referencia al cuadro de diálogo de resultados */;
const errorDialog = /* Referencia al cuadro de diálogo de error */;
const textoTraducir = /* Referencia al campo de texto para traducir */;
const textoResultado = /* Referencia al elemento para mostrar el resultado */;
const palabrasEncontradas = /* Referencia al elemento para mostrar palabras encontradas */;
const emojisTraducidos = /* Referencia al elemento para mostrar emojis encontrados */;

// Botones
btnTraducir.addEventListener("click", function () { /* Manejador de evento al hacer clic en "Traducir" */ });
btnCerrarResultado.addEventListener("click", function () { /* Manejador de evento al hacer clic en "Cerrar Resultado" */ });
btnCerrarError.addEventListener("click", function () { /* Manejador de evento al hacer clic en "Cerrar Error" */ });
btnCargarArchivo.addEventListener("click", async function () { /* Manejador de evento al hacer clic en "Cargar Archivo" */ });

// Función principal para traducir texto
async function traducir() { /* Traduce el texto y actualiza la interfaz de usuario */ }

// Función para limpiar la interfaz de usuario
const clean = () => { /* Restablece los campos y resultados */ };
```

- **Descripción:**
  - `dict_emojis`: Diccionario que asocia palabras clave con emojis.
  - Funciones para manipular texto y emojis: `replace_emoji`, `delete_emoji`, `emoji_count`, `word_count`.
  - Manejadores de eventos para botones y referencias a elementos de la interfaz de usuario.
  - `traducir`: Función principal que traduce el texto y actualiza la interfaz de usuario.
  - `clean`: Función para restablecer los campos y resultados en la interfaz de usuario.

## Resumen

El Traductor de Emojis es una aplicación web que permite traducir texto convencional a emojis utilizando un diccionario personalizable. La interfaz de usuario sencilla permite a los usuarios ingresar texto, cargar un diccionario personalizado y ver los resultados de la traducción, incluyendo la cantidad de palabras y emojis encontrados.

## Justificación de Expresiones Regulares

La elección de expresiones regulares para la creación del diccionario se basa en su capacidad para manejar patrones complejos de manera eficiente. En el contexto de este proyecto, las expresiones regulares facilitan la identificación de palabras clave en el texto y la asociación correspondiente con emojis. La flexibilidad y la potencia de las expresiones regulares permiten manejar diversas variaciones de palabras clave, incluyendo aquellas con y sin tildes, plurales y conjugaciones verbales.

## Autores

- Maximiliano Bustamante
- Valeria Hornung
