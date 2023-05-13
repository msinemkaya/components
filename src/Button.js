import propTypes from 'prop-types';

export default function Button({
  children,
  primary,
  secondary,
  danger,
  warning,
  success,
  outline,
  rounded,
}) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}

// we are using custom prop types but originially proptypes are used to determine
// if the prop is required, what should be the type of the prop and such.

// exp: title: PropTypes.string.isRequired 
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning) // the idea here is;
      // if you !!undefine it gives false since undefine is a falsy value
      // and if you dont pass a prop it is returning as a undefined value
      // we know that if we dont pass a prop that returns boolean at all since it will be falsy it will be count as a false
      // in here we add the numbered versions of undefines (which is false) and numbered version of true (which is 1) 
      // to check if there are more than one of these values given as a prop (meaning true) to the button component

      if(count > 1) {
        return new Error('only one type can be true')
      }
  },
};
