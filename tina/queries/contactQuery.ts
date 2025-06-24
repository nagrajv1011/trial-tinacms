import { gql } from "../__generated__/types";

export const contactQuery = gql`
  query ContactQuery($relativePath: String!) {
    contact(relativePath: $relativePath) {
      title
      sectionTitle
      mapUrl
      departments {
        name
        emails
      }
    }
  }
`;
