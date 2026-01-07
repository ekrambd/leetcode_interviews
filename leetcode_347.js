//347. Top K Frequent Elements

var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let count = map.get(nums[i]);
        if(count == null){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],count+1);
        }
    }
    let entries = Array.from(map.entries());
    entries.sort((a,b)=>b[1]-a[1]);
    let result = entries.slice(0,k).map(([num])=>num);
    return result;
};


console.log(topKFrequent([1,1,1,2,2,3],2));            // [1, 2]
console.log(topKFrequent([1],1));                      // [1]
console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2],2));    // [1, 2]
console.log(topKFrequent([1,2],2));                    // [1, 2]
console.log(topKFrequent([3,0,1,0],1));    