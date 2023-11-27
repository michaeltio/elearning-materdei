import React, { useEffect, useRef, useState } from 'react';
import "../../../css/Schedule.css";

import Calendar from '@toast-ui/react-calendar';
import 'react-toastify/dist/ReactToastify.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Schedule({ auth }) {
    const calendarRef = useRef(null);
    const [eventCounter, setEventCounter] = useState(1);
    const [currentDateRange, setCurrentDateRange] = useState('');
    const [currentView, setCurrentView] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    const [eventStart, setEventStart] = useState(null);
    const [eventEnd, setEventEnd] = useState(null);

    const updateDateRange = () => {
        const calendarInstance = calendarRef.current.getInstance();
        const getDate = calendarInstance.getDate().toDate();

        const options = { month: 'long', year: 'numeric' };

        const formattedDate = getDate.toLocaleDateString('en-US', options);

        setCurrentDateRange(`${formattedDate}`);
    };

    const updateCurrentView = () => {
        const calendarInstance = calendarRef.current.getInstance();
        const view = calendarInstance.getViewName();
        setCurrentView(view);
    };

    const handlePrevButtonClick = () => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.prev();
        updateDateRange();
        updateCurrentView();
    };

    const handleNextButtonClick = () => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.next();
        updateDateRange();
        updateCurrentView();
    };

    const handleTodayButtonClick = () => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.today();
        updateDateRange();
        updateCurrentView();
    };

    const handleViewButtonClick = (view) => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.changeView(view);
        updateDateRange();
        updateCurrentView();
    };

    const handleButton = () => {
        setShowInfo(true);

        // You can set default values for eventStart and eventEnd if needed
        setEventStart(new Date());
        setEventEnd(new Date());
    };

    useEffect(() => {
        const calendarInstance = calendarRef.current.getInstance();

        calendarInstance.setOptions({
            useFormPopup: true,
            useCreationPopup: true,
            useDetailPopup: true,
            week: {
                hourStart: 6,
                hourEnd: 19,
                taskView: false,
                eventView: ['time'],
                today: {
                    color: 'blue',
                },
            },
            isReadOnly: false,
        });

        calendarInstance.changeView('week');

        // const initialEvent = [
        //     {
        //         id: `event${eventCounter}`,
        //         calendarId: `cal${eventCounter}`,
        //         title: 'Weekly Meeting',
        //         location: 'UMN',
        //         attendees: ['7C'],
        //         start: '2023-11-27T09:00:00',
        //         end: '2023-11-27T10:00:00',
        //     },
        // ];

        calendarInstance.createEvents([
            {
                id: `event1`,
                calendarId: `cal1`,
                title: 'Event Title1',
                location: 'UMN',
                attendees: ['7C'],
                start: '2023-11-27T09:00:00',
                end: '2023-11-27T10:00:00',
            },
            {
                id: `event2`,
                calendarId: `cal2`,
                title: 'Event Title2',
                location: 'UMN',
                attendees: ['7C'],
                start: '2023-11-28T09:00:00',
                end: '2023-11-28T10:00:00',
            },
            {
                id: `event3`,
                calendarId: `cal3`,
                title: 'Event Title3',
                location: 'UMN',
                attendees: ['7C'],
                start: '2023-11-29T09:00:00',
                end: '2023-11-29T10:00:00',
            },
            {
                id: `event4`,
                calendarId: `cal4`,
                title: 'Event Title4',
                location: 'UMN',
                attendees: ['7C'],
                start: '2023-11-30T09:00:00',
                end: '2023-11-30T10:00:00',
            },
            {
                id: `event5`,
                calendarId: `cal5`,
                title: 'Event Title5',
                location: 'UMN',
                attendees: ['7C'],
                start: '2023-12-01T09:00:00',
                end: '2023-12-01T10:00:00',
            }
        ]);

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
            setShowInfo(false);
        });

        updateDateRange();
        updateCurrentView();

    }, []);

    useEffect(() => {
        const handleResize = () => {
            const calendarInstance = calendarRef.current.getInstance();

            if (window.innerWidth <= 468) {
                calendarInstance.changeView('day');
            } else {
                calendarInstance.changeView('week');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
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

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className='container-toast-ui bg-white'>
                <div className='pt-3 sm:pt-5 px-5 flex justify-between'>
                    <div className='flex items-center space-x-1 sm:space-x-4'>
                        <button
                            onClick={handlePrevButtonClick}
                            type="button"
                            className="rounded-full p-2.5 items-center"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                            >
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F">
                                </path>
                            </svg>
                        </button>
                        <span className='font-medium text-sm sm:text-md md:text-lg'>{currentDateRange}</span>
                        <button
                            onClick={handleNextButtonClick}
                            type="button"
                            className="rounded-full p-2.5 items-center"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                            >
                                <path
                                    d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                                    fill="#0F0F0F"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <button
                            className='py-2 px-3 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 ms-px rounded-md text-xs sm:text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm bg-gray-50 hover:bg-white hover:text-blue-500'
                            onClick={() =>
                                handleButton()
                            }
                        >
                            Add
                        </button>
                        <button
                            onClick={handleTodayButtonClick}
                            className='py-2 px-3 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 ms-px rounded-md text-xs sm:text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm bg-gray-50 hover:bg-white hover:text-blue-500'
                        >
                            Today
                        </button>
                        <div className="inline-flex rounded-lg shadow-sm triple-view-button">
                            <button
                                onClick={() => handleViewButtonClick('day')}
                                type="button"
                                className={`py-2 px-3 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs sm:text-sm font-medium focus:z-10 border ${currentView === 'day' ? 'bg-white text-blue-500' : 'border-gray-200 text-gray-800 shadow-sm bg-gray-50'}`}
                            >
                                Day
                            </button>
                            <button
                                onClick={() => handleViewButtonClick('week')}
                                type="button"
                                className={`py-2 px-3 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs sm:text-sm font-medium focus:z-10 border ${currentView === 'week' ? 'bg-white text-blue-500' : 'border-gray-200 text-gray-800 shadow-sm bg-gray-50'}`}
                            >
                                Week
                            </button>
                            <button
                                onClick={() => handleViewButtonClick('month')}
                                type="button"
                                className={`py-2 px-3 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs sm:text-sm font-medium focus:z-10 border ${currentView === 'month' ? 'bg-white text-blue-500' : 'border-gray-200 text-gray-800 shadow-sm bg-gray-50'}`}
                            >
                                Month
                            </button>
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
                        </div>
                    </div>
                </div>
                <Calendar ref={calendarRef} />
            </div>

        </AuthenticatedLayout >
    );
}
