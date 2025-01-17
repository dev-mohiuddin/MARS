import React, { useState, useEffect } from 'react'
import { BookingList } from '@/components/flight-schedule/booking-list'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { formatDate } from 'date-fns'
import { Input } from '@/components/ui/input'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function FlightSchedule () {
  const [currentEvents, setCurrentEvents] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newEventTitle, setNewEventTitle] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEvents = localStorage.getItem('events')
      if (savedEvents) {
        setCurrentEvents(JSON.parse(savedEvents))
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('events', JSON.stringify(currentEvents))
    }
  }, [currentEvents])

  const handleDateClick = selected => {
    setSelectedDate(selected)
    setIsDialogOpen(true)
  }

  const handleEventClick = selected => {
    if (
      window.confirm(
        `Are you sure you want to delete the event "${selected.event.title}"?`
      )
    ) {
      selected.event.remove()
    }
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setNewEventTitle('')
  }

  const handleAddEvent = e => {
    e.preventDefault()
    if (newEventTitle && selectedDate) {
      const calendarApi = selectedDate.view.calendar // Get the calendar API instance.
      calendarApi.unselect() // Unselect the date range.

      const newEvent = {
        id: `${selectedDate.start.toISOString()}-${newEventTitle}`,
        title: newEventTitle,
        start: selectedDate.start,
        end: selectedDate.end,
        allDay: selectedDate.allDay
      }

      calendarApi.addEvent(newEvent)
      handleCloseDialog()
    }
  }

  return (
    <div>
      <div className='flex flex-col w-full justify-start items-start gap-5'>

        {/* <div className='w-full md:w-3/12'>
          <div className='text-xl font-bold px-7'>Booking list</div>
          <ul className='space-y-4 mt-9'>
            {currentEvents.length <= 0 && (
              <div className='italic text-center text-muted-foreground'>
                No booking list
              </div>
            )}

            {currentEvents.length > 0 &&
              currentEvents.map(event => (
                <li className='border px-4 py-2 rounded-md ' key={event.id}>
                  {event.title}
                  <br />
                  <label className='text-slate-950'>
                    {formatDate(event.start, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}{' '}
                  </label>
                </li>
              ))}
          </ul>
        </div> */}

        <div className='w-full mb-5'>
          <Card className=''>
            <CardHeader>
              <CardTitle>Flight Schedule</CardTitle>
              <CardDescription>
                To book a flight click on the required date/s and submit the
                form.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FullCalendar
                height={'90vh'}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={events => setCurrentEvents(events)}
                initialEvents={
                  typeof window !== 'undefined'
                    ? JSON.parse(localStorage.getItem('events') || '[]')
                    : []
                }
              />
            </CardContent>
          </Card>
        </div>
        <BookingList />
      </div>

      {/* Dialog for adding new events */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book a Flight</DialogTitle>
            <DialogDescription>
              Fill in the details below to book your flight. Click submit when
              you're done.
            </DialogDescription>
          </DialogHeader>
          <div>
            <form onSubmit={handleAddEvent}>
              <div className='space-y-5'>
                <div className='space-y-2'>

                  <Input
                    type='text'
                    id='returnDate'
                    disabled
                    className="disabled:bg-secondary"
                    placeholder='mohiuddin@gmail.com'
                  />
                </div>
                {/* Destination Input */}
                <div className='space-y-2'>
                  <Input
                    type='text'
                    id='destination'
                    value={newEventTitle}
                    onChange={e => setNewEventTitle(e.target.value)}
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Textarea
                    type='text'
                    id='description'
                    // onChange={e => setNewEventTitle(e.target.value)}
                    placeholder='Enter Description'
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  className='px-5 py-2 rounded bg-primary text-white dark:text-black'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default FlightSchedule
