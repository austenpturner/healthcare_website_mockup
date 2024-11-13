import Blocks from "../../components/blocks";
import Hero from "../../components/hero";
import Slider from "../../components/Slider";
import { blockContent } from "../../config/homePage";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Blocks content={blockContent} />
      <Slider />
    </div>
  );
}
