// type sequelizeOperatorType = 'comparison' | 'array' | 'function' | 'logical'

interface operator {
    operator: string
    type: string
    description: string
}

// interface sequelizeOperator {
//     operator: string
//     type: sequelizeOperatorType
//     description: string
// }

const sequelizeOperators = [
    { operator: '$and', type: 'logical', description: 'Joins clauses with a logical AND.' },
    { operator: '$or', type: 'logical', description: 'Joins clauses with a logical OR.' },
    { operator: '$not', type: 'logical', description: 'Inverts the result of a logical expression.' },
    { operator: '$col', type: 'function', description: 'Refer to a column in the query.' },
    { operator: '$concat', type: 'function', description: 'Concatenates two or more strings.' },
    { operator: '$sum', type: 'function', description: 'Calculates the sum of a column or expression.' },
    { operator: '$avg', type: 'function', description: 'Calculates the average value of a column or expression.' },
    { operator: '$min', type: 'function', description: 'Returns the minimum value of a column or expression.' },
    { operator: '$max', type: 'function', description: 'Returns the maximum value of a column or expression.' },
    { operator: '$json', type: 'function', description: 'Extracts a value from a JSON column.' },
    { operator: '$cast', type: 'function', description: 'Converts a value to a different data type.' },
    { operator: '$literal', type: 'function', description: 'Specifies a literal value to be used in a query.' },
    { operator: '$eq', type: 'comparison', description: 'Matches values that are equal to a specified value.' },
    { operator: '$ne', type: 'comparison', description: 'Matches all values that are not equal to a specified value.' },
    { operator: '$gte', type: 'comparison', description: 'Matches values that are greater than or equal to a specified value.' },
    { operator: '$gt', type: 'comparison', description: 'Matches values that are greater than a specified value.' },
    { operator: '$lte', type: 'comparison', description: 'Matches values that are less than or equal to a specified value.' },
    { operator: '$lt', type: 'comparison', description: 'Matches values that are less than a specified value.' },
    { operator: '$not', type: 'comparison', description: 'Inverts the effect of a comparison operator.' },
    { operator: '$is', type: 'comparison', description: 'Matches values that are exactly equal to a specified value, including null.' },
    { operator: '$in', type: 'comparison', description: 'Matches values that are contained in a specified array.' },
    { operator: '$notIn', type: 'comparison', description: 'Matches values that are not contained in a specified array.' },
    { operator: '$between', type: 'comparison', description: 'Matches values that are between a specified range.' },
    { operator: '$notBetween', type: 'comparison', description: 'Matches values that are not between a specified range.' },
    { operator: '$like', type: 'comparison', description: 'Matches values that are similar to a specified pattern.' },
    { operator: '$notLike', type: 'comparison', description: 'Matches values that are not similar to a specified pattern.' },
    { operator: '$iLike', type: 'comparison', description: 'Case-insensitive version of $like.' },
    { operator: '$notILike', type: 'comparison', description: 'Case-insensitive version of $notLike.' },
    { operator: '$startsWith', type: 'comparison', description: 'Matches values that start with a specified substring.' },
    { operator: '$endsWith', type: 'comparison', description: 'Matches values that end with a specified substring.' },
    { operator: '$substring', type: 'comparison', description: 'Matches values that contain a specified substring.' },
    { operator: '$regexp', type: 'comparison', description: 'Matches values that match a specified regular expression.' },
    { operator: '$notRegexp', type: 'comparison', description: 'Matches values that do not match a specified regular expression.' },
    { operator: '$iRegexp', type: 'comparison', description: 'Case-insensitive version of $regexp.' },
    { operator: '$notIRegexp', type: 'comparison', description: 'Case-insensitive version of $notRegexp.' },
    { operator: '$all', type: 'array', description: 'Matches an array of values where all elements match the given condition.' },
    { operator: '$any', type: 'array', description: 'Matches any value in an array of values.' },
    { operator: '$overlap', type: 'array', description: 'Matches arrays that overlap with another array.' },
    { operator: '$contains', type: 'array', description: 'Matches arrays that contain a specified element.' },
    { operator: '$contained', type: 'array', description: 'Matches arrays that are contained in another array.' },
    { operator: '$any', type: 'array', description: 'Matches values that are contained in a specified array.' },
]
const sequelizeOperatorMap: { [key: string]: { type: operator, description: string } } = {}


const sequelizeAggregationMap = {
    '$sum': { type: 'sum', description: 'Calculates the sum of all values in a field.' },
    '$avg': { type: 'average', description: 'Calculates the average value of a field.' },
    '$min': { type: 'minimum', description: 'Returns the minimum value of a field.' },
    '$max': { type: 'maximum', description: 'Returns the maximum value of a field.' },
    '$count': { type: 'count', description: 'Returns the count of documents that match a specified query.' },
    '$first': { type: 'first value', description: 'Returns the first value in a group.' },
    '$last': { type: 'last value', description: 'Returns the last value in a group.' },
    '$push': { type: 'push value', description: 'Pushes a value to an array.' },
    '$addToSet': { type: 'add to set', description: 'Adds a value to an array only if it does not already exist.' },
    '$stdDevPop': { type: 'population standard deviation', description: 'Calculates the population standard deviation of the input values.' },
    '$stdDevSamp': { type: 'sample standard deviation', description: 'Calculates the sample standard deviation of the input values.' },
    '$variancePop': { type: 'population variance', description: 'Calculates the population variance of the input values.' },
    '$varianceSamp': { type: 'sample variance', description: 'Calculates the sample variance of the input values.' },
    '$values': { type: 'subquery', description: 'Allows you to reference the result of a subquery in a WHERE or HAVING clause.' },
    '$col': { type: 'dynamic column', description: 'Allows you to reference a column dynamically, using another column\'s value as the column name.' },
    '$raw': { type: 'raw SQL', description: 'Allows you to write raw SQL expressions that will be injected into the query without being escaped or modified.' },
    '$fn': { type: 'database function', description: 'Allows you to call a function in your database, with arguments passed as additional arguments to $fn.' }
}
sequelizeOperators.forEach((operator: operator) => {
    sequelizeOperatorMap[operator.operator] = {
        type: operator.type,
        description: operator.description
    }
})


function getSequelizeOperators(operator: string | null = null): string[] {
    if (!operator) return [sequelizeOperatorMap, sequelizeAggregationMap]

    const arr: string[] = []
    if (sequelizeOperatorMap[operator]) {
        arr.push(sequelizeOperatorMap[operator])
    }
    if (sequelizeAggregationMap[operator]) {
        console.log('sequelizeAggregationMap[operator]')
        arr.push(sequelizeAggregationMap[operator])
    }
    return arr
}