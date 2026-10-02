/*
* Purpose: Working with objects - logging, updating, removing and 
*          adding object members of an event attendance object
* Owner: Brian Karimi
* Course: SDPT016 
* Date: 1st October, 2026
* Last Modified: 18:36 hrs
*/

const attendee = {
  attendeeId : "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

// Utility: logs the name of the attendee to
//          the console
// Params: attendee (object)
function logAttendeeName(attendee){
  console.log(attendee.name);
}

// Utility: logs the price of the attendee to
//          the console
// Params: attendee (object)
function logTicketPrice(attendee){
  console.log(attendee.ticketPrice);
}

// Utility: updates the ticket type of the
//          attendee
// Params: ticketType (string)
function updateTicketType(ticketType){
  attendee[ticketType] = ticketType;
}

// Utility: updates the ticket price of the
//          attendee
// Params: ticketPrice (number)
function updateTicketPrice(ticketPrice){
  attendee[ticketPrice] = ticketPrice;
}

// Utility: removes a property from the object
// Params: event (string)
function removeEventProperty(event){
  delete attendee[event];
}

// Utility: adds a property to the attendee object
// Params: attendee (object)
function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};