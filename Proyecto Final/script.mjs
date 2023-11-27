import {validate_word, initialize, dic} from "./dic.mjs";

const dict_emojis = {
    "lol": "😂",
    ":'(": "😢",
    ":(": "😞",
    ":)": "😊",
    ":D": "😃",
    ":P": "😜",
    ":O": "😮",
    ":3": "😊",
    ":|": "😐",
    ":/": "😕",
    ":*": "😘",
    ":v": "😎",
    ":s": "😖",
    ":$": "😳",
    "xd": "🤣",
    "x)": "😆",
    "mono": "🐵",
    "perro": "🐶",
    "gato": "🐱",
    "cerdo": "🐷",
    "vaca": "🐮",
    "pollo": "🐔",
    "obeja": "🐑",
    "conejo": "🐰",
    "oso": "🐻",
    "panda": "🐼",
    "koala": "🐨",
    "tigre": "🐯",
    "leon": "🦁",
    "vaquero": "🤠"
};

// Function to escape special characters in a string
RegExp.escape = function (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function regex_generator(dict) {
    return new RegExp(Object.keys(dict_emojis).map(RegExp.escape).join("|"), "gi")
}

const pattern = regex_generator(dict_emojis)
const replace_emoji = (string) => {
    return string.replace(pattern, (match) => dict_emojis[match.toLowerCase()]);
};

const delete_emoji = (string) => {
    return string.replace(pattern, " ");
}

const emoji_count = (string) => {
    // Count how many emojis are in the string
    return (string.match(pattern) || []).length;
}

async function word_count(string) {
    // Ensure that the dictionary is initialized before validating words
    if (!dic.size) {
        return "inicialize un diccionario para contar palabras"
    }

    // Count how many words are in the string
    const words = delete_emoji(string).split(/\s+/);
    let count = 0;

    for (const word of words) {
        if (await validate_word(word)) {
            count++;
        }
    }
    return count;
}


// Botones
const btnTraducir = document.getElementById("btnTraduir");
const btnCerrarResultado = document.getElementById("btnCerrarResultado");
const btnCerrarError = document.getElementById("btnCerrarError");
const btnCargarArchivo = document.getElementById("btnCargarArchivo");

// Dialog
const dialog = document.getElementById("resultadoDialog");
const errorDialog = document.getElementById("errorDialog");

// Textos
const textoTraducir = document.getElementById("texto-traducir");
const textoResultado = document.getElementById("texto-traducido");
const palabrasEncontradas = document.getElementById("palabras-encontradas");
const emojisTraducidos = document.getElementById("emojis-traducidos");

// Archivo del diccionario
let fileHandle;

btnTraducir.addEventListener("click", function () {
    if (textoTraducir.value === "") {
        errorDialog.showModal();
        return;
    }
    traducir();
    dialog.classList.remove("hidden")
    dialog.showModal();
});

btnCerrarResultado.addEventListener("click", function () {
        clean();
        dialog.close();
    }
);

btnCerrarError.addEventListener("click", function () {
        errorDialog.close();
    }
);

btnCargarArchivo.addEventListener("click", async function () {
    try {
        const directoryHandle = await window.showDirectoryPicker();
        await initialize(directoryHandle);
        console.log("Dictionary loaded successfully.");
    } catch (error) {
        console.error("Error loading dictionary:", error);
    }
});

async function traducir() {
    const texto = textoTraducir.value;
    textoResultado.innerText = replace_emoji(texto);
    palabrasEncontradas.innerText = await word_count(texto);
    emojisTraducidos.innerText = emoji_count(texto);
}

const clean = () => {
    textoTraducir.value = "";
    textoResultado.innerText = "";
    palabrasEncontradas.innerText = "";
    emojisTraducidos.innerText = "";
};


