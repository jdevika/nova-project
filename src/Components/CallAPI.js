export default function callAPI() {
    let requestCount=0;
    let customerCount=0;
    let slotsCount=0;
    let appointmentCount=0;   
    fetch("http://localhost:8000/pendingrequests")
          .then(res => res.json())
          .then(res => (requestCount=res.length));
    fetch("http://localhost:8000/customerscount")
          .then(res => res.json())
          .then(res => (customerCount=res.length));
    fetch("http://localhost:8000/appointments")
          .then(res => res.json())
          .then(res => (appointmentCount=res.length));  
    fetch("http://localhost:8000/slots")
          .then(res => res.json())
          .then(res => (slotsCount=res.length));  
          console.log(requestCount);
  }