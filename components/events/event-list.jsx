import EventItem from './event-item'
import styles from './event-list.module.css'

export default function EventList({ items }) {
  // const { items } = props

  return (
    <ul className={styles.list}>
      {items.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
          location={event.location}
        />
      ))}
    </ul>
  )
}
