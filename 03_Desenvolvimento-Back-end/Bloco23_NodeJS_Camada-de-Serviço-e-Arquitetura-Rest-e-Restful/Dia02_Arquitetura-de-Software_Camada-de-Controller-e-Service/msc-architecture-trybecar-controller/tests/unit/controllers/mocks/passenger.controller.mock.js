const happyReqCreateTravelObject = {
  params: {
    passengerId: 42,
  },
  body: {
    startingAddress: 'Rua X',
    endingAddress: 'Rua Y',
    waypoints: [
      {
        address: 'Ponto 01',
        stopOrder: '1',
      },
      {
        address: 'Ponto 02',
        stopOrder: '2',
      },
    ],
  },
};

const happyControllerResponseCreateTravelObject = {
  type: null,
  message: {
    id: 3,
    passengerId: 3,
    driverId: null,
    travelStatusId: 1,
    startingAddress: 'Rua X',
    endingAddress: 'Rua Y',
    requestDate: '2022-08-28T21:10:35.000Z',
  },
};

const happyResponseCreateTravelObject = {
  id: 3,
  passengerId: 3,
  driverId: null,
  travelStatusId: 1,
  startingAddress: 'Rua X',
  endingAddress: 'Rua Y',
  requestDate: '2022-08-28T21:10:35.000Z',
};

module.exports = {
  happyReqCreateTravelObject,
  happyControllerResponseCreateTravelObject,
  happyResponseCreateTravelObject,
};
