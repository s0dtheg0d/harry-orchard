"use client";

import Link from 'next/link';
import { prefix } from '/utils/prefix';
import { useEffect, useState } from 'react';
import '/styles/upcoming.css';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setcurrentPage] = useState(1);
    const eventsPerPage = 12;
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEvents(data.events);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) return <p className="events">Loading...</p>;
    if (error) return <p className="events">Error: {error.message}</p>;

    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const currentEvents = events.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(events.length / eventsPerPage)) {
            setcurrentPage(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1);
        }
    }

    return (
        <div className="upcoming">
            <h1>Upcoming Events!</h1>
            <div className="event-cards">
                {currentEvents.map((event) => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                        <div className="event-card" key={event.id}>
                            <h2>{event.event}</h2>
                            <p>{new Date(event.start_date).toLocaleDateString()} - {new Date(event.end_date).toLocaleDateString()}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pagination-wrapper">
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        &larr; Previous
                    </button>
                    <span>
                        Page {currentPage} of {Math.ceil(events.length / eventsPerPage)}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === Math.ceil(events.length / eventsPerPage)}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </div>
    )
}