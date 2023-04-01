/** The Durstenfeld shuffle algorithm:
 * This is a variation of the Fisher-Yates algorithm that swaps elements in place,
 * and was proposed by computer scientist Richard Durstenfeld in 1964.
 * It is similar to the Fisher-Yates algorithm, but starts at the first element of the array instead of the last element.
 */
function shuffleDurstenfeld<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  /** The Knuth shuffle algorithm:
   * This is another variation of the Fisher-Yates algorithm that uses a different formula for generating the random index.
   * It was proposed by computer scientist Donald Knuth in his book "The Art of Computer Programming."
   */
  function shuffleKnuth<T>(arr: T[]): T[] {
    let currentIndex = arr.length;
    let temporaryValue: T, randomIndex: number;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  
    return arr;
  }
  
  /** The Fisher-Yates algorithm (also known as the Knuth shuffle)
   * is considered one of the fastest and most efficient ways to shuffle an array.
   * It has a time complexity of O(n), where n is the length of the array.
   * This algorithm is widely used and has been proven to produce a uniformly random permutation of the input array.
   * Other shuffling algorithms may have a similar or slightly faster performance,
   * but may not provide the same level of randomness or uniformity.
   * Therefore, Fisher-Yates is a good choice for most cases.
   */
  function shuffleFisher<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  