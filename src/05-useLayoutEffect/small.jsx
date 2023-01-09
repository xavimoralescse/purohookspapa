import { memo } from "react"

export const Small = memo(( {value}) => {
  console.log('Quiero culear');
  return (
    <small>{value} </small>
  )
} )
