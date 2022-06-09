const urlChecker = (stringToCheck) => {
    let url;
    try {
        url = new URL(stringToCheck);
    } catch (_) {
        return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

module.exports = urlChecker;