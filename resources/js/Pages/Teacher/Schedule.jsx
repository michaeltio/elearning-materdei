import React, { useEffect, useRef, useState } from 'react';
import "../../../css/Schedule.css";

import Calendar from '@toast-ui/react-calendar';
import 'react-toastify/dist/ReactToastify.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Filter from '../../../../public/Assets/filter.svg';
import Add from '../../../../public/Assets/add.svg';

import axios from 'axios';

export default function Schedule({ auth }) {
    const calendarRef = useRef(null);
    const [currentDateRange, setCurrentDateRange] = useState('');
    const [currentView, setCurrentView] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    const [eventStart, setEventStart] = useState(null);
    const [eventEnd, setEventEnd] = useState(null);

    const [isPopUpClass, setIsPopUpClass] = useState(false);
    const [isEventPopUpDesc, setIsEventPopUpDesc] = useState(false);
    const [isEventPopUpEdit, setIsEventPopUpEdit] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEventPopUpDelete, setIsEventPopUpDelete] = useState(false);

    const [events, setEvents] = useState([]);

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

    const handlePopUpClass = () => { setIsPopUpClass(!isPopUpClass) };

    const handleEventButtonEdit = () => {
        setIsEventPopUpDesc(!isEventPopUpDesc);
        setIsEventPopUpEdit(!isEventPopUpEdit);
    };
    const handleEventButtonDelete = () => {
        setIsEventPopUpDelete(!isEventPopUpDelete);
    };

    useEffect(() => {
        const calendarInstance = calendarRef.current.getInstance();
        // calendarInstance.clear(); // Clear existing events

        calendarInstance.setOptions({
            useFormPopup: false,
            useCreationPopup: false,
            useDetailPopup: false,
            disableDblClick: false,
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

        // const initialEvent = {
        //     id: `event1`,
        //     calendarId: `cal1`,
        //     title: 'Weekly Meeting',
        //     location: 'UMN',
        //     attendees: ['7C'],
        //     start: '2023-11-30T11:00:00',
        //     end: '2023-11-30T15:00:00',
        // };

        // // Create the initial event here
        // calendarInstance.createEvents([initialEvent]);

        const userClassId = '7a'; // replace this with your actual logic to get user's classId

        // Make an API request to fetch events based on the user's classId
        axios.get(`/api/showEvent/${userClassId}`)
            .then(response => {
                const fetchedEvents = response.data;
                setEvents(fetchedEvents);

                // Assuming calendarInstance is the instance of your Toast UI calendar
                fetchedEvents.forEach(eventData => {
                    calendarInstance.createEvents([{
                        id: eventData.id,
                        calendarId: eventData.classId,
                        title: eventData.title,
                        location: eventData.location,
                        attendees: eventData.attendees,
                        start: eventData.start_date,
                        end: eventData.end_date,
                    }]);
                });
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });

        calendarInstance.on('clickEvent', (event) => {
            const eventDesc = calendarInstance.getEvent(event.event.id, event.event.calendarId);
            console.log('Selected Event:', eventDesc);
            setSelectedEvent(eventDesc);
            setIsEventPopUpDesc(!isEventPopUpDesc);
        });

        updateDateRange();
        updateCurrentView();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const newEventForm = {
            classId: e.target.event_classes.value,
            title: e.target.event_name.value,
            location: e.target.event_location.value,
            attendees: e.target.event_classes.value,
            start_date: new Date(`${e.target.event_start_date.value}T${e.target.event_start_time.value}`).toISOString(),
            end_date: new Date(`${e.target.event_end_date.value}T${e.target.event_end_time.value}`).toISOString(),
        };

        if (e.target.event_name.value.trim() !== '') {
            try {
                const response = await axios.post('/api/scheduleEvent', newEventForm);

                // Handle the response as needed
                console.log(response.data);

                // Clear form and any other necessary state updates
                setEventStart(null);
                setEventEnd(null);
                setShowInfo(false);
            } catch (error) {
                // Handle errors
                console.error('Error creating event:', error);
            }
        }
    };

    const handleUpdateFormSubmit = async (e, eventId, classId) => {
        e.preventDefault();

        const formatDate = (date, time) => {
            const formattedDate = new Date(`${date}T${time}`);
            return formattedDate.toISOString();
        };

        const updatedEventForm = {
            classId: e.target.event_classes.value,
            title: e.target.event_name.value,
            location: e.target.event_location.value,
            attendees: e.target.event_classes.value,
            start_date: formatDate(e.target.event_start_date.value, e.target.event_start_time.value),
            end_date: formatDate(e.target.event_end_date.value, e.target.event_end_time.value),
        };

        try {
            const response = await axios.post(`/api/updateEvent/${eventId}/${classId}`, updatedEventForm);

            // Handle the response as needed
            console.log(response.data);

            // Clear form and any other necessary state updates
            setIsEventPopUpEdit(false);
        } catch (error) {
            // Handle errors
            console.error('Error updating event:', error);
        }
    };



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

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className='container-toast-ui bg-white'>
                <div className='pt-3 sm:pt-5 px-5 flex flex-col md:flex-row justif-center sm:justify-between '>
                    <div className='flex items-center justify-center space-x-1 sm:space-x-4 sm:mb-3'>
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
                    <div className='flex items-center justify-center space-x-4'>
                        <button
                            className='py-2 px-4 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 ms-px rounded-md text-xs sm:text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm bg-gray-50 hover:bg-white hover:text-blue-500'
                            onClick={() => handlePopUpClass()}
                        >
                            <img src={Filter} className='w-4 h-4' />
                            Class
                        </button>

                        <button
                            className='py-2 px-4 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 ms-px rounded-md text-xs sm:text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm bg-gray-50 hover:bg-white hover:text-blue-500'
                            onClick={() =>
                                handleButton()
                            }
                        >
                            <img src={Add} className='w-4 h-4' />
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
                        </div>
                    </div>
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
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                                <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto lg:py-0">
                                    <div className="w-full py-4 md:pr-12 md:max-w-md sm:max-w-sm">
                                        <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                                Add a new Event
                                            </h1>
                                            <form
                                                className="space-y-4 md:space-y-6"
                                                method="post"
                                                action="api/scheduleEvent"
                                                onSubmit={handleFormSubmit}
                                            >
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
                                                    <label htmlFor="event_classes" className="block mb-2 text-sm font-medium text-gray-900">
                                                        Class (comma-seperated)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="event_classes"
                                                        id="event_classes"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder="Class.."
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
                {isEventPopUpDesc && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 bg-black opacity-60"></div>{" "}
                        <div className="relative">
                            <div className="relative bg-white rounded-lg shadow px-7">
                                <button
                                    type="button"
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-50 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                    onClick={() => setIsEventPopUpDesc(false)}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                                    {selectedEvent && (
                                        <div>
                                            <p className='text-3xl font-bold pb-3'>{selectedEvent.title}</p>
                                            <p>Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {selectedEvent.location}</p>
                                            <p>Attendees&nbsp;&nbsp;&nbsp;: {selectedEvent.attendees}</p>
                                            <p>Start Date&nbsp;&nbsp;&nbsp;: {new Date(selectedEvent.start.d).toLocaleString()}</p>
                                            <p>End Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {new Date(selectedEvent.end.d).toLocaleString()}</p>
                                            {/* Display other event details as needed */}
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center space-x-4 pb-4">
                                    <button
                                        onClick={() => handleEventButtonEdit()}
                                        type="button"
                                        className='py-2 px-4 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 ms-px rounded-md text-xs sm:text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm bg-gray-50 hover:bg-white hover:text-blue-500'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleEventButtonDelete()}
                                        type="button"
                                        className='py-2 px-4 sm:py-3 sm:px-4 inline-flex items-center gap-x-2 ms-px rounded-md text-xs sm:text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm bg-gray-50 hover:bg-white hover:text-blue-500'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isEventPopUpEdit && selectedEvent && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 bg-black opacity-60"></div>{" "}
                        <div className="relative p-4">
                            <div className="relative bg-white rounded-lg shadow">
                                <button
                                    type="button"
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-50 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                    onClick={() => setIsEventPopUpEdit(false)}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                                <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto lg:py-0">
                                    <div className="w-full py-4 md:pr-12 md:max-w-md sm:max-w-sm">
                                        <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                                Edit the Event
                                            </h1>
                                            <form
                                                className="space-y-4 md:space-y-6"
                                                onSubmit={(e) => handleUpdateFormSubmit(e, selectedEvent.id, selectedEvent.calendarId)}
                                            >
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
                                                            placeholder={selectedEvent.title}
                                                            defaultValue={selectedEvent.title}
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
                                                            placeholder={selectedEvent.location}
                                                            defaultValue={selectedEvent.location}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="event_classes" className="block mb-2 text-sm font-medium text-gray-900">
                                                        Class (comma-seperated)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="event_classes"
                                                        id="event_classes"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                        placeholder={selectedEvent.attendees}
                                                        defaultValue={selectedEvent.attendees}
                                                        required=""
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
                                                            defaultValue={new Date(selectedEvent.start.d).toISOString().split('T')[0]} // Extract date part
                                                            required=""
                                                        />
                                                        <input
                                                            type="time"
                                                            name="event_start_time"
                                                            id="event_start_time"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                            defaultValue={new Date(selectedEvent.start.d).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })} // Extract time part
                                                            required=""
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
                                                            defaultValue={new Date(selectedEvent.end.d).toISOString().split('T')[0]} // Extract date part
                                                            required=""
                                                        />
                                                        <input
                                                            type="time"
                                                            name="event_end_time"
                                                            id="event_end_time"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                                                            defaultValue={new Date(selectedEvent.end.d).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })} // Extract time part
                                                            required=""
                                                        />
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="w-full bg-primary-600 hover:bg-primary-700 ring-1 focus:outline-none ring-slate-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                >
                                                    Edit the Event
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isPopUpClass && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 bg-black opacity-60"></div>
                        <div className="relative p-4">
                            <div className="relative bg-white rounded-lg shadow">
                                <button
                                    type="button"
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-50 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                    onClick={() => setIsPopUpClass(false)}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeinecap="round" strokelinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                                    <div className="w-full pb-4 md:pr-8 md:max-w-md sm:max-w-sm">
                                        <div className="z-10">
                                            <div className="">
                                                <ul className="py-2 text-sm text-gray-700 grid grid-cols-3">
                                                    {["7", "8", "9"].map((classHeader) => (
                                                        <li key={classHeader}>
                                                            <a href="#" className="block p-3">
                                                                {classHeader}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <ul className="py-2 text-sm items-center text-gray-700 grid grid-cols-3">
                                                {["7", "8", "9"].map((classHeader) => (
                                                    <li key={classHeader}>
                                                        {Array.from({ length: 6 }, (_, index) => (
                                                            <a
                                                                href="#"
                                                                key={`${classHeader}${String.fromCharCode(97 + index)}`}
                                                                className="block p-3 hover:bg-gray-100 rounded-full"
                                                            >
                                                                {classHeader + String.fromCharCode(97 + index)}
                                                            </a>
                                                        ))}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isEventPopUpDelete && (
                    <div className="min-w-screen h-screen animated fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
                        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                            <div className="">
                                <div className="text-center p-5 flex-auto justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <p className="text-xl font-bold py-4">Are you sure?</p>
                                    <p className="text-sm text-gray-500 px-8">Do you really want to delete this event?
                                        This process cannot be undone</p>
                                </div>
                                <div className="p-3  mt-2 text-center space-x-4 md:block">
                                    <button
                                        className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                                        onClick={() => {
                                            setIsEventPopUpDelete(false);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                                        onClick={() => {
                                            setIsEventPopUpDelete(false);
                                            setIsEventPopUpDesc(false);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Calendar ref={calendarRef} />
            </div>
        </AuthenticatedLayout >
    );
}

// calendarInstance.on('beforeDeleteEvent', (event) => {
//     calendarInstance.deleteEvent(event.id, event.calendarId);
// });

// calendarInstance.on('clickEvent', (event) => {
//     calendarInstance.setOptions({
//         useFormPopup: true,
//     });

//     // This function updates the event and closes the popup
// const updateAndClosePopup = (updateInfo) => {
//     const { event, changes } = updateInfo;

//     calendarInstance.updateEvent(event.id, event.calendarId, {
//         title: changes.title || event.title,
//         state: changes.state || event.state,
//         start: changes.start || event.start,
//         end: changes.end || event.end,
//         // Add other properties you want to update
//     });
// };

//     // Attach the beforeUpdateEvent handler
//     calendarInstance.on('beforeUpdateEvent', updateAndClosePopup);

//     // Remove the beforeUpdateEvent handler when the popup is closed or the user clicks away
//     const removeUpdateHandler = () => {
//         calendarInstance.off('beforeUpdateEvent', updateAndClosePopup);
//         calendarInstance.off('click', removeUpdateHandler);

//         // Close the popup when the user clicks away or closes it
//         calendarInstance.setOptions({
//             useFormPopup: false,
//         });
//     };

//     // Attach an event handler to close the popup when the user clicks away
//     calendarInstance.on('click', removeUpdateHandler);
// });