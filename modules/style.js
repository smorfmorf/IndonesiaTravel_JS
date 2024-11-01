const styles = new Map();

//загружает таблицу стилей (CSS) из указанного URL и возвращает промис, который разрешается после загрузки таблицы стилей (если второй раз открыть модалку то она вернет уже загруженную таблицу стилей)

function loadStyle(url) {
    console.log('styles: ', styles);

    if (styles.has(url)) {
        // return styles.get(url); возвращает разрешенный промис если стили уже есть.
        return console.log('Стили уже загружены');
    }

    const stylePromise = new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;

        //когда таблица стилей была загружена
        link.addEventListener('load', () => {
            resolve();
        });
        document.head.append(link);
    });
    styles.set(url, stylePromise);

    console.log('styles3: ', styles);

    return stylePromise;
}

export default loadStyle;
