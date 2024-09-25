

export const Footer = () => {
  return (
    <div className="flex w-full px-44 font-semibold text-gray-600 bg-gray-200 mx-auto text-xl justify-between my-4 py-3">
          <div className='flex gap-9'>
              <div className="flex flex-col gap-4">
                  <h4>SHOPPING ONLINE</h4>
                  <p>Returns</p>
                  <p>Shipping</p>
                  <p>Gift Cards</p>
                  <p>Click and Collect</p>
                  <p>Shop The App</p>
              </div>
              <div className='flex flex-col gap-4'>
                  <h4>HELP CENTRE</h4>
                  <p>Contact Us</p>
                  <p>Stores</p>
                  <p>FAQ</p>
              </div>
              <div className='flex flex-col gap-4'>
                  <h4>ABOUT US</h4>
                  <p>Our Company</p>
                  <p>FAQ</p>
                  <p>Recruitment</p>
              </div>
      </div>
          
          <div className="max-w-xl">
        <h3>Join our membership to get 15% sales off</h3>
        <p>
          Become our members and you can receive 10% off* your first full price
          purchase. Discover a world of exclusive rewards and VIP benefits.
              </p>
              <label htmlFor="emailRegis"></label>
              <input type="text" className="mt-1 mr-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
              <button className="bg-blue-500 text-white font-bold  px-3 rounded">Join</button>
      </div>
    </div>
  )
}
