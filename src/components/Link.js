import { useContext } from 'react';
import { NavigationContext } from '../context/navigation';
import classNames from 'classnames';

export default function Link({ to, children }){

  const {navigate} = useContext(NavigationContext)

  const classes = classNames('text-blue-500')

  const handleClick = (e) => {
    
    if(e.metaKey || e.ctrlKey) {
      return
    }

    // since the default behavior of an a tag is refreshing the page we are preventing this from happening
    e.preventDefault()

    navigate(to)
  }

  return(
    <>
      <a className={classes} href={to} onClick={handleClick}>{children}</a>
    </>
  );
}