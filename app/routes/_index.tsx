import type { LinksFunction } from '@remix-run/node'
import { useState } from 'react'
import stylesUrl from '~/styles/index.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesUrl },
];




export default function Index() {

  const [state, setState] = useState()

  console.log(state.a);
  
  
  return (
    <div>hello this is Index router</div>
  )
}
