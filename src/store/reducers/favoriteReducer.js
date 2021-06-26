import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favoriteActions"
import { favoriteItems } from "../initialValues/favoriteItems";

const initialState = {
  favoriteItems: favoriteItems,
};

export default function favoriteReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAVORITE:
      let jobAdvert = state.favoriteItems.find((j) => j.jobAdvert.id === payload.id);
      if (jobAdvert) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, { jobAdvert: payload }],
        };
      }

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter((j) => j.jobAdvert.id !== payload.id),
      };
    default:
      return state;
  }
}