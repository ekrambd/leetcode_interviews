//387. First Unique Character in a String

var firstUniqChar = function(s) {
    class HashMap{
        constructor(){
            this.map = new Map();
        }
        set(key,value){
            this.map.set(key,value);
        }
        get(key){
            return this.map.has(key)?this.map.get(key):null;
        }
    }
    let map = new HashMap();
    let arr = s.split("");
    for(let i = 0; i < arr.length; i++)
    {
        let count = map.get(arr[i]);
        if(count == null){
            map.set(arr[i],1);
        }else{
            map.set(arr[i],count+1);
        }
    }
    for(let i = 0; i < arr.length; i++)
    {
        if(map.get(arr[i]) == 1){
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));