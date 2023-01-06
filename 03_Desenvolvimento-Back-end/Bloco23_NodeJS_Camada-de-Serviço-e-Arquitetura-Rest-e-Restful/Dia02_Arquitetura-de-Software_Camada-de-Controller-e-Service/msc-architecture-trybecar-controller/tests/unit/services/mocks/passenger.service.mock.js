const WAITING_DRIVER = 1;

const travelResponse = ({
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: WAITING_DRIVER,
  startingAddress: 'Rua X',
  endingAddress: 'Rua Y',
  requestDate: '2022-08-24T03:04:04.374Z'
});

module.exports = {
  travelResponse,
}