import ClassicProduct from "./components/ClassicProduct";
import EditorsPick from "./components/EditorsPick";
import FeaturedPosts from "./components/FeaturedPosts";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import NeuralUniverse from "./components/NeuralUniverse";



export default function HeroSection() {
  return (
    <div >
      <Hero />
      <EditorsPick />
      <FeaturedProducts />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts/>
    </div>

  );
}
