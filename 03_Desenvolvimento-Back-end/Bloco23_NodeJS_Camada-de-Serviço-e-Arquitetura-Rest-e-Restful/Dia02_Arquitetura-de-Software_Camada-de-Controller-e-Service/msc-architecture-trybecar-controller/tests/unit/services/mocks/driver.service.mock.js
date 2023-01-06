const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const correctReturnTravel = ({
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
});

const busyDriver = ({
  id: 1,
  passengerId: 1,
  driverId: 1,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
});

const correctReturnDriver = ({
  id: 1,
  name: 'drivers name',
  carId: 1,
});

module.exports = {
  correctReturnTravel,
  busyDriver,
  correctReturnDriver,
};