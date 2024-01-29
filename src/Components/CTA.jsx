import Icon from '@mdi/react';
import { mdiGreaterThan } from '@mdi/js';
import { Link } from "react-router-dom";

export default function CTA(){
    return (
        <div className="cta">
            <div className='cta-left'>
                <div className="main-text">
                    <div className="bold">
                        <div className='see'>See with</div>
                        <div className='fut'>the future,</div>
                        <div className='not'>not the past.</div>
                    </div>
                    <div className="info">
                        <span>Step into the future with the revolutionary <span>Apple VR headset</span>.</span>
                        <span>
                        Experience immersive technology like never before. Embrace the next level of digital reality.
                        </span>
                    </div>
                    <div className="buttonDiv">
                    <Link to="shop"><button class="button-50"> <span>START SHOPPING</span> </button></Link>
                    </div>
                </div>
            </div>
            <div className="cta-right">
                <img src="../src/assets/hero.png" alt="" />
            </div>

        </div>
    );
}