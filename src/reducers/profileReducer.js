import { NEW_POST } from '../actions';

const levels = [
  {
    maxKarma: 69,
    name: 'Chicken',
    avatar: 'https://www.iguides.ru/upload/medialibrary/a7d/a7d6c693958f953a7f8c882b7f78761d.gif',
    description: 'Keep up the good work!',
  }, {
    maxKarma: 71,
    name: 'Pig',
    avatar: 'https://static.tildacdn.com/tild3530-6236-4336-a465-326237336161/1_pChN2LXTXRj5kLCZz1.gif',
    description: 'You are brave!',
  }, {
    maxKarma: 73,
    name: 'Foxy',
    avatar: 'https://www.lifewire.com/thmb/6sbGbNkn2JsJ0RS8Xpn8AuNK83k=/644x644/smart/filters:no_upscale()/iphonex_animoji_fox-59dd137c03f4020010a60b54.gif',
    description: 'Good job!',
  }, {
    maxKarma: 92,
    name: 'Bear',
    avatar: 'https://emojipedia-us.s3.amazonaws.com/content/2018/02/01/bear-animoji-emojipedia.gif',
    description: 'Cool!'
  }
];

const INITIAL_STATE = {
  karma: 67,
};

export default profileReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case NEW_POST: {
      return {
        ...state,
        karma: state.karma + 1,
      }
    }
    default:
      return state;
  }
};

export const selectorGetLevel = (state) => {
  const karma = state.profile.karma;
  for(let i = 0; i < levels.length; i++) {
    if( karma <= levels[i].maxKarma) {
      return levels[i];
    }
  }
}
