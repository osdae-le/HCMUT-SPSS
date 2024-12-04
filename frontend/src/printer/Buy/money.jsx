import './money.css'
import BoxContainHistoryPay from './history_pay';
import { useState } from 'react';


function BoxContain() {

    function UpdateDate() {
        const today = new Date();
        return today.toLocaleDateString('vi-VN',{
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedPaperType, setSelectedPaperType] = useState('Chọn loại giấy');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (type) => {
        setSelectedPaperType(type);
        setIsOpen(false);
    };

    return(
        <div className="contain3Box">
            <div className="contain2Box">
                <div className="leftBoxWithExchange">
                    <h5>Tra cứu quy đổi</h5>
                    <p>Cập nhật mới nhất từ {UpdateDate()}</p>
                    <div className="exchange_paper_to">
                        <ul className="condition_to_exchange">
                            <li>
                                <div className="contain_p">
                                    <p>Số tờ</p>
                                </div>
                                <input type='number' className='Box-of-condition'></input>
                            </li>
                            <li>
                                <div className="contain_p">
                                    <p>Loại giấy</p>
                                </div>
                                <div className='Box-of-condition'>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        className={`box-of-condition-more ${isOpen ? 'rotate-icon' : ''}`} 
                                        onClick={toggleDropdown}>
                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                    </svg>
                                    {isOpen && (
                                        <div className="type_of_paper" onClick={toggleDropdown}>
                                            <span>{selectedPaperType}</span>
                                            <ul className="list__type_of_paper">
                                                <li onClick={() => handleItemClick('A0')}>A0</li>
                                                <li onClick={() => handleItemClick('A1')}>A1</li>
                                                <li onClick={() => handleItemClick('A2')}>A2</li>
                                                <li onClick={() => handleItemClick('A3')}>A3</li>
                                                <li onClick={() => handleItemClick('A4')}>A4</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li>
                                <div className="contain_p">
                                    <p>Đổi sang</p>
                                </div>
                                <div className="Box-of-condition">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='box-of-condition-more'>
                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                    </svg>
                                </div>
                            </li>
                        </ul>
                        <div className="contain_arrow-right-to">
                            <div className="contain_svg_arrow_right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='right_arrow_logo'>
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="number_of_paper_exchange">
                            <p>1</p>
                        </div>
                    </div>
                    <div className="exchange_money_to">
                        <ul className="condition_to_exchange">
                            <li>
                                <div className="contain_p">
                                    <p>Số tiền</p>
                                </div>
                                <input type="number" className="Box-of-condition" />
                            </li>
                            <li>
                                <div className="contain_p">
                                    <p>Loại giấy</p>
                                </div>
                                <div className="Box-of-condition">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        className={`box-of-condition-more ${isOpen ? 'rotate-icon' : ''}`} 
                                        onClick={toggleDropdown}>
                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                    </svg>
                                    {isOpen && (
                                        <div className="type_of_paper" onClick={toggleDropdown}>
                                            <span>{selectedPaperType}</span>
                                            <ul className="list__type_of_paper">
                                                <li onClick={() => handleItemClick('A0')}>A0</li>
                                                <li onClick={() => handleItemClick('A1')}>A1</li>
                                                <li onClick={() => handleItemClick('A2')}>A2</li>
                                                <li onClick={() => handleItemClick('A3')}>A3</li>
                                                <li onClick={() => handleItemClick('A4')}>A4</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                        <div className="contain_arrow-right-to">
                            <div className="contain_svg_arrow_right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='right_arrow_logo'>
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="number_of_paper_exchange">
                            <p>20</p>
                        </div>
                    </div>
                </div>
                <div className="rightBoxWithExchange">
                    <div className="fill_in_money">
                        <div className="fillmoney_contain_input_p">
                            <div className="fillmoney_contain_p">
                                <p>Nhập số tiền</p>
                            </div>
                            <input type="number" className="to_fill_money" />
                        </div>
                    </div>
                    <div className="pay_method">
                        <div className="pay_method__text">
                            <p>Phuong thuc thanh toan</p>
                        </div>
                        <div className="pay_method__method">
                            <ul className="list_of_method">
                                <li>
                                    <button className='list_of_method__on_click list_of_method__with_BK_pay'>
                                    </button>
                                </li>
                                <div className='list_of_method__line'></div>
                                <li>
                                    <button className="list_of_method__on_click">
                                        Internet banking
                                    </button>
                                </li>
                            </ul>
                            <button className='list_of_method__pay'>
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BoxContainHistoryPay></BoxContainHistoryPay>
        </div>
    );
}

export default BoxContain