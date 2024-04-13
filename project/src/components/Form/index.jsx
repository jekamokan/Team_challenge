import React, { useState } from 'react';
import testImg from '../../images/icons/test.png'
import './style.css'

const Form = () => {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputNumberValue, setInputNumberValue] = useState('');

    const handleInputNameChange = (event) => {
        setInputNameValue(event.target.value);
    };

    const handleInputNumberChange = (event) => {
        setInputNumberValue(event.target.value);
    };

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно выполнить действия с введенными значениями, например, отправить их на сервер
        console.log('Значение первого инпута:', inputNameValue);
        console.log('Значение второго инпута:', inputNumberValue);
        // После отправки формы можно сбросить значения инпутов
        setInputNameValue('');
        setInputNumberValue('');
    };

    return (
        <div className="form">
            <div className="form__wrapper">
                <h2 className="form__title">Do you have any question?</h2>
                <p className="form__text">Leave a request and we will call you back in the near future</p>
                <form className='form__content' onSubmit={handleSubmit}>
                    <label className='form__label'>
                        {/* Name */}
                        <input className='form__input' type="text" placeholder='Name' value={inputNameValue} onChange={handleInputNameChange} />
                    </label>
                    <label className='form__label'>
                        {/* Phone number */}
                        <input className='form__input' type="number" placeholder='Phone number' value={inputNumberValue} onChange={handleInputNumberChange} />
                    </label>
                    <button className='form__button' type="submit">Send</button>
                </form>
            </div>
            <div className="form__img">
                <img src={testImg} alt="test" />
            </div>
        </div>
    );
};

export default Form;
