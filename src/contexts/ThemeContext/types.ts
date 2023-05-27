export type Mode = 'light' | 'dark';

export type ActionType = 'changeThemeMode';

export type AppState = {
  mode: Mode;
};

export type AppAction = {
  type: ActionType;
  payload: Mode;
};
