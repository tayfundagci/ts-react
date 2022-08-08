import React from 'react'
import BootstrapModal from '../components/BootstrapModal'
import Message from "../components/Message"

type Props = {}

function About({ }: Props) {
  return (
    <div className='m-5'>
      <h4>about</h4>
      <BootstrapModal title="farukyilmaz" titleNumber={23} />
      <Message message="message string type" />
    </div>
  )
}



export default About