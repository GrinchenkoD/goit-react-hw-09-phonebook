const getIsAuthSelector = (state) => state.auth.isAuthenticated;
const getNameSelector = (state) => state.auth.user.name;

export { getIsAuthSelector, getNameSelector };
