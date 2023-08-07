
import React, { useState } from 'react';
import IngredientControl from './IngredientControl';
import './Burger.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Burger = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredColor, setColorData] = useState([]);

  const addIngredient = (ingredient) => {
    const colorObject = {
      ingredient: ingredient,
      color: ingredient === 'Lettuce' ? '#6fdc6f' : ingredient === 'Tomato' ? ' #ff8f66' : ingredient === 'Cheese' ? '#ffff66' : ingredient === 'Meat' ? '#e60000' : 'black',
    };

    setColorData((prevColorData) => [...prevColorData, colorObject]);

    setFilteredData((prevFilteredData) => [...prevFilteredData, ingredient]);
  };

  const removeIngredientData = (ingredient) => {
    const updatedData = filteredData.filter((item) => item !== ingredient);
    setFilteredData(updatedData);

    setColorData((prevColorData) => prevColorData.filter((item) => item.ingredient !== ingredient));
  };

  return (
    <div className="container">
      <div className="row" style={{marginTop:"100px"}}>
        <div className="col-md-6">
          <div className="mainContainer bg-light p-4 rounded border" style={{ width: '80%', height: '95%', marginLeft: '50px', marginBottom: '20px' }}>
            <div style={{ textAlign: 'center', color: '#008080' }}>
              <h3>Ingredients</h3>
            </div>
            <div className="ingreContainer">
              <div className="txtItem text-center">
                <h3>Lettuce</h3>
              </div>
              <div className="btnContainer d-flex justify-content-center">
                <button className="btn btn-success me-2" onClick={() => addIngredient('Lettuce')}>
                  Add
                </button>
                <button className="btn btn-danger" onClick={() => removeIngredientData('Lettuce')}>
                  Remove
                </button>
              </div>
			  <div className="txtItem text-center">
                <h3>Tomato</h3>
              </div>
              <div className="btnContainer d-flex justify-content-center">
                <button className="btn btn-success me-2" onClick={() => addIngredient('Tomato')}>
                  Add
                </button>
                <button className="btn btn-danger" onClick={() => removeIngredientData('Tomato')}>
                  Remove
                </button>
              </div>
			  <div className="txtItem text-center">
                <h3>Meat</h3>
              </div>
              <div className="btnContainer d-flex justify-content-center">
                <button className="btn btn-success me-2" onClick={() => addIngredient('Meat')}>
                  Add
                </button>
                <button className="btn btn-danger" onClick={() => removeIngredientData('Meat')}>
                  Remove
                </button>
              </div>
			  <div className="txtItem text-center">
                <h3>Cheese</h3>
              </div>
              <div className="btnContainer d-flex justify-content-center">
                <button className="btn btn-success me-2" onClick={() => addIngredient('Cheese')}>
                  Add
                </button>
                <button className="btn btn-danger" onClick={() => removeIngredientData('Cheese')}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <IngredientControl data={filteredData} colors={filteredColor} />
        </div>
      </div>
    </div>
  );
};

export default Burger;

