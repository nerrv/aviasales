export const filterTickets = (tickets, filters) => {
  const filteredTickets = []
  const [all] = filters
  const activeFilters = filters.filter((filter) => filter.checked)
  const ticketsCopy = JSON.parse(JSON.stringify(tickets))

  ticketsCopy.map((ticket) => {
    const stops = ticket.segments[0].stops.length || ticket.segments[1].stops.length
    if (activeFilters.includes(all)) {
      filteredTickets.push(ticket)
    } else if (activeFilters.find((filter) => filter.value === stops)) {
      filteredTickets.push(ticket)
    }
  })
  return filteredTickets
}

export const sortTickets = (tickets, tabs) => {
  const ticketsCopy = JSON.parse(JSON.stringify(tickets))
  const activeTab = tabs.find((tab) => tab.selected === true).name

  switch (activeTab) {
    case 'cheap':
      return ticketsCopy.sort((first, second) => first.price - second.price)
    case 'fast':
      return ticketsCopy.sort(
        (first, second) =>
          first.segments[0].duration +
          first.segments[1].duration -
          (second.segments[0].duration + second.segments[1].duration)
      )
    case 'prime':
      return ticketsCopy.sort((first, second) => first.segments[0].stops.length - second.segments[0].stops.length)
  }
}
