export const getItem = (key) => {
  const item = window.localStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item);
};

export const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = key => window.localStorage.removeItem(key);
