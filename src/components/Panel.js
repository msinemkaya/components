import classNames from 'classnames';

export default function Panel({ children, className, ...rest }){

  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
    // merging additional classNames that might be passed
    )

  return(
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
}