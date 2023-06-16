// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from '../Article/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }) => {
  return <Article key={article.id} article={article} />
}
