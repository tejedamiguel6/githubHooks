import Head from 'next/head'
import { Fragment } from 'react'
import Popular from '../components/Popular'

export default function Home() {
  return (
    <Fragment>
      <h1>Github Battle</h1>

      <div>
        <h3>Pick a Language</h3>

        <Popular />
      </div>
    </Fragment>
  )
}
