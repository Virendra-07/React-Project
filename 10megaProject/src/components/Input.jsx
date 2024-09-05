import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref){
    const id = useId();
    return (
        <div className='w-full'>
            // agar hmare pass jo first me likha hai wo value pass hua hai to next wala line show hoga nhi to nhi hoga
            {label && <label
                        className=' inline-block mb-1 pl-1'
                        // yeha id pass karne se ye unique id generatre karega kyuki upper hm eske liye function banaye hai
                        htmlFor={id}> 
                            {label}
                    </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                           focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            // yehi wo "ref" hai jo user se intract karke degi
                ref={ref}
                {...props}
                id={id}
            />
        </div>
        
    )
})

export default Input
