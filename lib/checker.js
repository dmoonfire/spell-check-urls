const urlRegex = require("url-regex");

class Checker {
    getId() {
        return "spell-check-urls";
    }

    getName() {
        return "URL Dictionary";
    }

    getPriority() {
        return 75;
    }

    isEnabled() {
        return true;
    }

    getStatus() {
        return "Working correctly.";
    }

    providesSpelling(args) {
        return true;
    }

    providesSuggestions(args) {
        return false;
    }

    providesAdding(args) {
        return false;
    }

    check(args, text) {
        // We use `urlRegex` to find all the links on the page. This just gets
        // a list of the captures which we then find in the file using the next
        // block of code.
        const urls = text.match(urlRegex());

        // Go through the matches and find each one on the page.
        let index = 0;
        const ranges = [];

        for (const url of urls) {
            // Grab this URL and add it to the correct range.
            const start = text.indexOf(url, index);
            const end = start + url.length;

            ranges.push({ start, end });

            // Move the pointer to the next item.
            index = end + 1;
        }

        // Return the gathered ranges we found.
        return { id: this.getId(), correct: ranges };
    }
}

const checker = new Checker();
module.exports = checker;
