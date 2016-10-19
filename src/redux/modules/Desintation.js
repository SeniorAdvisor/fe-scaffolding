// Actions:
const LOAD = 'AUSTIN-ASSISTED-LIVING-LOAD';
const LOAD_SUCCESS = 'AUSTIN-ASSISTED-LIVING-LOAD_SUCCESS';
const LOAD_FAIL = 'AUSTIN-ASSISTED-LIVING-LOAD_FAIL';

// INITIAL STATE
const initialState = {
  loaded: false,
  editing: {},
  saveError: {}
};

// REDUCER
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
	case LOAD:
	  return {
		...state,
		loading: true
	  };
	case LOAD_SUCCESS:
	  return {
		...state,
		loading: false,
		loaded: true,
		data: action.result,
		error: null
	  };
	case LOAD_FAIL:
	  return {
		...state,
		loading: false,
		loaded: false,
		data: null,
		error: action.error
	  };
	/*case EDIT_START:
	  return {
		...state,
		editing: {
		  ...state.editing,
		  [action.id]: true
		}
	  };
	case EDIT_STOP:
	  return {
		...state,
		editing: {
		  ...state.editing,
		  [action.id]: false
		}
	  };
	case SAVE:
	  return state; // 'saving' flag handled by redux-form
	case SAVE_SUCCESS:
	  const data = [...state.data];
	  data[action.result.id - 1] = action.result;
	  return {
		...state,
		data: data,
		editing: {
		  ...state.editing,
		  [action.id]: false
		},
		saveError: {
		  ...state.saveError,
		  [action.id]: null
		}
	  };
	case SAVE_FAIL:
	  return typeof action.error === 'string' ? {
		...state,
		saveError: {
		  ...state.saveError,
		  [action.id]: action.error
		}
	  } : state;*/
	default:
	  return state;
  }
}


// ACTION CREATORS
export function isLoaded(globalState) {
  return globalState.destination && globalState.destination.loaded;
}

export function load() {
  return {
	types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
	promise: (client) => client.get('/assisted-living/austin/') // params not used, just shown as
	// demonstration
  };
}
