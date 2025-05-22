import { NextResponse } from "next/server";
import clientPromise from "/utils/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("harry-orchard");
    const events = await db.collection("events").find({}).toArray();
    return NextResponse.json({ events });
}