import EventDetailPage from "./EventDetailPage";

export default async function EventPageWrapper({ params }: { params: { id: string } }) {
  // Since this is a server component, params is already resolved.
  const { id } = await params;
  return <EventDetailPage eventId={id} />;
}

