import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true)

  useImperativeHandle(ref, () => ({
    alertToggle() {
        setToggle(!toggle)
    }
  }))
    return (
    <div>
        <button>
            Child From Button
        </button>

        {toggle && <p>Text is Here</p>}
    </div>
  )
})

export default Button