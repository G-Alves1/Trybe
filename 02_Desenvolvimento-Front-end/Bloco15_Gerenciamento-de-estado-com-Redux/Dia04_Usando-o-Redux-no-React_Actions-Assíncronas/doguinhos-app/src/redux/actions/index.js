export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchDogImage() {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => dispatch(requestSuccessful(data.message)))
      .catch((error) => dispatch(requestFailed(error)));
  }
}
