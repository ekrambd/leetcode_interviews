// 49. Group Anagrams
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];

        // create key
        const key = str.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};

console.log(groupAnagrams(["bat","nat","tan","ate","eat","tea"]));
