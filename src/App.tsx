import React, { useRef, useState } from "react";
import BgImage from "./assets/5.jpeg";
import ChipImage from "./assets/chip.png";
import VisaImg from "./assets/visa.png";
import { MaskField } from "react-mask-field";
import { findDOMNode } from "react-dom";

function App() {
  const cardMask = "#### #### #### ####";
  const [cardNumber, setCardNumber] = useState("");
  const cardNumberElemRef = useRef<HTMLDivElement>(null);
  const cardInputElemRef = useRef<HTMLInputElement>(null);
  const [cardNumberFocus, setCardNumberFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [name, setName] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [dateFocus, setDateFocus] = useState(false);
  const [date, setDate] = useState("");
  const dateInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="grid place-items-center h-full">
      <div className="w-[430px] h-[270px] rounded-md relative">
        <div className="w-full h-full flex flex-col items-center justify-between z-50">
          <div className="w-full relative flex justify-between p-2">
            <img
              src={ChipImage}
              alt="Chip Image"
              className="w-16 h-16 object-contain"
            />
            <img
              src={VisaImg}
              alt="Chip Image"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div
            ref={cardNumberElemRef}
            className="text-white text-3xl flex items-center justify-center relative cursor-pointer"
            tabIndex={1}
            onClick={() => {
              setCardNumberFocus(true);
              cardInputElemRef.current && cardInputElemRef.current.focus();
            }}
          >
            <div
              style={{
                width: "calc(100% + 20px)",
                height: "calc(100% + 10px)",
              }}
              className={`-mx-2.5 -my-1.5 py-4 absolute slideTop opacity-0 top-0 left-0 bg-gray-600/40 p-1 rounded-lg border border-white-700 transition-all cursor-pointer z-10 shadow shadow-gray-700 ${
                cardNumberFocus ? "slideTop" : "slideBottom"
              }`}
            ></div>
            {cardMask.split("").map((mask, index) => {
              if (
                index > 4 &&
                index < 15 &&
                cardNumber.length > index &&
                mask.trim() !== ""
              )
                return (
                  <div key={index} className="w-4 text-shadow z-50">
                    *
                  </div>
                );
              else if (cardNumber.length > index)
                return (
                  <div
                    key={index}
                    className="w-4 text-shadow inline-block z-50"
                  >
                    {cardNumber[index]}
                  </div>
                );
              else
                return (
                  <div
                    key={index}
                    className="text-shadow w-4 inline-block z-50"
                  >
                    {mask}
                  </div>
                );
            })}
          </div>
          <div className="flex items-center justify-between w-full px-4 mb-2">
            <div
              className="flex flex-col items-center relative"
              tabIndex={2}
              onClick={() => {
                setNameFocus(true);
                nameInputRef.current && nameInputRef.current.focus();
              }}
            >
              <h3 className="text-lg font-semibold text-white/80 text-shadow z-50">
                Kart Üzerindeki İsim
              </h3>
              <span className="text-xl font-semibold text-white text-shadow z-50">
                {name}
              </span>
              <div
                style={{
                  width: "calc(100% + 20px)",
                  height: "calc(100% + 10px)",
                }}
                className={`-mx-2.5 -my-1.5 py-4 absolute slideTop opacity-0 top-0 left-0 bg-gray-600/40 p-1 rounded-lg border border-white-700 transition-all cursor-pointer z-10 shadow shadow-gray-700 ${
                  nameFocus ? "slideTop" : "slideBottom"
                }`}
              ></div>
            </div>
            <div
              className="flex flex-col items-center relative"
              tabIndex={3}
              onClick={() => {
                setNameFocus(true);
                dateInputRef.current && dateInputRef.current.focus();
              }}
            >
              <h3 className="text-lg font-semibold text-white/80 text-shadow z-50">
                Geçerlilik Tarihi
              </h3>
              <span className="text-xl font-semibold text-white text-shadow z-50">
                {date}
              </span>
              <div
                style={{
                  width: "calc(100% + 20px)",
                  height: "calc(100% + 10px)",
                }}
                className={`-mx-2.5 -my-1.5 py-4 absolute slideTop opacity-0 top-0 left-0 bg-gray-600/40 p-1 rounded-lg border border-white-700 transition-all cursor-pointer z-10 shadow shadow-gray-700 ${
                  dateFocus ? "slideTop" : "slideBottom"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 rounded-md  opacity-20"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <MaskField
        mask="#### #### #### ####"
        showMask
        value={cardNumber}
        ref={cardInputElemRef}
        replacement="#"
        tabIndex={1}
        onFocus={() => {
          setCardNumberFocus(true);
        }}
        onBlur={() => {
          setCardNumberFocus(false);
        }}
        onChange={() => {}}
        onMasking={(e) => setCardNumber(e.detail.maskedValue)}
      />
      <input
        type="text"
        tabIndex={2}
        value={name}
        ref={nameInputRef}
        onFocus={() => {
          setNameFocus(true);
        }}
        onBlur={() => {
          setNameFocus(false);
        }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <MaskField
        mask="AA / YY"
        showMask
        value={date}
        ref={dateInputRef}
        replacement={{
          A: /\d/,
          Y: /\d/,
        }}
        tabIndex={3}
        onFocus={() => {
          setDateFocus(true);
        }}
        onBlur={() => {
          setDateFocus(false);
        }}
        onChange={() => {}}
        onMasking={(e) => setDate(e.detail.maskedValue)}
      />
    </div>
  );
}

export default App;
