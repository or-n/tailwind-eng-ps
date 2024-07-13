
import { NextResponse } from 'next/server'

let counter = 0

export async function POST(req: any) {
    const increment = Math.floor(Math.random() * 10) + 1;
    counter += increment;
    return NextResponse.json({
        counter
    }, {
        status: 200
    })
}
