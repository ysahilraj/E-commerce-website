import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce websites is an online platform that facilitate 
            buying and selling of products or services over the internet 
            serves as a virtual marketplace where buissness and individual 
            showcase their products, interact with customers, and conduct
            teansactions without the need for a physical presence. E-commerce websites gained
            immense popularity due to their convention accessibility, and global reach they offer
        </p>
        <p>E-commerce websites typically display products or services and 
            detailed decriptions, images,prices,and any available variety
            (eg., sizes,colores). Each product usually has it own dedication 
            with revelant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
