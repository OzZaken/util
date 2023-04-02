type mongooseOperatorType = 'comparison' | 'array' | 'regex' | 'element' | 'logical' | 'miscellaneous'

interface mongooseOperator {
    operator: string
    type: mongooseOperatorType
    description: string
}

// Table of Mongoose operators and their descriptions
const mongooseOperators: mongooseOperator[] = [
    { operator: '$eq', type: 'comparison', description: 'Matches values that are equal to a specified value.' },
    { operator: '$ne', type: 'comparison', description: 'Matches all values that are not equal to a specified value.' },
    { operator: '$gt', type: 'comparison', description: 'Matches values that are greater than a specified value.' },
    { operator: '$gte', type: 'comparison', description: 'Matches values that are greater than or equal to a specified value.' },
    { operator: '$lt', type: 'comparison', description: 'Matches values that are less than a specified value.' },
    { operator: '$lte', type: 'comparison', description: 'Matches values that are less than or equal to a specified value.' },
    { operator: '$text', type: 'comparison', description: 'Performs a text search on the content of the fields indexed with a text index.' },

    { operator: '$in', type: 'array', description: 'Matches any of the values specified in an array.' },
    { operator: '$nin', type: 'array', description: 'Matches none of the values specified in an array.' },
    { operator: '$all', type: 'array', description: 'Matches arrays that contain all elements specified in an array.' },
    { operator: '$size', type: 'array', description: 'Matches arrays that have the specified number of elements.' },
    { operator: '$all', type: 'array', description: 'Matches arrays that contain all elements specified in an array.' },
    { operator: '$size', type: 'array', description: 'Matches arrays that have the specified number of elements.' },
    { operator: '$elemMatch', type: 'array', description: 'Matches documents that contain an array element that matches all the specified criteria.' },

    { operator: '$regex', type: 'regex', description: 'Matches strings that match a specified regular expression.' },
    { operator: '$options', type: 'regex', description: 'Modifies the matching behavior of $regex.' },

    { operator: '$exists', type: 'element', description: 'Matches documents that have the specified field.' },
    { operator: '$type', type: 'element', description: 'Matches documents that have a specified BSON type.' },
    { operator: '$exists', type: 'element', description: 'Matches documents that have the specified field.' },
    { operator: '$mod', type: 'element', description: 'Performs a modulo operation on the value of a field and selects documents with a specified result.' },

    { operator: '$not', description: 'Inverts the effect of a query expression.', type: 'logical' },

    { operator: '$geoIntersects', type: 'miscellaneous', description: 'Matches documents with geojson geometries that intersect with a specified geometry.' },
    { operator: '$geoWithin', type: 'miscellaneous', description: 'Matches documents with geojson geometries that are completely within a specified geometry.' },
    { operator: '$near', type: 'miscellaneous', description: 'Returns geospatial objects in proximity to a point.' },
    { operator: '$nearSphere', type: 'miscellaneous', description: 'Returns geospatial objects in proximity to a point on a sphere.' },
    { operator: '$geometry', type: 'miscellaneous', description: 'Specifies a point for use with $geoIntersects and $geoWithin.' },
    { operator: '$center', type: 'miscellaneous', description: 'Specifies a circle for use with $geoIntersects and $geoWithin.' },
    { operator: '$centerSphere', type: 'miscellaneous', description: 'Specifies a sphere for use with $geoIntersects and $geoWithin.' },
    { operator: '$box', type: 'miscellaneous', description: 'Specifies a rectangle for use with $geoIntersects and $geoWithin.' },
    { operator: '$polygon', type: 'miscellaneous', description: 'Specifies a polygon for use with $geoIntersects and $geoWithin.' },
    { operator: '$geoIntersects', type: 'miscellaneous', description: 'Matches documents with geojson geometries that intersect with a specified geometry.' },
    { operator: '$geoWithin', type: 'miscellaneous', description: 'Matches documents with geojson geometries that are completely within a specified geometry.' },
    { operator: '$near', type: 'miscellaneous', description: 'Returns geospatial objects in proximity to a point.' },
    { operator: '$nearSphere', type: 'miscellaneous', description: 'Returns geospatial objects in proximity to a point on a sphere.' },
    { operator: '$geometry', type: 'miscellaneous', description: 'Specifies a point for use with $geoIntersects and $geoWithin.' },
    { operator: '$center', type: 'miscellaneous', description: 'Specifies a circle for use with $geoIntersects and $geoWithin.' },
    { operator: '$centerSphere', type: 'miscellaneous', description: 'Specifies a sphere for use with $geoIntersects and $geoWithin.' },
    { operator: '$box', type: 'miscellaneous', description: 'Specifies a rectangle for use with $geoIntersects and $geoWithin.' },
    { operator: '$polygon', type: 'miscellaneous', description: 'Specifies a polygon for use with $geoIntersects and $geoWithin.' },
]

export function getMongooseOperators<T extends mongooseOperatorType>(type?: T): Array<mongooseOperator> {
    const filteredOperators = type ? 
    mongooseOperators.filter(operator => operator.type === type) : mongooseOperators

    return filteredOperators.map(operator => ({
        operator: operator.operator,
        type: operator.type,
        description: operator.description
    }))
}