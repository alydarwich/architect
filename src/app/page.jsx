import Preloader from '../components/Preloader.jsx';
import Hero from '../sections/Hero.jsx';
import StoryIntro from '../sections/StoryIntro.jsx';
import Inspiration from '../sections/Inspiration.jsx';
import Storytelling from '../sections/Storytelling.jsx';
import Showcase from '../sections/Showcase.jsx';
import Reimagine from '../sections/Reimagine.jsx';
import CoCreate from '../sections/CoCreate.jsx';
import Expertise from '../sections/Expertise.jsx';
import Formula from '../sections/Formula.jsx';

export default function HomePage() {
  return (
    <main className="main-wrapper">
      <Preloader />
      <Hero />
      <StoryIntro />
      <Inspiration />
      <Storytelling />
      <Showcase />
      <Reimagine />
      <CoCreate />
      <Expertise />
      <Formula />
    </main>
  );
}
