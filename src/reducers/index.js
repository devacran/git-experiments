const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_MY_WISH__LIST_ITEM':
      action.payload.isFavorite = true

      return {
        ...state,
        myWishList: [...state.myWishList, action.payload],
        productList: state.productList.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavorite: true,
            }
          }
          return {
            ...item,
          }
        }),
      }
    case 'DELETE_MY_WISH_LIST_ITEM':
      return {
        ...state,
        myWishList: state.myWishList.filter(item => item.id !== action.payload),
        productList: state.productList.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              isFavorite: false,
            }
          }
          return {
            ...item,
          }
        }),
      }
    default:
      return state
  }
}

export default reducers
