export default {
  namespace: 'products', /*表示全局state上的key */
  state: [], /*表示初始值，这里是空数组*/
  reducers: {
    /*reducers等同于redux里面的reducer,接受action,同步更新state*/
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id);
    },
  },
};
