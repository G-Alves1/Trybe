const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({ themeReducer, statusReducer });

const store = Redux.createStore(rootReducer);

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_THEME'});
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_STATUS'});
});

store.subscribe(() => {
  const state = store.getState();
  const body = document.querySelector('body');
  const status = document.getElementById('status');

  if (state.themeReducer.theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  } else {
    themeButton.innerText = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }

  if (state.statusReducer.status === 'online') {
    statusButton.innerText = 'Ficar Offline';
    status.innerText = 'Online';
  } else {
    statusButton.innerText = 'Ficar Online';
    status.innerText = 'Offline';
  }
});