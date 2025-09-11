import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../data'
import EventList from '../../components/events/event-list'

export default function FilteredEventsPage() {
  const router = useRouter()

  const filteredData = router.query.slug
  // console.log(filteredData)

  if (!filteredData) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = filteredData[0]
  const filteredMonth = filteredData[1]

  const numberedYear = +filteredYear
  const numberedMonth = +filteredMonth

  if (
    isNaN(numberedYear) ||
    isNaN(numberedMonth) ||
    numberedYear < 2021 ||
    numberedYear > 2030 ||
    numberedMonth < 1 ||
    numberedMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numberedYear,
    month: numberedMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for selected year and month.</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}
