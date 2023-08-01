import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps
      </h2>
      <p className={`${styles.paragraph} w-max-[480px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus voluptates quidem iusto a tenetur necessitatibus officia sed laudantium, suscipit repudiandae itaque facilis cum?
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="cardImg" className="w-[100%] h-[100%] "/>
    </div>

  </section>
)

export default CardDeal