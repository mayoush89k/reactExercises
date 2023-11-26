import "./App.css";
import Card from "./Component/Card";

function App() {
  const cardsList = [
    {
      title: "Nature 1",
      imgSrc:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1700990552~exp=1700991152~hmac=04d3a32eeff4b19880da690ec249caf7d1c4171ed7c69a9794dd538c31359657",
      description:
        "A painting of a mountain lake with a mountain in the background",
    },
    {
      title: "Nature 2",
      imgSrc:
        "https://as2.ftcdn.net/v2/jpg/02/01/78/01/1000_F_201780104_hetXS26W8alnsbDKbpnr4sVizJfiO12w.jpg",
      description:
        "Breathtaking panorama of morning wild nature high in mountains",
    },
    {
      title: "Nature 3",
      imgSrc:
        "https://img.freepik.com/free-photo/reflection-mountain-beautiful-lake_181624-4853.jpg?w=1060&t=st=1700990852~exp=1700991452~hmac=31403f091bbc34f45ec552bc3cbb5645c3f2c24a68693038e8306e69c2cb9775",
      description: "Free photo reflection of the mountain in a beautiful lake",
    },
  ];

  return (
    <div id="main-container">
      {cardsList.map((cardItem) => (
        <Card
          title={cardItem.title}
          description={cardItem.description}
          imageSrc={cardItem.imgSrc}
        />
      ))}
    </div>
  );
}

export default App;
