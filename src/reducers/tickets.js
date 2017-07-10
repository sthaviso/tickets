/**
 * Created by sthavisomboon on 6/29/17.
 */
// tickets reducer
export default function tickets(state = [], action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      return action.tickets.map((ticket, index) => {
          ticket.clicked = (index === 0);
          return ticket;
        });
    case 'CLICK_TICKET':
      return state.map(ticket => {
          ticket.clicked = (ticket.id === action.id);
          return ticket;
        });
    // initial state
    default:
      return state;
  }
}

export const getSelectedTicket = (state) => {
  return state ? state.find(ticket => ticket.clicked) : undefined;
}

export const getMainTickets = (state = []) => {
  return state.filter(ticket => ticket.id === ticket.parentId);
}



