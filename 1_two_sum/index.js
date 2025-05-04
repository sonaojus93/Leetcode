function twoSum(arr, target) {
    let m = new Map();
    for (var i = 0; i < arr.length; i++) {
        next = target - arr[i];
        if (m.has(next))
            return [i, m.get(next)];
        m.set(arr[i], i);
    }
    return [];
}