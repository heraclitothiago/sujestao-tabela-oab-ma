function stringSlug(str) {
    return strtr(str).toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

function strtr(str) {
    let from = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜüÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿRr"!@#$%&*()_-+={[}]/?;:.,\\\'<>°ºª';
    let to = 'aaaaaaaceeeeiiiidnoooooouuuuuybsaaaaaaaceeeeiiiidnoooooouuuyybyRr                                 ';
    let i,
        newStr = "",
        ch;

    for (i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        if (from.indexOf(ch) >= 0) {
            newStr += to.charAt(from.indexOf(ch));
        } else {
            newStr += ch;
        }
    }
    return newStr;
}

const DOMservices = document.querySelector("body > div.wrap > div > div.content.honorarios > table")
    .querySelectorAll('td:nth-child(1)')

const oabServices = Array.from(DOMservices)
    .filter(service => {
        const problemTd = service.closest('tr').querySelectorAll('td')
        return problemTd.length == 2 & problemTd[1]?.innerText != ""
    })
    .map(service => {
        service.id = stringSlug(service.innerText)
        return service
    }).map(service => {
        let link = document.createElement('a')
        const textLink = service.innerText
        service.innerText = ""
        link.href = `#${service.id}`
        link.innerText = textLink
        service.appendChild(link)
        return service
    })
