import Lottie from "lottie-react";
import anim1 from './color.json';

//Denne kode importerer to moduler: 
//Lottie fra biblioteket "lottie-react" og anim1 fra filen "color.json".

//React-komponent ved navn MotionGraphic, som indeholder en Lottie-animation.

function MotionGraphic() {
    return (
        <div>
            <Lottie animationData={anim1} loop={true} />

        </div>
    );
}

export default MotionGraphic;

//Lottie-komponenten bruger animationData-propertien 
//til at definere selve animationen, som vi har kaldt i anim1-variablen.

//loop-attributten er"true" = animationen vil spille igen og igen, indtil den stoppes.

//Til sidst eksporteres MotionGraphic-komponenten, 
//så den kan bruges andre steder i React-appen.