import create from 'zustand';
import { client } from "../../index";
import { GET_GOODS } from '../../gql/queries';



// Создаем стейт для управления получением всех товаров
const useGoodsStore = create((set) => ({
  goods: [],
  loading: false,
  error: null,
  fetchGoods: async (query) => {
    try {
      set({ loading: true });
      const { data } = await client.query({
        query: GET_GOODS,
        variables: {
            query: JSON.stringify([
              {}     
            ])
          }
      });
      
      set({ goods: data.GoodFind, loading: false, });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useGoodsStore;
