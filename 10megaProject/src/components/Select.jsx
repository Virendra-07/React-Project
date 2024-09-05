import React, { useId } from 'react'

function Select({
  options,
  lable,
  className,
  ...props
}, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {lable && <lable htmlFor={id} className=''></lable>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {/* options se hme by default array hi milegi to yeha loop lagana padega */}
        {/* but yehga pe map lagaye agar value nhi hua to app crash ho jayegi esliye yeha pe hm optionaly loop lagayenge */}
      </select>
      
    </div>
  )
}

export default React.forwardRef(Select)
