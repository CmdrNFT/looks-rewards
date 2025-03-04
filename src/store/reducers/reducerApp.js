const initialState = Object.freeze({
  addresses: {},
  addressParams: '',
  fiatCurrency: 'usd',
  currencyConversion: 1,
  hideTotals: false,
  loading: false
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "clearApp":
      return initialState;
    case "updateAppKey":
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
    return state
  }
}

export default appReducer;


