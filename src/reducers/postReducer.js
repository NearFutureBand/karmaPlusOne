import { CHANGE_TEXT, NEW_POST, CLEAR_TEXT_INPUT, CHANGE_CATEGORY } from '../actions';

export const selectorCategories = [
  'Select where❓',
  'Family👨‍👩‍👧‍👦',
  'Social💁‍♂️💁‍♀️',
  'Work🏬👨‍💻👩‍💻',
  'Animals🐶🐱',
  'Planet care🌍🌎',
  'Other👻👽'
];

const INITIAL_STATE = {
  text: '',
  timestamp: 0,
  category: selectorCategories[0],
};

export default postReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_TEXT: {
      return {
        ...state,
        text: payload,
      };
    }
    case NEW_POST: {
      return {
        ...state,
      }
    }
    case CHANGE_CATEGORY: {
      return {
        ...state,
        category: payload,
      }
    }
    case CLEAR_TEXT_INPUT: {
      return {
        ...state,
        text: '',
        category: {},
      }
    }
    default:
      return state;
  }
};
