import Accordion from '../components/Accordion';

export default function AccordionPage(){

  const items = [
    {
      id: '0',
      label: 'React',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem.'
    },
    {
      id: '1',
      label: 'JavaScript',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem.'
    },
    {
      id: '2',
      label: 'CSS',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem.'
    }
  ]
  
  return(
    <>
      <Accordion items={items}/>
    </>
  );
}