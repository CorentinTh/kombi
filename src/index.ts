type Unpacked<T> = T extends (infer U)[] ? U : T
type UnpackedArraysObject<T> = { [K in keyof T]: Unpacked<T[K]> }[]
type ArraysObject = { [k: string]: unknown[] }

const cartesianArray = (array: unknown[][]): unknown[][] => {
    if(array.length > 0){
        return array.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat()))) as unknown[][]
    }else {
        return []
    }
};

const cartesianObject = <T extends ArraysObject>(obj: T): UnpackedArraysObject<T> => {
    const keys = Object.keys(obj)
    const values = Object.values(obj)

    return cartesianArray(values).map((p: unknown[]) => keys.reduce((acc: { [k: string]: unknown }, k, i) => (acc[k] = p[i], acc), {})) as UnpackedArraysObject<T>;
}

const kombi = <T extends ArraysObject>(data: T | unknown[][]): unknown[][] | UnpackedArraysObject<T> => {
    if (Array.isArray(data)) {
        return cartesianArray(data)
    } else if (typeof data === 'object' && data !== null) {
        return cartesianObject(data)
    } else {
        throw `Data must be either:\n  - an array of arrays ( [[1, 2], ['a', 'b']] )\n  - An object containing arrays ( {a: [1, 2], b: ['a', 'b']} )\n\n But got typeof data = ${typeof data}.`
    }
}

export {
    kombi
}