import { gql } from "../__generated__/types";

export const navbarQuery = gql`
  query NavbarQuery($relativePath: String!) {
    menu(relativePath: $relativePath) {
      title
      showSearch
      logo {
        url
        alt
      }
      links {
        label
        url
        subMenu {
          label
          url
        }
      }
    }
  }
`;