import { NextResponse } from "next/server";
import clientPromise from "/utils/mongodb";

export const dynamic = "force-dynamic";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("harry-orchard");

    const event = await db.collection("events").findOne({ id: Number(id) });
    if (!event) {
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ event });
}