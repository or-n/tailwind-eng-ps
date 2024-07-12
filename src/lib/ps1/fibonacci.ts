type ArrayOfSize<N extends number> =
    N extends N ? _ArrayOfSize<N, []>
    : never

type _ArrayOfSize<N extends number, RESULT extends any[]> =
    RESULT['length'] extends N ? RESULT
    : _ArrayOfSize<N, [void, ...RESULT]>

type Add<A extends any[], B extends any[]> = [...A, ...B]

type Minus1<A extends any[]> =
    A extends readonly [any?, ...infer U] ? U
    : never

type Fib<N extends number> = _Fib<ArrayOfSize<N>>['length']

type _Fib<N extends any[]> =
    N['length'] extends 0 | 1 ? N
    : Add<_Fib<Minus1<N>>, _Fib<Minus1<Minus1<N>>>>


export type ZeroMinus1 = Minus1<ArrayOfSize<0>>['length']

export type F0 = Fib<0>
export type F1 = Fib<1>
export type F2 = Fib<2>
export type F3 = Fib<3>
export type F4 = Fib<4>