/**
 * Converts a string with words separated by spaces, dashes, or underscores into camelCase.
 * Handles multiple consecutive separators and trims leading/trailing spaces.
 * Throws an error if input is not a non-empty string.
 * 
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input.trim().length === 0) {
        throw new Error('Input must be a non-empty string.');
    }

    // Split by space, dash, or underscore (one or more), trim, and filter out empty strings
    const words = input.trim().split(/[\s\-_]+/).filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input must contain at least one word.');
    }

    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

