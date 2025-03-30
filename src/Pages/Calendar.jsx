import { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useModal } from "../hooks/useModal";
import PageMeta from "../components/common/PageMeta";
import { Modal } from "../components/ui/Modal";

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventLevel, setEventLevel] = useState("");
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const { isOpen, openModal, closeModal } = useModal();

  const calendarsEvents = {
    Danger: "danger",
    Success: "success",
    Primary: "primary",
    Warning: "warning",
  };

  useEffect(() => {
    setEvents([
      {
        id: "1",
        title: "Event Conf.",
        start: new Date().toISOString().split("T")[0],
        extendedProps: { calendar: "Danger" },
      },
      {
        id: "2",
        title: "Meeting",
        start: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        extendedProps: { calendar: "Success" },
      },
      {
        id: "3",
        title: "Workshop",
        start: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        end: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        extendedProps: { calendar: "Primary" },
      },
    ]);
  }, []);

  const handleDateSelect = (selectInfo) => {
    resetModalFields();
    setEventStartDate(selectInfo.startStr);
    setEventEndDate(selectInfo.endStr || selectInfo.startStr);
    openModal();
  };

  const handleEventClick = (clickInfo) => {
    const event = clickInfo.event;
    setSelectedEvent(event);
    setEventTitle(event.title);
    setEventStartDate(event.start?.toISOString().split("T")[0] || "");
    setEventEndDate(event.end?.toISOString().split("T")[0] || "");
    setEventLevel(event.extendedProps.calendar);
    openModal();
  };

  const handleAddOrUpdateEvent = () => {
    if (selectedEvent) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === selectedEvent.id
            ? {
                ...event,
                title: eventTitle,
                start: eventStartDate,
                end: eventEndDate,
                extendedProps: { calendar: eventLevel },
              }
            : event
        )
      );
    } else {
      const newEvent = {
        id: Date.now().toString(),
        title: eventTitle,
        start: eventStartDate,
        end: eventEndDate,
        allDay: true,
        extendedProps: { calendar: eventLevel },
      };
      setEvents((prev) => [...prev, newEvent]);
    }

    closeModal();
    resetModalFields();
  };

  const resetModalFields = () => {
    setEventTitle("");
    setEventStartDate("");
    setEventEndDate("");
    setEventLevel("");
    setSelectedEvent(null);
  };

  return (
    <>
      <PageMeta
        title="Calendar | Admin Panel"
        description="React.js Calendar Dashboard with Tailwind CSS"
      />

      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-white">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next addEventButton",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          customButtons={{
            addEventButton: {
              text: "Add Event +",
              click: openModal,
            },
          }}
        />

        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[700px] p-6 lg:p-10"
        >
          <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
            <div>
              <h5 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
                {selectedEvent ? "Edit Event" : "Add Event"}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Plan and manage your events.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1.5">
                  Event Title
                </label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  className="w-full h-11 px-4 py-2.5 text-sm border rounded-lg shadow-theme-xs bg-transparent text-gray-800 border-gray-300 dark:bg-gray-900 dark:text-white/90 dark:border-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1.5">
                  Event Color
                </label>
                <div className="flex flex-wrap gap-4">
                  {Object.keys(calendarsEvents).map((key) => (
                    <label
                      key={key}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400"
                    >
                      <input
                        type="radio"
                        name="event-level"
                        value={key}
                        checked={eventLevel === key}
                        onChange={() => setEventLevel(key)}
                      />
                      {key}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1.5">
                  Start Date
                </label>
                <input
                  type="date"
                  value={eventStartDate}
                  onChange={(e) => setEventStartDate(e.target.value)}
                  className="w-full h-11 px-4 py-2.5 text-sm border rounded-lg shadow-theme-xs bg-transparent text-gray-800 border-gray-300 dark:bg-gray-900 dark:text-white/90 dark:border-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1.5">
                  End Date
                </label>
                <input
                  type="date"
                  value={eventEndDate}
                  onChange={(e) => setEventEndDate(e.target.value)}
                  className="w-full h-11 px-4 py-2.5 text-sm border rounded-lg shadow-theme-xs bg-transparent text-gray-800 border-gray-300 dark:bg-gray-900 dark:text-white/90 dark:border-gray-700"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 sm:justify-end">
              <button
                onClick={closeModal}
                type="button"
                className="rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                Close
              </button>
              <button
                onClick={handleAddOrUpdateEvent}
                type="button"
                className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm text-white hover:bg-brand-600"
              >
                {selectedEvent ? "Update Changes" : "Add Event"}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

// ⬇️ Custom rendering of event items (with dark theme support)
const renderEventContent = (eventInfo) => {
  const level = eventInfo.event.extendedProps.calendar?.toLowerCase();
  const colorClass = {
    danger: "bg-red-600 text-white",
    success: "bg-green-600 text-white",
    primary: "bg-blue-600 text-white",
    warning: "bg-yellow-500 text-black",
  }[level] || "bg-gray-500 text-white";

  return (
    <div className={`px-2 py-1 rounded-md text-xs ${colorClass}`}>
      {eventInfo.event.title}
    </div>
  );
};

export default Calendar;
