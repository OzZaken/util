type OperatorType = 'arithmetic' | 'comparison' | 'logical'

interface Operator {
    operator: string
    type: OperatorType
    description: string
}

const operators: Array<Operator> = [
    { operator: '+', type: 'arithmetic', description: 'Addition' },
    { operator: '-', type: 'arithmetic', description: 'Subtraction' },
    { operator: '*', type: 'arithmetic', description: 'Multiplication' },
    { operator: '/', type: 'arithmetic', description: 'Division' },

    { operator: '==', type: 'comparison', description: 'Equality by value or by type' },
    { operator: '===', type: 'comparison', description: 'Equality by type and value' },
    { operator: '>', type: 'comparison', description: 'Greater than' },
    { operator: '<', type: 'comparison', description: 'Less than' },
    
    { operator: '&&', type: 'logical', description: 'Logical and' },
    { operator: '||', type: 'logical', description: 'Logical or' },
]

function getOperators<T extends OperatorType>(type?: T): Array<Operator> {
    if (type) return operators.filter((op) => op.type === type)
    else return operators
}

console.log(getOperators()) // returns all operators
console.log(getOperators('arithmetic')) // returns arithmetic operators