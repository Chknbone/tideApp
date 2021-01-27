// import { Calendar, momentLocalizer  } from 'react-big-calendar';
// import BigCalendar from 'react-big-calendar';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';


// const localizer = momentLocalizer(moment) 

const localizer = Calendar.momentLocalizer(moment); //or globalizeLocalizer
const Calendars = props => {
    
    // Setup the localizer by providing the moment (or globalize) Object
    // to the correct localizer.
    return (
        <div>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                />
        </div>
    )
}

export default Calendars;