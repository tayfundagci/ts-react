import React from 'react'
import BootstrapModal from '../components/BootstrapModal'

type Props = {}

function About({}: Props) {
  return (
    <div className='m-5'>
        <h4>about</h4>
        <div>
          <BootstrapModal title="farukyilmaz" titleNumber={23} />
        </div>
    </div>
  )
}

export default About