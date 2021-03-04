import React from "react";
import "./styles.css";

class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

class FocusableInput extends React.Component {
  ref = React.createRef();
  componentDidUpdate(prevProps) {
    // HINT: this.ref.current.focus()
    if (this.props.focused) this.ref.current.focus();
  }

  render() {
    return <TextInput ref={this.ref} onChange={this.props.onChange} />;
  }
}

FocusableInput.defaultProps = {
  focused: false
};

export default FocusableInput;
