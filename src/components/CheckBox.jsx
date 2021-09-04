import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {

  const inputRef = useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  }

  return (
    <div className="custom-checkbox">
      <input type="checkbox" 
        ref={inputRef} 
        onChange={onChange}
        checked={props.checked}   
      />
      <div className="check-mark">
        <i class="fas fa-check"></i>
      </div>
      { props.label }
    </div>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
}

export default CheckBox
