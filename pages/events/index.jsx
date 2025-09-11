import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { getAllEvents } from '../../data'

export default function EventsPage() {
  const router = useRouter()
  const events = getAllEvents()

  function handleFindEvent(year, month) {
    const path = `/events/${year}/${month}`
    router.push(path)
  }

  return (
    <>
      <EventsSearch onSearch={handleFindEvent} />
      <EventList items={events} />
    </>
  )
}
 