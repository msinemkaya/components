import classNames from 'classnames';

export default function Button({
  children,
  primary,
  secondary,
  danger,
  warning,
  success,
  outline,
  rounded,
  className,
  ...rest
  // we take all the remaining props that will not be used directly with Button element but
  // rather will be passed to <button> to use in the name of rest (in our case these are events)
}) {

  // what this library does is it concats the seperated strings into one
  // it can also take an object and if the VALUE is true KEY is going to be added to the concatted strings too
  const classes = classNames('px-3 py-1.5 border', className, {
    'border-blue-600 bg-blue-500 text-white': primary,
    'border-yellow-600 bg-yellow-500 text-white': warning,
    'border-red-600 bg-red-500 text-white': danger,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-600 bg-green-500 text-white': success,
    'rounded-full': rounded,
    'bg-transparent': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  },)

  return (
    <>
      {/* we give the rest object to the button as a prop using destruction */}
      <button className={classes} {...rest}>{children}</button>
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
