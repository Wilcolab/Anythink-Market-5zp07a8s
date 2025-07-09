function toCamelCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

// Example usage:
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("This is a test-string")); // "thisIsATestString"