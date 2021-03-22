import gql from 'graphql-tag';

const SECTIONS_QUERY = gql`
    query SECTIONS {
        sections {
            id,
            name
        }
    }
`;

export default SECTIONS_QUERY;
