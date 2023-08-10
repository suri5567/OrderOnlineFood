
import './Burger.css';
import React from 'react';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function IngredientControl({ colors }) {
  const burgerWidth = Math.min(370, window.innerWidth - 60);

  const sesameSeeds = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      style={{
        backgroundColor: 'white',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        margin: '2px',
        position: 'absolute',
        top: `${getRandomInt(5, 30)}px`,
        left: `${getRandomInt(10, burgerWidth - 20)}px`,
      }}
    ></div>
  ));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '2px'}}>
    
      <div className="burgerTop" style={{ width: `${burgerWidth}px`, height: '120px', background: 'linear-gradient(180deg, #D2691E 0%, #F4A460 100%)', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px' }}>
       
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {sesameSeeds}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="burgerItems" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {colors.length !== 0 ? (
              colors.map((item, index) => (
                <div className='burgerItems' style={{ backgroundColor: item.color, width: `${burgerWidth}px`, height: '20px', margin: '2px', borderRadius: '5px' }} key={index}></div>
              ))
            ) : (
              <div style={{ fontSize: '20px', textAlign: 'center' }}>
                <h6>Add ingredients</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    
      <div className="burgerBottom" style={{ width: `${burgerWidth}px`, height: '70px', background: 'linear-gradient(0deg, #D2691E 0%, #F4A460 100%)', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', marginTop: '3px', marginBottom: '30px' }}></div>
    </div>
  );
}

function ResponsiveIngredientControl({ colors }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <IngredientControl colors={colors} />
    </div>
  );
}

export default ResponsiveIngredientControl;
