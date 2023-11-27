let dic = new Set();

function quitarTildes(cadena) {
    return cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

async function initialize(directoryHandle) {
    try {
        const entries = directoryHandle.values();

        for await (const entry of entries) {


                console.log(entry)
                const file = await entry.getFile();
                const words = (await file.text()).split('\n');

                words.forEach((word) => {
                    const cleanedWord = quitarTildes(word.replace(/[0-9]/g, '').trim().toLowerCase());

                    if (cleanedWord.includes(",")) {
                        const parts = word.split(",").map(w => (w.trim()));
                        dic.add(parts[0]);
                        dic.add(parts[0].slice(0, -(parts[1].length)) + parts[1]);
                    } else {
                        dic.add(cleanedWord);
                    }
                });

        }

        console.log("Dictionary initialized:", dic);
    } catch (error) {
        window.alert("Error initializing dictionary:", error);
    }
}

async function validate_word(word) {
    // Ensure that the dictionary is initialized before validating words
    if (dic.size === 0) {
        console.error("Dictionary not initialized. Please upload a dictionary file.");
        return false;
    }
    return dic.has(word.trim().toLowerCase());
}

export { initialize, validate_word, dic };
