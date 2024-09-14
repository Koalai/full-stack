function hashMap() {
  let buckets = Array(16)
    .fill(null)
    .map(() => [])
  let loadFactor = 0.8
  let capacity = 0

  function hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
    }

    return hashCode % buckets.length
  }

  function set(key, value) {
    const index = hash(key)
    const bucket = buckets[index]

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value
        return
      }
    }

    bucket.push([key, value])
    capacity++
  }

  function get(key) {
    const index = hash(key)
    const bucket = buckets[index]

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]
      }
    }
  }

  function has(key) {
    const index = hash(key)
    const bucket = buckets[index]

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true
      }
    }
    return false
  }

  function remove(key) {
    const index = hash(key)
    const bucket = buckets[index]

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1)
        capacity--
        return true
      }
    }

    return false
  }

  function hashMaplength() {
      return capacity;
  }

  function clear() {
    buckets.map(() => [])
    capacity = 0
  }

  function keys() {
    return buckets.flatMap((bucket) => bucket.map(([key]) => key))
  }

  function values() {
    return buckets.flatMap((bucket) => bucket.map(([, ...value]) => value))
  }

  function entries() {
    return buckets.flatMap((bucket) => bucket.map(([key, value]) => [key, value]))
  }

  return {
    set,
    get,
    has,
    hash,
    remove,
    hashMaplength,
    clear,
    keys,
    values,
    entries,
  }
}

const test = hashMap()

test.set("apple", "red")
test.set("banana", "yellow")
test.set("carrot", "orange")

console.log(test)
console.log(test.get("apple")) // green
console.log(test.has("banana")) // true
console.log(test.remove("carrot")) // true
console.log(test.hashMaplength()) // Should reflect the current number of entries
console.log(test.keys()) // All keys
console.log(test.values()) // All values
console.log(test.entries()) // All key-value pairs
