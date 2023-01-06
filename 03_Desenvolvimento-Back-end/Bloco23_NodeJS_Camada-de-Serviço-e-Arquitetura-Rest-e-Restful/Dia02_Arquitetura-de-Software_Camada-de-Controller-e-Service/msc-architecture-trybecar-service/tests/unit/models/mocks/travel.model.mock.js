const travelsFromDB = [
  {

    id: 1,
    driver_id: 3,
    passenger_id: 4,
    travel_status_id: 1,
    starting_address: 'Rua XYZ',
    ending_address: 'Rua ABC',
    request_date: '20202',
  },
  {

    id: 2,
    driver_id: 1,
    passenger_id: 2,
    travel_status_id: 2,
    starting_address: 'Rua Alfa',
    ending_address: 'Rua Omega',
    request_date: '20202',
  },
];

const travels = [
  {

    id: 1,
    driverId: 3,
    passengerId: 4,
    travelStatusId: 1,
    startingAddress: 'Rua XYZ',
    endingAddress: 'Rua ABC',
    requestDate: '20202',
  },
  {

    id: 2,
    driverId: 1,
    passengerId: 2,
    travelStatusId: 2,
    startingAddress: 'Rua Alfa',
    endingAddress: 'Rua Omega',
    requestDate: '20202',
  },
];

const travelsUpdated = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  undefined,
]

module.exports = {
  travels,
  travelsFromDB,
  travelsUpdated,
};