import Link from './Link';

export default function Sidebar(){

  const links = [
    { label: 'Dropdown', path: '/'},
    { label: 'Button', path: '/button'},
    { label: 'Accordion', path: '/accordion'},
  ]

  return(
    <div className='sticky top-0 overflow-y-auto flex flex-col'>
      {links.map((link) => (
        <Link key={link.label} to={link.path}>{link.label}</Link>
      ))}
    </div>
  );
}