import React, { useEffect, useRef, useState } from 'react';
import "../../../css/Schedule.css";

import Calendar from '@toast-ui/react-calendar';
import 'react-toastify/dist/ReactToastify.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Schedule({ auth }) {
    const calendarRef = useRef(null);
    const [eventCounter, setEventCounter] = useState(1); // Counter for event IDs
    const [currentMonth, setCurrentMonth] = useState('');

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

    const handleViewButtonClick = (view) => {
        const calendarInstance = calendarRef.current.getInstance();
        calendarInstance.changeView(view);
    };

    useEffect(() => {
        // Access the calendar instance using the ref
        const calendarInstance = calendarRef.current.getInstance();

        // Set options for the calendar
        calendarInstance.setOptions({
            useFormPopup: false,
            useCreationPopup: false, // Disable the default creation popup
            useDetailPopup: false,
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
            isReadOnly: true,
        });

        // Change the view to the week view
        calendarInstance.changeView('week');

        // Create the initial event outside useEffect
        const initialEvent = {
            id: `event${eventCounter}`,
            calendarId: `cal${eventCounter}`,
            title: 'Weekly Meeting',
            location: 'UMN',
            attendees: ['7C'],
            start: '2023-11-22T09:00:00',
            end: '2023-11-22T10:00:00',
        };

        // Create the initial event here
        calendarInstance.createEvents([initialEvent]);
        setEventCounter((prevCounter) => prevCounter + 1);

        // Set the current month
        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
        const currentYear = currentDate.getFullYear();
        setCurrentMonth(`${currentMonth} ${currentYear}`);
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

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className='container-toast-ui bg-white'>
                <div className='pt-5 px-5 flex justify-between'>
                    <div className='flex items-center space-x-2'>
                        <button onClick={handleTodayButtonClick}>
                            Today
                        </button>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <button onClick={handlePrevButtonClick}>
                            Previous
                        </button>
                        <div className=''>{currentMonth}</div>
                        <button onClick={handleNextButtonClick}>
                            Next
                        </button>
                    </div>
                    <div className="inline-flex rounded-lg shadow-sm">
                        <button
                            onClick={() => handleViewButtonClick('day')}
                            type="button"
                            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                            Day
                        </button>
                        <button
                            onClick={() => handleViewButtonClick('week')}
                            type="button"
                            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                            Week
                        </button>
                        <button
                            onClick={() => handleViewButtonClick('month')}
                            type="button"
                            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                            Month
                        </button>
                    </div>
                </div>
                <Calendar ref={calendarRef} />
            </div>
        </AuthenticatedLayout>
    )
}
