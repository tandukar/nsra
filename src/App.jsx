import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import "./App.css";

function App() {
  const slides = [
    { url: "https://hilarious-horse-5d4f5b.netlify.app/img-01.webp" },
    { url: "https://hilarious-horse-5d4f5b.netlify.ap/img-02.jpg" },
    { url: "https://hilarious-horse-5d4f5b.netlify.app/image-1.jpg" },
    { url: "https://hilarious-horse-5d4f5b.netlify.app/img-02.jpg" },
    { url: "https://hilarious-horse-5d4f5b.netlify.app/image-1.jpg" },
  ];

  return (
    <>
      <Navbar />
      <div className="  pt-2 md:px-20 px-2 ">
        <div className="w-full  h-96 md:h-150 mx-auto object-cover ">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </>
  );
}

export default App;
