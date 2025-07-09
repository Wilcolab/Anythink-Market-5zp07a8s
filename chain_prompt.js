/**
 * Converts a string to kebab-case.
 * Handles spaces, underscores, and camelCase.
 * Throws an error for invalid input.
 * @param {string} str
 * @returns {string}
 */
function toKebabCase(str) {
    if (typeof str !== 'string' || !str.trim()) {
        throw new Error('Input must be a non-empty string.');
    }

    // Replace underscores and spaces with a space
    let result = str.replace(/[_\s]+/g, ' ');

    // Insert space before uppercase letters (for camelCase)
    result = result.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Split by spaces, filter out empty, join with hyphens, and lowercase
    return result
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .join('-')
        .toLowerCase();
}

// Example usages:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase("HelloWorld")); // "hello-world"
// console.log(toKebabCase("hello_world test")); // "hello-world-test"
// console.log(toKebabCase("  ")); // Error
// console.log(toKebabCase(123)); // Error