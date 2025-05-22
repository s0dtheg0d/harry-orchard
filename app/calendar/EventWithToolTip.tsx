import Tooltip from "@mui/material/Tooltip";

/** rbc passes the whole event object here */
export default function EventWithTooltip({ event }: { event: any }) {
    return (
        <Tooltip
            title={
                <div>
                    <strong>{event.title}</strong>
                    {/* show more fields if you like */}
                    <div>Start: {event.start.toLocaleTimeString()}</div>
                    <div>End: {event.end.toLocaleTimeString()}</div>
                    <div>Description: {event.description}</div>
                </div>
            }
            placement="top"
            arrow
        >
            {/* Keep the original text inside the cell */}
            <span>{event.title}</span>
        </Tooltip>
    );
}