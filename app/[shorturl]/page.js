import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const url = (await params).shorturl


    let client = await clientPromise
    let db = client.db("bitlinks")
    const collection = db.collection('url')



    const doc = await collection.findOne({
        shorturl:url
    })
    if(doc){
        redirect(doc.url)
    }else{
        redirect(`${NEXT_PUBLIC_HOST}`)
    }
}