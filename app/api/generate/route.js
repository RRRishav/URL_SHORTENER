

import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    
    let body = await request.json()
    let client = await clientPromise
    let db = client.db("bitlinks")
    const collection = db.collection('url')


    //check if short url exist
    const doc = await collection.findOne({
        shorturl:body.shorturl
    })
    if(doc){
        return Response.json({
            success: false,
            error:true,
            message:"URL GENERATED SUCCESSFULLY"
        })
    }



    const result = await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl
    })



    return Response.json({
        message:"finishes"
    })
}