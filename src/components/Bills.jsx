import { apple, google, bill } from "../assets"
import styles, {layout} from "../style"


const Bills = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[-3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden"/> billing and invoicing
      </h2>

      <p className={`${styles.paragraph} w-max-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium obcaecati nemo atque doloremque consequuntur iste, voluptate eius perferendis cumque nesciunt repellat ab a laborum libero tempore. Dolores libero sint error.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
      </div>
    </div>
  </section>
)

export default Bills