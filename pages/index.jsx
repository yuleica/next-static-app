import Layaout from "../components/Layaout";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <div>
      <Layaout
        title="Home de mi Blog"
        description="Home del Blog"
        home={true}
      >
         <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
        </section>
      </Layaout>
    </div>
  )
}
