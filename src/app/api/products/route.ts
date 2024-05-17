import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'MacBook Pro',
        price: 20000000,
        image: '/images/mac.png'
    },
    {
        id: 2,
        title: 'iPhone 15 Pro Max',
        price: 23000000,
        image: '/images/ip15.jpg'
    },
]
export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ status: 200, message: 'success', data });
    }

    const dataValid = data.find((item) => item.id === parseInt(id))

    if (!dataValid) {
        return NextResponse.json({ status:404, message: 'Not Found', data:{} });
    }
    return NextResponse.json({status: 200, message: 'success', data: dataValid})
}