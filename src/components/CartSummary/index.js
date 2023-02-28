import CartContext from '../../context/CartContext'

let sum = 0

const gettotal = eachItem => {
  sum += eachItem.quantity * eachItem.price
  console.log(sum)
}

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      sum = 0
      cartList.forEach(gettotal)
      return (
        <>
          <h1>Order Total:Rs{sum}/-</h1>
          <p>{cartList.length} Items in car</p>
          <button type="button">CheckOut</button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
