import React from 'react'
import { AppProps } from '../interfaces/Interfaces'


const Message : React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>{message}</div>
  )
}

export default Message;