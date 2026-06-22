import { LOCAL_STORAGE_KEY } from '../config/constants';
import type { AppState } from '../types/state';

export const loadState = (): AppState | null => {
  try {
    const serialized = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!serialized) {
      return null;
    }
    return JSON.parse(serialized) as AppState;
  } catch {
    return null;
  }
};

export const saveState = (state: AppState): void => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
};
