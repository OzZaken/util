const _ = require('lodash');

class LodashService {
    constructor() { }

    //  Checks if a value is empty, including null, undefined, string, empty arrays and objects.
    isEmpty(value) {
        return _.isEmpty(value);
    }

    // Compares two values and returns true or false based on the comparison result.
    isEqual(value, other) {
        return _.isEqual(value, other);
    }

    // useful for mini user
    pick(object, keys) {
        return _.pick(object, keys);
    }

    // excludes the specified properties
    omit(object, keys) {
        return _.omit(object, keys);
    }

    // merge same {} or []
    merge(type, ...sources) {
        const target = (Array.isArray(type)) ? target = [] : target = {}
        return _.merge(target, ...sources);
    }

    // const clone = _.cloneDeep(obj, { functions: true, elements: true });
    cloneDeep(value, options = {}) {
        return _.cloneDeepWith(value, val =>
            _.isFunction(val) ? options.functions ? val : undefined
                : _.isElement(val) ? options.elements ? val.cloneNode(true) : undefined
                    : undefined
        )
    }

    /** Throttles the original function and returns a new throttled function
     * with a specified wait time and options.
     */
    throttle(func, wait, options = {}) {
        return _.throttle(func, wait, options);
    }

    // Debounces the original function and returns a new debounced function with a specified wait time and options. 
    debounce(func, wait, options = {}) {
        return _.debounce(func, wait, options);
    }

    /** Returns a new array with unique values.
     * This method now accepts a custom function for comparing the uniqueness of the values.
     * 
     * const objArray = [
     * { id: 1, name: 'John' },
     * { id: 2, name: 'Doe' },
     * { id: 3, name: 'John' },
     * { id: 4, name: 'Smith' },
     * { id: 5, name: 'Doe' }
     * ];
     * const uniqueObjArray = lodashService.uniq(objArray, (a, b) => a.name === b.name);
     * 
     * Output: 
     * [
     * { id: 1, name: 'John' },
     * { id: 2, name: 'Doe' },
     * { id: 4, name: 'Smith' }
     * ]
     */
    uniq(array, comparator) {
        return _.uniqWith(array, comparator);
    }

    // Maps each value in the array to a new value using the given function.
    map(array, func) {
        return _.map(array, func);
    }

    // Returns the first value in the array that satisfies the given function.
    find(array, func) {
        return _.find(array, func);
    }

    /** Transforms the object using the given function.
     * const obj = { a: 1, b: 2, c: 3 };
     * const newObj = lodashService.transform(
     * obj,
     * (result, value, key) => {
     * result[key.toUpperCase()] = value * 2;
     *  },{}
     * );
     * console.log(newObj); // { A: 2, B: 4, C: 6 }
     * 
     */
    transform(object, func, accumulator) {
        return _.transform(object, func, accumulator);
    }

    // Generates a unique ID.
    uniqueId(prefix = '') {
        return _.uniqueId(prefix)
    }
}

module.exports = LodashService
