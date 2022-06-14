import type { NextPage } from "next";
import { Button } from "src/lib/mantine";

const Home: NextPage = () => {
  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <div>
      <Button dent onClick={handleClick}>
        Click me!
      </Button>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};

export default Home;
