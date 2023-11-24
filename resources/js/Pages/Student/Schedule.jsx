import React, { useEffect, useRef, useState } from 'react';
import "../../../css/Schedule.css";

import Calendar from '@toast-ui/react-calendar';
import 'react-toastify/dist/ReactToastify.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Schedule() {
    const calendarRef = useRef(null);
    const [showInfo, setShowInfo] = useState(false);
    const [eventCounter, setEventCounter] = useState(1); // Counter for event IDs

    const handlePrevButtonClick = () => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.prev();
    };

    const handleNextButtonClick = () => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.next();
    };

    const handleTodayButtonClick = () => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.today();
    };

    const handleButton = () => {
        setShowInfo(true);

        // You can set default values for eventStart and eventEnd if needed
        setEventStart(new Date());
        setEventEnd(new Date());
    };

    const handleViewButtonClick = () => {
        const calendarInstance = calendarRef.current.getInstance();
        const currentView = calendarInstance.getViewName();

        if (currentView === 'month') {
            calendarInstance.changeView('week');
        } else if (currentView === 'week') {
            calendarInstance.changeView('day');
        } else if (currentView === 'day') {
            calendarInstance.changeView('month');
        }
    };

    useEffect(() => {
        // Access the calendar instance using the ref
        const calendarInstance = calendarRef.current.getInstance();

        // Set options for the calendar
        calendarInstance.setOptions({
            useFormPopup: true,
            useCreationPopup: true, // Disable the default creation popup
            useDetailPopup: true,
            week: {
                hourStart: 7,
                hourEnd: 18,
                showNowIndicator: true,
                taskView: false,
                eventView: ['time'],
                today: {
                    color: 'blue',
                },
            },
            // isReadOnly: true,
        });

        // Change the view to the week view
        calendarInstance.changeView('week');

        // // Create the initial event outside useEffect
        // const initialEvent = {
        //     id: `event${eventCounter}`,
        //     calendarId: `cal${eventCounter}`,
        //     title: 'Weekly Meeting',
        //     location: 'UMN',
        //     attendees: ['7C'],
        //     start: '2023-11-22T09:00:00',
        //     end: '2023-11-22T10:00:00',
        // };

        // // Create the initial event here
        // calendarInstance.createEvents([initialEvent]);
        // setEventCounter((prevCounter) => prevCounter + 1);

        // Basic example of deleting an event
        calendarInstance.on('beforeDeleteEvent', (event) => {
            calendarInstance.deleteEvent(event.id, event.calendarId);
        });

        calendarInstance.on('clickEvent', (event) => {
            // This function updates the event and closes the popup
            const updateAndClosePopup = (updateInfo) => {
                const { event, changes } = updateInfo;

                calendarInstance.updateEvent(event.id, event.calendarId, {
                    title: changes.title || event.title,
                    state: changes.state || event.state,
                    start: changes.start || event.start,
                    end: changes.end || event.end,
                    // Add other properties you want to update
                });
            };

            // Attach the beforeUpdateEvent handler
            calendarInstance.on('beforeUpdateEvent', updateAndClosePopup);

            // Remove the beforeUpdateEvent handler when the popup is closed or the user clicks away
            const removeUpdateHandler = () => {
                calendarInstance.off('beforeUpdateEvent', updateAndClosePopup);
                calendarInstance.off('click', removeUpdateHandler);

                // Close the popup when the user clicks away or closes it
                calendarInstance.setOptions({
                    useFormPopup: false,
                });
            };

            // Attach an event handler to close the popup when the user clicks away
            calendarInstance.on('click', removeUpdateHandler);
        });

        calendarInstance.on('beforeCreateEvent', (eventObj) => {
            // Calling the instance method when the instance event is invoked
            calendarInstance.createEvents([
                {
                    ...eventObj,
                    id: `event${eventCounter}`,
                    calendarId: `cal${eventCounter}`,
                },
            ]);
            setEventCounter((prevCounter) => prevCounter + 1);
        });

    }, []);

    useEffect(() => {
        const handleResize = () => {
            const calendarInstance = calendarRef.current.getInstance();

            if (window.innerWidth <= 468) {
                // Change the view to day when the screen width is 468px or less
                calendarInstance.changeView('day');
            } else {
                // Change the view back to week for larger screens
                calendarInstance.changeView('week');
            }
        };

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);

        // Call handleResize once to set the initial view based on the screen width
        handleResize();

        // Detach the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const calendarInstance = calendarRef.current.getInstance();

        // Check if the form was submitted
        if (e.target.event_name.value.trim() !== '') {

            const newEvent = {
                id: `event${eventCounter}`,
                calendarId: `cal${eventCounter}`,
                title: e.target.event_name.value,
                location: e.target.event_location.value, // Added location
                attendees: e.target.event_attendees.value.split(','), // Added attendees
                start: new Date(`${e.target.event_start_date.value}T${e.target.event_start_time.value}`).toISOString(),
                end: new Date(`${e.target.event_end_date.value}T${e.target.event_end_time.value}`).toISOString(),
            };

            calendarInstance.createEvents([newEvent]);

            // Increment the eventCounter for the next event
            setEventCounter((prevCounter) => prevCounter + 1);
        }

        // Reset the state, whether the form was submitted or canceled
        setEventStart(null);
        setEventEnd(null);
        setShowInfo(false);
    };
    
    <AuthenticatedLayout>
        <div className='container-toast-ui'>
            <div className='mb-5'>
                <button onClick={handlePrevButtonClick} className='mr-5'>
                    Previous
                </button>
                <button onClick={handleNextButtonClick} className='mr-5'>
                    Next
                </button>
                <button onClick={handleTodayButtonClick} className='mr-5'>
                    Today
                </button>
                <button onClick={handleViewButtonClick} className='mr-5'>
                    Change View
                </button>
                <button
                    onClick={() =>
                        handleButton()
                    }
                >
                    Add
                </button>
            </div>
            {showInfo && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-60"></div>{" "}
                    <div className="relative p-4">
                        <div className="relative bg-white rounded-lg shadow">
                            <button
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-50 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                onClick={() => setShowInfo(false)}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                            <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto lg:py-0">
                                <div className="w-full py-4 md:pr-12 md:max-w-md sm:max-w-sm">
                                    <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                            Add a new Event
                                        </h1>
                                        <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
                                            <div className="grid grid-cols-2 gap-x-4">
                                                <div>
                                                    <label htmlFor="event_name" className="block mb-2 text-sm font-medium text-gray-900">
                                                        Event Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="event_name"
                                                        id="event_name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder="Event Name"
                                                        required=""
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="event_location" className="block mb-2 text-sm font-medium text-gray-900">
                                                        Location
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="event_location"
                                                        id="event_location"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder="Location"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="event_attendees" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Attendees (comma-separated)
                                                </label>
                                                <input
                                                    type="text"
                                                    name="event_attendees"
                                                    id="event_attendees"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                    placeholder="Attendees"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-4">
                                                <div>
                                                    <label htmlFor="event_start" className="block mb-2 text-sm font-medium text-gray-900">
                                                        Start Time
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="event_start_date"
                                                        id="event_start_date"
                                                        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder="Day, Month, Year"
                                                    />
                                                    <input
                                                        type="time"
                                                        name="event_start_time"
                                                        id="event_start_time"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder="Time"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="event_end" className="block mb-2 text-sm font-medium text-gray-900">
                                                        End Time
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="event_end_date"
                                                        id="event_end_date"
                                                        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder="Day, Month, Year"
                                                    />
                                                    <input
                                                        type="time"
                                                        name="event_end_time"
                                                        id="event_end_time"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder="Time"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-primary-600 hover:bg-primary-700 ring-1 focus:outline-none ring-slate-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            >
                                                Add New Event
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Calendar ref={calendarRef} />
        </div>
    </AuthenticatedLayout>
}