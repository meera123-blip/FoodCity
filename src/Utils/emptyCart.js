
 const emptyCart = () =>
{
    return(

        <div className="h-screen flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.293 4.293a1 1 0 011.414 0L10 10.586l6.293-6.293a1 1 0 111.414 1.414L11.414 12l6.293 6.293a1 1 0 11-1.414 1.414L10 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 12 2.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <p className="text-xl font-semibold mt-4">Your Cart is Empty</p>
        <p className="text-gray-500">Add items to your cart to continue shopping.</p>
    </div>
</div>
    )
}

export default emptyCart;


