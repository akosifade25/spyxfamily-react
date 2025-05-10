import homeImg from '../assets/home-img.png';
import homeTmImg from '../assets/home-tm-img.png';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-image">
        <picture>
          <source srcSet={homeTmImg} media="(max-width: 1024px)" />
          <img src={homeImg} alt="Spy x Family Cast" />
        </picture>
      </div>
    </div>
  );
}

export default Home;