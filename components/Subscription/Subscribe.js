"use client";
import Style from "./Subscribe.module.css";
import Image from "next/image";
// Images
import Home from "../../public/home.png";
import Gym from "../../public/gym.png";
import Weight from "../../public/goal1.png";
import Muscle from "../../public/goal2.png";
import Military from "../../public/goal3.png";
import Rehabilitation from "../../public/goal4.png";

import { useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

export default function Subscribe() {
  const [cnt, setCnt] = useState(1);

  function handelNext() {
    setCnt(cnt + 1);
    console.log(cnt);
  }
  function handelPrev() {
    setCnt(cnt - 1);
    console.log(cnt);
  }

  return (
    <div className={Style.container}>
      <div className={Style.selection}>
        {/* Select 1 */}
        {cnt == 1 && (
          <>
            <div className={Style.head}>
              <div className={Style.num}>1</div>
              <p className={Style.header}>Where do you practice ?</p>
            </div>
            <div className={Style.body}>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Gym} alt="gym" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Gym</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Home} alt="home" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Home</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Select 2 */}
        {cnt == 2 && (
          <>
            <div className={Style.head}>
              <div className={Style.num}>2</div>
              <p className={Style.header}>Choose your current goal</p>
            </div>
            <div className={Style.body}>
              <div className={Style.card}>
                <div className={Style.contImg}>
                <Image src={Weight} alt="goal1" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Weight and fat loss</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Muscle} alt="goal2" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Gain muscle strength</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Military} alt="goal3" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Military qualification</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Rehabilitation} alt="goal4" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Rehabilitation  exercises</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Select 3 */}
        
        {/* Select 4 */}
        {cnt == 4 && (
          <>
            <div className={Style.head}>
              <div className={Style.num}>4</div>
              <p className={Style.header}>Enter your Personal information</p>
            </div>
            <div className={Style.body}>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Gym} alt="gym" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Gym</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Home} alt="home" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Home</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Select 5 */}
        {cnt == 5 && (
          <>
            <div className={Style.head}>
              <div className={Style.num}>5</div>
              <p className={Style.header}>Your regular physical activity level?</p>
            </div>
            <div className={Style.body}>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Gym} alt="gym" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Gym</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Home} alt="home" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Home</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Select 6 */}
        {cnt == 6 && (
          <>
            <div className={Style.head}>
              <div className={Style.num}>6</div>
              <p className={Style.header}>Favorite exercise time</p>
            </div>
            <div className={Style.body}>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Gym} alt="gym" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Gym</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Home} alt="home" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Home</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Select 7 */}
        {cnt == 7 && (
          <>
            <div className={Style.head}>
              <div className={Style.num}>7</div>
              <p className={Style.header}>What are your exercise preferences?</p>
            </div>
            <div className={Style.body}>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Gym} alt="gym" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Gym</p>
                </div>
              </div>
              <div className={Style.card}>
              <div className={Style.contImg}>
                <Image src={Home} alt="home" class={Style.img} />
                </div>
                <div className={Style.txt}>
                  <p>Home</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Select 8 */}
        <div
          className={Style.foot}
          style={{ justifyContent: cnt == 1 ? "center" : "space-between" }}
        >
          {cnt > 1 && (
            <div className={Style.prev} onClick={handelPrev}>
              <BiLeftArrowCircle /> Previous
            </div>
          )}
          {cnt != 10 && (
            <div className={Style.next} onClick={handelNext}>
              Next <BiRightArrowCircle />
            </div>
          )}
          {cnt == 10 && <div className={Style.next}>Finish</div>}
        </div>
      </div>
    </div>
  );
}
