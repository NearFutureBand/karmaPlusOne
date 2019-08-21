import { Dimensions } from 'react-native'; // TODO: update when design ready

// Size const
// export const pt = (pt: number = 1): number => pt;

const MOCK_WIDTH = 375; // width from zeplin mockup
export const entireScreenWidth = Dimensions.get('window').width;
export const rem = (remValue) => (remValue * entireScreenWidth) / MOCK_WIDTH; // MAGIC

export const entireScreenHeight = Dimensions.get('window').height;
// 1 vhValue is 1% of screen height
export const vh = (vhValue) => (vhValue * entireScreenHeight) / 100;
