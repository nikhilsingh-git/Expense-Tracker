const EditIncome = () =>{

    return(
        <>
        <div className="text-gray-300">
            <div className="text-center mt-15 ">
                <h1 className=" text-3xl font-sans font-bold underline">Edit Income</h1>
                <p>Update your income details quickly and keep your financial records accurate.</p>
            </div>
            <div className="w-200 m-auto mt-5 ">
                <form>
                         
                        <div className="flex flex-col font-sans font-medium ms-5 py-10 ">
                        <p className="text-lg font-sans font-medium text-red-400 mb-5">
                            Hello
                        </p>
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Add Income (₹)</label>
                        <input type="text" name="amount"
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"  />
                        
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Title</label>
                        <input type="text" name="category"
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3" />
                        
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Data</label>
                        <input type="date" name="" id=""
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"/>

                          <label htmlFor="" className="my-2 font-sans font-medium text-md">Payment Method</label>
                        <select name="" id=""
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3" >
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="UPI">UPI</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>

                        
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Description</label>
                        <textarea name="" id="" placeholder="Description..."
                        className="mb-10  w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl  "
                        rows={3}></textarea>

                        <div className="flex justify-around">
                            <button className="bg-transparent border w-45 h-11 rounded-md cursor-pointer"
                            >Cancel</button>
                            <button  className="bg-emerald-500 w-45 h-11 rounded-lg border cursor-pointer"
                            >Update</button>
                        </div>
                        </div>
                    </form>

            </div>
        </div>
        </>
    )
}


export default EditIncome