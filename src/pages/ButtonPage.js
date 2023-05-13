import Button from '../components/Button';

export default function ButtonPage() {

  const handleClick = () => {
    console.log('clicked')
  }

  const handleAnotherClick = () => {
    console.log('clicked too')
  }
  

  return (
    <>
      <Button success onClick={handleClick}> hakan </Button>
      <Button primary rounded onClick={handleAnotherClick}> meliko </Button>
    </>
  );
}

