"use client";

import { useState, useEffect } from "react";
import { prefix } from "/utils/prefix";
import "/styles/event.css";

export default function EventDetailPage({ eventId }: { eventId: string }) {
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchEvent() {
            try {
                const res = await fetch(prefix(`/api/events/${eventId}`));
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await res.json();
                setEvent(data.event);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchEvent();
    }, [eventId]);

    if (loading) return <p className="events">Loading...</p>;
    if (error) return <p className="events">Error: {error.message}</p>;

    return (
        <div className="event">
            <h1>{event.event}</h1>
            <p>
                <strong>Start Date:</strong>{" "}
                {new Date(event.start_date).toLocaleString()}
            </p>
            <p>
                <strong>End Date:</strong>{" "}
                {new Date(event.end_date).toLocaleString()}
            </p>
            <p>{event.description}</p>
        </div>
    );
}