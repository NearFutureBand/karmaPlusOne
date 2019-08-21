import { NEW_POST } from '../actions';

const INITIAL_STATE = {
  days: {},
};

/**
 * day: {
 *    timestamp:
 *    posts:
 *    categories:
 *    topPost:
 * }
 */

/**
 * days: {
 *    timestamp: day
 * }
 * 
 */

const getDay = (postTimestamp) => {
  const timeOfThePost = new Date(postTimestamp);
  return new Date(timeOfThePost.toDateString());
}
const dateToTimestamp = (date) => {
  return date - new Date(0);
}

export default (historyReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case NEW_POST: {
      const dayTimestamp = dateToTimestamp(getDay(payload.timestamp));
      const currentDay = { ...state.days[dayTimestamp]};
      if (!currentDay.timestamp) {
        currentDay.timestamp = dayTimestamp;
        currentDay.categories = {};
        currentDay.topPost = 0;
        currentDay.posts = [];
      }
      currentDay.posts = [...currentDay.posts, payload];
      console.log(currentDay);
      return {
        ...state,
        days: {
          ...state.days,
          [dayTimestamp]: currentDay,
        }
      };
    }
    default:
      return state;
  }
});
