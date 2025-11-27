import React from 'react'
import Sign from '../assets/Sign.webp'

export default function Signin() {
  return (
    <div className='top'>
      <img src={Sign} className='img' />
      <div className='top2'>
      <h1>login</h1><br />
      <h2>E-mail</h2> <br/>
      <h3>Enter an email address</h3> <br />
      <input type="text" placeholder='Enter a Email' className='box' /><br /><br />
      <button className='btn'>NEXT</button> <br /> <br />
      <h3>It's Better  when your in Sign in</h3>
      <ul >
      <li>Exclusive Deals and Sporty Rewards</li>
      <li> Personalised Experiences</li> 
      <li>Faster Checkout</li>
      <li>Easy Returns/Exchange</li>
      </ul>
</div>
    </div>
  )
} 
