"use client";

import { useState, useEffect, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import EventWithToolTip from "./EventWithToolTip";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '/styles/calendar.css';

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [view,  setView]  = useState<"month"|"week"|"day"|"agenda">("month");
  const [date,  setDate]  = useState<Date>(new Date());


  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        // Format your events so that they have a start and end Date object.
        const formattedEvents = data.events.map((event: any) => ({
          title: event.event,
          start: new Date(event.start_date),
          end: new Date(event.end_date),
          description: event.description,
          all_day: event.all_day, // or false, as needed.
          id: event.id,
        }));
        setEvents(formattedEvents);
        console.log("Fetched events:", formattedEvents);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEvents();
  }, []);

  const onSelectSlot = (slotInfo: any) => {
    // you can navigate to a detailed view filtered by the day, or show a modal.
    console.log("Selected slot:", slotInfo);
  };

  const onSelectEvent = (event: any) => {
    // Navigate to the event's detail page.
    window.location.href = `/events/${event.id}`;
  };

  const handleNavigate = useCallback((newDate: Date) => setDate(newDate), []);
  const handleView     = useCallback((newView: typeof view) => setView(newView), []);

  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={events}
        view={view}
        onView={handleView}
        date={date}
        onNavigate={handleNavigate}
        views={["month", "week", "day", "agenda"]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "50px" }}
        selectable
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        components={{ event: EventWithToolTip }}
      />
    </div>
  );
}