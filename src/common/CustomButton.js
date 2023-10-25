import React from 'react'

const CustomButton = (props) => {
  return (
    <button
      onClick={props.handleFunction}
      className={`${props.buttonStyle ? props.buttonStyle : "bg-[#000] px-5 py-2 text-white rounded-md font-bold shadow-md" } `}
    >
      {props.title}
    </button>
  )
}

export default CustomButton