/**
 * 深拷贝
 * @param {any} target 被拷贝对象
 * @param {*} map map结构
 */
function deepClone(target, map = new WeakMap) {
    if (typeof target === 'object' && target !== null) {
        const result = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, result)
        for (const key in target) {
            result[key] = deepClone(target[key], map)
        }
        return result
    }
    return target
}

const target = {
    a: 1,
    b: undefined,
    c: null,
    d: {
        name: 'jack',
    },
    e: [2],
}
target.target = target

const result = deepClone(target)
result.f = 'jjj'
console.log(result)
console.log(target)