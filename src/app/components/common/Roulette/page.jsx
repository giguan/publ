"use client"

import { useState } from 'react';
import Images from 'next/image';
import Image from 'next/image';
import './styles.css'; // Add your styles for animation and layout here

const Roulette = ({ onClose }) => {
  const items = [
    { id: 1, name: '1,000', weight: 3, value: 1000 },
    { id: 2, name: '1,000', weight: 3, value: 1000 },
    { id: 3, name: '2,000', weight: 2.5, value: 2000 },
    { id: 4, name: '1,000', weight: 3, value: 1000 },
    { id: 5, name: '10,000', weight: 1, value: 10000 },
    { id: 6, name: '5,000', weight: 1.5, value: 5000 },
    { id: 7, name: '3,000', weight: 2, value: 3000 },
    { id: 8, name: '2,000', weight: 2.5, value: 2000 },
  ];

  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showWinningScreen, setShowWinningScreen] = useState(false);

  const spinRoulette = async () => {
    if (spinning) return;

    setSpinning(true);
    setShowWinningScreen(false);

    const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
    const randomNum = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    const selected = items.find((item) => {
      cumulativeWeight += item.weight;
      return randomNum < cumulativeWeight;
    });

    if (selected) {
      setSelectedItem(selected.name);

      const itemIndex = items.indexOf(selected);
      const itemDegree = 360 / items.length;
      const spinTo = 360 * 5 + itemIndex * itemDegree;

      setRotation(spinTo);

      setTimeout(() => {
        setSpinning(false);
        setShowWinningScreen(true);
      }, 4000);
    }
  };

  return (
    <div className="roulette-container w-full h-auto flex justify-center items-center relative">
      <div className="w-full roulette-instruction">
        버튼을 눌러 룰렛을 돌리세요
      </div>
      {/* 룰렛판 이미지 */}
      <div
        className={`roulette-wheel flex justify-center items-center ${spinning ? 'spinning' : ''} relative`} // Keep the wheel relative to center the button inside
        style={{
          transform: `rotate(${rotation}deg)`,
          zIndex: '30',
        }}
      >
        <Images
          src="/images/roullet.png"
          alt="Roulette Wheel"
          className="wheel-images"
          width={384}
          height={384}
        />
        </div>

        {/* 중앙 버튼 - Positioned inside the wheel */}
        <button onClick={spinRoulette} className="spin-button center-button flex jusify-center items-center z-50 ">
            <Image
              src="/images/center.png" 
              alt="Center Button"
              className='w-full h-full hover:scale-[1.4] duration-300 transform' 
              width={200} 
              height={200} 
            />
        </button>

      {/* 핀 이미지 */}
      <Images src="/images/pin.png" alt="Pin" className="pin flex justify-center items z-40"width={50} height={50} />

      {showWinningScreen && (
      <>
        <div className="winning-screen w-full h-full flex justify-center items-center z-200">
          <div className="winning-container flex flex-col items-center text-center">
            <div className="winning-message">
              당첨!
              <div className="winning-amount">{selectedItem}</div>
            </div>

            <div className="close-button-container">
              <button
                onClick={onClose}
                className="close-button"
              >
                닫기
              </button>
            </div>

            {/* Falling coins effect */}
            {[...Array(50)].map((_, index) => {
              const startX = Math.random() * 200 - 100;
              const startY = Math.random() * 100 + 200;
              const rotateDegree = Math.random() * 360;
              const translateX = Math.random() * 100 * (Math.random() > 0.5 ? 1 : -1);
              const scaleValue = Math.random() * 0.5 + 0.75;

              return (
                <Images
                  key={index}
                  src={`/images/money/coin${(index % 16) + 1}.png`}
                  alt="Coin"
                  className="money"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    transform: `rotate(${rotateDegree}deg) translateX(${translateX}px) scale(${scaleValue})`,
                    '--start-x': `${startX}vw`,
                    '--start-y': `${startY}vh`,
                  }}
                  width={50}
                  height={50}
                />
              );
            })}
          </div>
        </div>
      </>
    )}
    </div>
  );
};

export default Roulette;
