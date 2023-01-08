

const Cart = () => {
  return (
    <div className="container mx-auto lg:w-1/2 w-fill pb-24">
      <h1 className="my-12 font-bold">Cart Items </h1>
      <ul>
        <li>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/images/peproni.png" alt=""/>
              <span className="font-bold ml-4 2-48">Double Peproni</span >
            </div>
            <div>
              <button className=" bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
              <b className="px-4">2</b>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+
              </button>
            </div>
            <span>₹500</span>
            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">elete</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Cart;