import '../styles/Footer.css'


export const Footer = () => {
  return (
    <div className="footerContainer">
          <div className='left'>
              <div className="onlineShopping">
                  <h4>SHOPPING ONLINE</h4>
                  <p>Returns</p>
                  <p>Shipping</p>
                  <p>Gift Cards</p>
                  <p>Click and Collect</p>
                  <p>Shop The App</p>
              </div>
              <div className='helpCentre'>
                  <h4>HELP CENTRE</h4>
                  <p>Contact Us</p>
                  <p>Stores</p>
                  <p>FAQ</p>
              </div>
              <div className='about'>
                  <h4>ABOUT US</h4>
                  <p>Our Company</p>
                  <p>FAQ</p>
                  <p>Recruitment</p>
              </div>
      </div>
          
          <div className="right">
        <h3>Join our membership to get 15% sales off</h3>
        <p>
          Become our members and you can receive 10% off* your first full price
          purchase. Discover a world of exclusive rewards and VIP benefits.
              </p>
              <label htmlFor="emailRegis"></label>
              <input type="text" />
              <button>Join</button>
      </div>
    </div>
  )
}
