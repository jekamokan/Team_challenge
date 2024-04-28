import { gql } from "@apollo/client";

export const GET_GOODS = gql`
    query getGoods($query: String!) {
      GoodFind(query: $query) {
        _id
        name
        description
        price
        images {
          url
        }
        categories {
          _id
          createdAt
          name
        }
      }
    }
  `;