import Button from './Button';

function App() {

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

export default App;

