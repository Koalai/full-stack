function hashMap() {
    let buckets = Array(16).fill(null).map(() => [])
    let loadFactor = 0.8
    let capacity = 0
    
    function hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i) % buckets.length;
        }
     
        return hashCode;
      } 
     
    function set(key, value) {
        const index = hash(key);
        const bucket = buckets[index]

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key) {
                bucket[i][1] = value
                return
            }
        }   

        bucket.push([key, value]);
        capacity++;

    }

    function get(key) {
        const index = hash(key);
        const bucket = buckets[index]

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key) {
                return bucket[i][1] = value
            }
        }   
    }

}