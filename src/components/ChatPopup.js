import React, { useState, useEffect, useRef } from "react";

//Koden her definerer et React-komponent ved navn ChatPopup, 

//Komponenten bruger nogle hooks fra React biblioteket, 
//såsom useState, useEffect og useRef.
//hooks fortæller omkring tilstande, så man ikke behøver class komponenter
//https://www.w3schools.com/react/react_hooks.asp

function ChatPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);

    //konstant som får en værdi 
    //useState-hooket bliver brugt her til at oprette en "isOpen"-state-variabel, 
    //som er en boolean(true/false values), der starter som "false". State variablen bruges 
    //til at styre, om chat-popup skal vises eller ej.

    //useRef-hooket bliver her brugt til at oprette en reference til 
    //chat-popup elementet, den er null lige nu, og peger ikke på noget. 

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    //useEffect-hooket bruges til at oprette en timeout-timer, der venter i 1 sekund, 
    //før chat-popup vises. Når timeren udløber, opdaterer setIsOpen-funktionen 
    //state-variablen, således at chat-popup vises.

    // const handleClick = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <>
            {isOpen && (
                <div
                    ref={popupRef}
                    // onClick={handleClick}
                    className="chat-popup"
                >
                    <div className="chat-popup-text">Chat med os!</div>
                    <div className="chat-popup-triangle"></div>
                </div>
            )}
        </>
    );
}

//Til sidst eksporteres ChatPopup-komponenten, 
//så den kan bruges andre steder i React-appen.
export default ChatPopup;
