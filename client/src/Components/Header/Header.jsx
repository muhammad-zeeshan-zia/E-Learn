// import React from 'react'
// import '../Header/Header.css'
// export default function Header() {
//   return (
//    <>
//    <div className="header">
//     <div className="headerTitles">
//         <span className='headerTitleSm'>React</span>
//         <span className='headerTitleLg'>Blog</span>
//     </div>
//     <img
//         className="headerImg"
//         src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjQ5OS1rdWwtMTAtYWJzdHJhY3RiYWNrZ3JvdW5kXzEuanBn.jpg?s=Dm5r0ZeQ4KBV6-BNplcjk9ZE2oe7vxaY93b22HoHkEg"
//         // https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//         alt=""
//       />
//    </div>
//    </>
//   )
// }
import React from 'react';
import '../Header/Header.css';
import shop from '../../../src/assets/shop.png'

export default function Header() {
  return (
    <div className="header">
      <img
        className="header-image"
        src="https://img.freepik.com/premium-photo/modern-brick-wall-3d-rendering_118019-218.jpg"
        alt=""
      />
      <div className="header-content">
        <p className='main-header-line'>Discover a World of Movies</p> <p className='secondary-header-line'> Your ticket to the silver screen's universe</p>
      </div>
      <img className='header-shop-image' src={shop} alt="" />
      <button className='header-button'>Discover Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  );
}
