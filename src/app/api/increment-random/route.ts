
import { NextResponse } from 'next/server'

let counter = 0
let history: number[] = []

export async function POST(req: any) {
    const increment = Math.floor(Math.random() * 10) + 1
    const previous = history.length > 2
        ? history[history.length - 1] + history[history.length - 2]
        : 0
    history.push(counter + previous)
    counter += increment
    return NextResponse.json({
        counter,
        history
    }, {
        status: 200
    })
}
