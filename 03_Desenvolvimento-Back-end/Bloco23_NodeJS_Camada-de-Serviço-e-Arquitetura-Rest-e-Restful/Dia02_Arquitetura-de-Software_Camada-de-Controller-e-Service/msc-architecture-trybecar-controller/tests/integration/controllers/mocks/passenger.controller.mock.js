const happyTravelDB = {
  id: 3,
  passenger_id: 3,
  driver_id: null,
  travel_status_id: 1,
  starting_address: 'Rua X',
  ending_address: 'Rua Y',
  request_date: '2022-08-28T21:10:35.000Z',
};

const happyPassengerDB = {
  id: 1,
  name: 'Doriana Quintal',
  email: 'doriana.quintal@acme.com',
  phone: '(49) 3882-3117',
};

const happyTravelResponse = {
  id: 3,
  passengerId: 3,
  driverId: null,
  travelStatusId: 1,
  startingAddress: 'Rua X',
  endingAddress: 'Rua Y',
  requestDate: '2022-08-28T21:10:35.000Z',
};

module.exports = {
  happyTravelDB,
  happyPassengerDB,
  happyTravelResponse,
};
