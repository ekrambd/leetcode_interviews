// 49. Group Anagrams
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let i = 0; i < strs.length; i++){
        let str = strs[i];
        let key = str.split('').sort().join('');
        if(!map.has(key)){
            map.set(key,[]);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["bat","nat","tan","ate","eat","tea"]));