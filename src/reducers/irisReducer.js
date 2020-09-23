import { GET_IRISES, GET_IRISES_BY_ID, GET_ALL_SPECIES, GET_IRISES_BY_SPECIES } from "../components/definitions";

const initialState = {
  irises: [],
  iris: {}
};

export default function( state = initialState, action ) {

  switch ( action.type ) {
    case GET_IRISES:
      return {
        ...state,
        irises: action.payload
      };

    case GET_IRISES_BY_ID:
      return {
        ...state,
        iris: action.payload
      };

    case GET_ALL_SPECIES:
      return {
        ...state,
        irises: action.payload
      };

    case GET_IRISES_BY_SPECIES:
      return {
        ...state,
        irises: action.payload
      };

    default:
      return state;
  }
}