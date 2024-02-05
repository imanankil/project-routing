import EventItem from "./event-items";

function EventList(props) {
    const { items } = props;
    
    return <ul>
        {items.map(event => <EventItem/>)}
     </ul>
    
}

export default EventList;