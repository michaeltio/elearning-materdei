import React, { useEffect, useRef, useState } from 'react';
import "../../../css/Schedule.css";

import Calendar from '@toast-ui/react-calendar';
import 'react-toastify/dist/ReactToastify.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import axios from 'axios';

export default function Schedule({ auth, user }) {
    const calendarRef = useRef(null);
    const [currentDateRange, setCurrentDateRange] = useState('');
    const [currentView, setCurrentView] = useState('');

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
            isReadOnly: true,
        });

        calendarInstance.changeView('week');

        // // replace this with your actual logic to get user's classId
        // const userRole = 'teacher';

        // // Make an API request to fetch events based on the user's classId
        // axios.get(`/api/showEventTeacher/${userRole}`)
        //     .then(response => {
        //         const fetchedEvents = response.data;
        //         setEvents(fetchedEvents);

        //         // Assuming calendarInstance is the instance of your Toast UI calendar
        //         fetchedEvents.forEach(eventData => {
        //             calendarInstance.createEvents([{
        //                 id: eventData.id,
        //                 calendarId: eventData.role,
        //                 title: eventData.title,
        //                 location: eventData.location,
        //                 attendees: eventData.attendees,
        //                 start: eventData.start_date,
        //                 end: eventData.end_date,
        //             }]);
        //         });
        //     })
        //     .catch(error => {
        //         console.error('Error fetching events:', error);
        //     });

        // Create the initial event here
        calendarInstance.createEvents([
            {
                id: '1',
                calendarId: 'teacher',
                title: 'Jadwal Guru (1)',
                location: 'Kelas 7a',
                attendees: ['7A'],
                start: new Date('2023-12-06T08:00:00'),
                end: new Date('2023-12-06T10:00:00'),
            },
            {
                id: '2',
                calendarId: 'teacher',
                title: 'Jadwal Guru (2)',
                location: 'Kelas 8b',
                attendees: ['8B'],
                start: new Date('2023-12-06T10:00:00'),
                end: new Date('2023-12-06T12:00:00'),
            },
            {
                id: '3',
                calendarId: 'teacher',
                title: 'Jadwal Guru (3)',
                location: 'Kelas 8f',
                attendees: ['8F'],
                start: new Date('2023-12-06T13:00:00'),
                end: new Date('2023-12-06T15:00:00'),
            },
        ]);

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
                <Calendar ref={calendarRef} />
            </div>
        </AuthenticatedLayout >
    );
}