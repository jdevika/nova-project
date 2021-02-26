import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
                   request:[], 
                   slots:[], 
                   appointments:[],
                   event:[]
                 };
}
callAPI() {
  fetch("http://localhost:8000/pendingrequests")
        .then(res => res.json())
        .then(res => this.setState({ request: res }));
  fetch("http://localhost:8000/appointments")
        .then(res => res.json())
        .then(res => this.setState({ appointments: res}));    
  fetch("http://localhost:8000/slots")
        .then(res => res.json())
        .then(res => this.setState({ slots: res}));
}
componentWillMount() {
    this.callAPI();
}
  render() {   
    console.log(this.state.appointments);
    let requestEvents=this.state.request.map((obj) => 
                        {
                          let d={                  
                            "id": 1,
                            "title": obj.customername,
                            "allDay": true,
                            "start": obj.date+"T"+obj.time,
                            "color":'#8950fc',
                                };
                                return d;
                        });   
    let appEvents=this.state.appointments.map((obj) => 
                        {
                          let d={                  
                            "id": 1,
                            "title": obj.customername,
                            "allDay": true,
                            "start": obj.date+"T"+obj.time,
                            "color":'#32c5d2',
                                };
                                return d;
                        });  
    let slotsEvents=this.state.slots.map((obj) => 
                        {
                          let d={                  
                            "title": "slot",
                            "allDay": true,
                            "start": obj.date+"T"+obj.time,
                            "color":'#3598dc',
                                };
                                return d;
                        });    
      let event = appEvents.concat(requestEvents,slotsEvents) ;

    return (
      <div>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        //displayEventTime= 'false'
        events={event}
      />
    
      </div>
      
    );
  }
}
