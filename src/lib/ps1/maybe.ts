export type Maybe<T> = {
    bind: (f: (_: T) => Maybe<T>) => Maybe<T>
    toString: () => string
}

class Just<T> implements Maybe<T> {
    constructor(private value: T) {}

    bind(f: (_: T) => Maybe<T>) {
        return f(this.value)
    }

    toString() {
        return `Just(${this.value})`;
    }
}

class Nothing<T> implements Maybe<T> {
    bind(f: (_: T) => Maybe<T>) {
        return new Nothing<T>()
    }

    toString() {
        return `Nothing`;
    }
}

export const Maybe = {
    of: <T>(x: T | null | undefined) => {
        return x === null || x === undefined
            ? new Nothing<T>()
            : new Just<T>(x)
    }
}

export const safeFind = <T>(array: T[], predicate: (item: T) => boolean) => {
    return Maybe.of(array.find(predicate))
}