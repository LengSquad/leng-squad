export function getClassColor(id) {
    let classColor = '#000000';
    switch (id) {
        case 1:
            classColor = '#C79C6E';
            break;
        case 2:
            classColor = '#F58CBA';
            break;
        case 3:
            classColor = '#ABD473';
            break;
        case 4:
            classColor = '#FFF569';
            break;
        case 5:
            classColor = '#FFFFFF';
            break;
        case 6:
            classColor = '#C41F3B';
            break;
        case 7:
            classColor = '#0070DE';
            break;
        case 8:
            classColor = '#69CCF0';
            break;
        case 9:
            classColor = '#9482C9';
            break;
        case 10:
            classColor = '#00FF96';
            break;
        case 11:
            classColor = '#FF7D0A';
            break;
        case 12:
            classColor = '#A330C9';
            break;
    }
    return classColor;
}

export function getItemColor(quality) {
    let color = '#000000';
    switch (quality) {
        case 0:
            color = '#9d9d9d';
            break
        case 1:
            color = '#ffffff';
            break
        case 2:
            color = '#1eff00';
            break
        case 3:
            color = '#0070dd';
            break
        case 4:
            color = '#a335ee';
            break
        case 5:
            color = '#ff8000';
            break
        case 6:
            color = '#e6cc80';
            break
        case 7:
            color = '#00ccff';
            break
        case 8:
            color = '#00ccff';
            break
    }
    return color;
}