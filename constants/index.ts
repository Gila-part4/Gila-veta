export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const CATEGORIES: string[] = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

export const RATING = [
  { rating: 1, message: '별로에요' },
  { rating: 2, message: '그냥 그래요' },
  { rating: 3, message: '만족해요' },
  { rating: 4, message: '매우 만족해요' },
];
