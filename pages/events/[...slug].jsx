import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../data'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

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
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numberedYear,
    month: numberedMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for selected year and month.</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(numberedYear, numberedMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}
