import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import "./App.css";

function App() {
  const slides = [
    { url: "http://127.0.0.1:5173/image-1.jpg", title: "beach" },
    { url: "http://127.0.0.1:5173/image-2.jpg", title: "boat" },
    { url: "http://127.0.0.1:5173/image-1.jpg", title: "beach" },
    { url: "http://127.0.0.1:5173/image-2.jpg", title: "boat" },
  ];

  return (
    <>
      <Navbar />
      <div className="  pt-2 md:px-20 px-2">
        <div className="w-full  h-96 md:h-150 mx-auto ">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </>
  );
}

export default App;
