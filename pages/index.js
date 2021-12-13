import { gql, useQuery } from '@apollo/client'

const REDWOOD = gql`
  query GetRedwoodVersion {
    redwood {
      version
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(REDWOOD)

  if (loading) return <p>Loading...</p>
  if (error)
    return (
      <p>
        Error: <pre>{JSON.stringify(error, null, 2)}</pre>
      </p>
    )

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
