import {kombi} from '../src'

describe('Combinate array of arrays', () => {
    test('Empty array', () => {
        const result = kombi([])

        expect(result).toHaveLength(0)
        expect(result).toEqual([])
    })

    test('Same length arrays', () => {
        const result = kombi([
            [1, 2, 3, 4],
            ['a', 'b', 'c', 'd'],
        ])
        
        expect(result).toHaveLength(16)
        expect(result.sort()).toEqual([
            [1, 'a'], [1, 'b'], [1, 'c'], [1, 'd'],
            [2, 'a'], [2, 'b'], [2, 'c'], [2, 'd'],
            [3, 'a'], [3, 'b'], [3, 'c'], [3, 'd'],
            [4, 'a'], [4, 'b'], [4, 'c'], [4, 'd'],
        ].sort())
    })

    test('Different length arrays', () => {
        const result = kombi([
            [1, 2, 3, 4],
            ['a', 'b', 'c'],
        ])
        
        expect(result).toHaveLength(12)
        expect(result.sort()).toEqual([
            [1, 'a'], [1, 'b'], [1, 'c'], 
            [2, 'a'], [2, 'b'], [2, 'c'], 
            [3, 'a'], [3, 'b'], [3, 'c'], 
            [4, 'a'], [4, 'b'], [4, 'c'], 
        ].sort())
    })


})

describe('Combinate map of arrays', () => {
    test('Empty map', () => {
        const result = kombi({})

        expect(result).toHaveLength(0)
        expect(result).toEqual([])
    })

    test('Same length arrays', () => {
        const result = kombi({
            a: [1, 2, 3, 4],
            b: ['a', 'b', 'c', 'd'],
        })
        
        expect(result).toHaveLength(16)
        expect(result.sort()).toEqual([
            {a: 1, b: 'a'}, {a:1, b:'b'}, {a:1, b:'c'}, {a:1, b:'d'},
            {a: 2, b: 'a'}, {a:2, b:'b'}, {a:2, b:'c'}, {a:2, b:'d'},
            {a: 3, b: 'a'}, {a:3, b:'b'}, {a:3, b:'c'}, {a:3, b:'d'},
            {a: 4, b: 'a'}, {a:4, b:'b'}, {a:4, b:'c'}, {a:4, b:'d'},
        ].sort())
    })

    test('Different length arrays', () => {
        const result = kombi({
            a: [1, 2, 3, 4],
            b: ['a', 'b', 'c'],
        })
        
        expect(result).toHaveLength(12)
        expect(result.sort()).toEqual([
            {a: 1, b: 'a'}, {a:1, b:'b'}, {a:1, b:'c'},
            {a: 2, b: 'a'}, {a:2, b:'b'}, {a:2, b:'c'},
            {a: 3, b: 'a'}, {a:3, b:'b'}, {a:3, b:'c'},
            {a: 4, b: 'a'}, {a:4, b:'b'}, {a:4, b:'c'},
        ].sort())
    })
})

describe('Wrong input data', () => {
    test('No input', () => {
        //@ts-ignore
        expect(() => kombi()).toThrow()
    })  
    
    test('Number as input', () => {
        expect(() => kombi(1 as any)).toThrow()
    })

    test('String as input', () => {
        expect(() => kombi('1' as any)).toThrow()
    })
})