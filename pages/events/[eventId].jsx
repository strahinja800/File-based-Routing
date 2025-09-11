import { useRouter } from 'next/router'
import { getEventById } from '../../data'
import EventSummary from '../../components/event-details/event-summary'
import EventLogistics from '../../components/event-details/event-logistics'
import EventContent from '../../components/event-details/event-content'
import ErrorAlert from '../../components/ui/error-alert'

export default function EventDetailPage() {
  const router = useRouter()

  const eventId = router.query.eventId
  const event = getEventById(eventId)

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </>
    )
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAll={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}
