import Link from './Link';

export default function Sidebar(){

  const links = [
    { label: 'Dropdown', path: '/'},
    { label: 'Button', path: '/button'},
    { label: 'Accordion', path: '/accordion'},
    { label: 'Modal', path: '/modal'},
    { label: 'Table', path: '/table'},
    { label: 'Counter', path: '/counter'},
  ]

  return(
    <div className='sticky top-0 overflow-y-auto flex flex-col items-start'>
      {links.map((link) => (
        <Link key={link.label} to={link.path} className={'mb-3'} activeClassName={'font-bold border-l-4 border-blue-500 pl-2'}>{link.label}</Link>
      ))}
    </div>
  );
}