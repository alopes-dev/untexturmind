import { FC } from 'react'
import Head from 'next/head'

import { Container } from '@styles/pages/Main'

const Main: FC = () => {
  return (
    <Container>
      <Head>
        <title>UnTextUrMind</title>
      </Head>

      <main>
        <h1>UnTextUrMind</h1>
      </main>
    </Container>
  )
}

export default Main
