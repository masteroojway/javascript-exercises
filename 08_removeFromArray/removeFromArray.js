const removeFromArray = function(arr, ...target) {
    const ans = [];
    for(let i = 0;i<arr.length;i++)
    {
        if(!target.includes(arr[i]))
        {
            ans[ans.length] = arr[i];
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
