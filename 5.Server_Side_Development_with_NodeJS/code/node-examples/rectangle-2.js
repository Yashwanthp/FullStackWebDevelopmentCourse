module.exports = (x, y, callback) => {
    try {
        if (x < 0 || y < 0) {
            throw new Error("Error, length: " + x + " ,breadth: " + y);
        } else {
            callback(null, {
                perimeter: () => 2 * x * y,// x,y are accessible as JS closure feature
                area: () => x * y // x,y are accessible due to JS closure feature.
            });
        }
    } catch (error) {
        callback(error, null);
    }
}