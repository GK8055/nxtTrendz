// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.map(each => {
        total += each.price * each.quantity
      })
      let count = cartList.length
      return (
        <div className="summary_container">
          <h1 className="total_text">
            Order Total: <span className="total_rate">Rs {total}/-</span>{' '}
          </h1>
          <p className="count_text">{count} items in cart</p>
          <button className="checkout_btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
