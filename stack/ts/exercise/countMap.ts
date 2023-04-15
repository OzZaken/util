const items: (string | number)[] = ['a', 'b', 'c', 1, 2, 3, 1, 'a', 2]

function countMap(data: (string | number)[]): {[key: string]: number} {
  const countMap: {[key: string]: number} = {}

  data.forEach((data: string | number) => countMap[data] = (countMap[data] || 0) + 1)

  return countMap
}

console.log(countMap(items))