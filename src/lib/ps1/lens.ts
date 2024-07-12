interface Lens<T, B> {
    get(a: T): B
    set(b: B, a: T): T
    modify(a: T, f: (b: B) => B): T
}

interface Person { name: string; age: number; }

function lens<T, K extends keyof T>(key: K): Lens<T, T[K]> {
    return {
        get: (object: T) => object[key],
        set: (value: T[K], object: T) => ({ ...object, [key]: value }),
        modify: (object: T, f: (value: T[K]) => T[K]) => ({
            ...object,
            [key]: f(object[key]),
        }),
    }
}

const ageLens = lens<Person, 'age'>('age')
const person = { name: "Alice", age: 25 }
export const olderPerson = ageLens.modify(person, age => age + 1)