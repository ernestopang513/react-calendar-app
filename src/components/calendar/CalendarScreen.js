import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2,'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar pastel',
    user:{
        _id: '123',
        name: 'Ernesto'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView')|| 'month')

    const onDoubleClick = (e) => {
        console.log(e);
    }
    const onSelectEvent = (e) => {
        console.log(e);
    }
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView',e);
        console.log(e)
    }


    const eventStyleGetter = (event, start, end,isSelected) => {
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity:0.8,
            color:'white'
        }
        return {
            style
        }
    }
    return (
        <div>
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages = {messages}
                eventPropGetter = {eventStyleGetter}
                onDoubleClickEvent = {onDoubleClick}
                onSelectEvent = {onSelectEvent}
                onView = {onViewChange}
                view = {lastView}
                components={{
                    event: CalendarEvent
                }}
            />
        </div>
    )
}
