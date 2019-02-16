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
        // The regular expression for finding links.
        const regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

        // Loop through the text and find all the matches for
        // our regular expression.
        const ranges = [];

        while (true) {
            // See if we have a match.
            const match = regexp.exec(text);

            if (!match) {
                break;
            }

            // We have a match, so add it to the range.
            const end = match.index + match[0].length;
            ranges.push({ start: match.index, end });

            break;
        }

        // Return the gathered ranges we found.
        return { id: this.getId(), correct: ranges };
    }
}

const checker = new Checker();
module.exports = checker;
