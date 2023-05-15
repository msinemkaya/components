import { useContext } from 'react';
import { NavigationContext } from '../context/navigation';

export default function Link({ to, children }){

  const {navigate} = useContext(NavigationContext)

  const handleClick = (e) => {
    // since the default behavior of an a tag is refreshing the page we are preventing this from happening
    e.preventDefault()

    navigate(to)
  }

  return(
    <>
      <a onClick={handleClick}>{children}</a>
    </>
  );
}