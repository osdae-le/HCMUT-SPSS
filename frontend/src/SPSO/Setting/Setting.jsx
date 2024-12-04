import style from './Setting.module.css'
import React, { useState } from 'react';




function Setting() {


    const [dateInput, setDateInput] = useState("");

    const handleDateChange = (e) => {
        let input = e.target.value;

        input = input.replace(/\D/g, "").substring(0, 4);

        if (input.length > 2) {
            input = input.slice(0, 2) + "/" + input.slice(2);
        }

        setDateInput(input);
    };



    return (

        <div className={style.page}>
            <div className={style.grap}>
                <p className={style.title}>Phát giấy định kì</p>
                <div className={style.board}>
                    <div className={style.number}>
                        <p className={style.normText}> Số lượng</p>
                        <input type="number" className={style.input} />
                        <p className={style.smallText}>Đơn vị: A4</p>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.day}>
                        <p className={style.normText}> Ngày phát định kì</p>
                        <div className={style.termGrap}>
                            <div className={style.term}>
                                <p className={style.text}>Học kì I</p>
                                <div>
                                    <input className={style.inputDate} type="text" id="" placeholder="MM/YY" value={dateInput} onChange={handleDateChange} maxLength="5" />
                                </div>
                            </div>
                            <div className={style.term}>
                                <p className={style.text}>Học kì II</p>
                                <div>
                                    <input className={style.inputDate} type="text" id="dateInput" placeholder="MM/YY" value={dateInput} onChange={handleDateChange} maxLength="5" />
                                </div>
                            </div>
                            <div className={style.term}>
                                <p className={style.text}>Học kì III</p>
                                <div>
                                    <input className={style.inputDate} type="text" id="dateInput" placeholder="MM/YY" value={dateInput} onChange={handleDateChange} maxLength="5" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={style.grap}>
                <p className={style.title}>Định dạng tài liệu in</p>
                <div className={style.board}>
                    <div className={style.grap2}>
                        <div className={style.printing}>
                            <p className={style.normText}>Đang được in</p>
                            <div className={style.grid}>
                                <div className={style.tag}>
                                    <p className={style.tagName}>.xlsx</p>
                                    <div className={style.tagLine}></div>
                                    <div className={style.action}>+</div>
                                </div>
                                <div className={style.tag}>
                                    <div className={style.tagName}>.pdf</div>
                                    <div className={style.tagLine}></div>
                                    <div className={style.action}>+</div>
                                </div>
                                <div className={style.tag}>
                                    <p className={style.tagName}>.xlsx</p>
                                    <div className={style.tagLine}></div>
                                    <div className={style.action}>+</div>
                                </div>
                                <div className={style.tag}>
                                    <p className={style.tagName}>.xlsx</p>
                                    <div className={style.tagLine}></div>
                                    <div className={style.action}>+</div>
                                </div>
                                <div className={style.tag}>
                                    <p className={style.tagName}>.xlsx</p>
                                    <div className={style.tagLine}></div>
                                    <div className={style.action}>+</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.line}> </div>
                        <div className={style.available}>
                            <p className={style.normText}>Khả dụng</p>
                            <div className={style.grid}>
                                <div className={style.tag}>
                                    <p className={style.tagName}>.xlsx</p>
                                    <div className={style.tagLine}></div>
                                    <div className={style.action}>+</div>
                                </div>
                                <div className={style.tag}>
                                    <div className={style.tagName}>.pdf</div>
                                    <div className={style.tagLine}></div>
                                    <div className={style.action}>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.grap} style={{ width: "fit-content" }}>
                <p className={style.title}>Tỷ giá in</p>
                <div className={style.board}>
                    <div className={style.toA4}>
                        <input type="number" className={style.price}></input>
                        <p className={style.title1}>VNĐ</p>
                        <p className={style.eq}>=</p>
                        <p className={style.bigText}>1 tờ A4</p>
                    </div>
                    <div className={style.lineS}></div>
                    <div className={style.toDiff}>
                        <p className={style.text} >Tỷ lệ quy đổi từ A4 sang các loại giấy khác</p>
                        <div className={style.grap2}>
                            <div className={style.card}>
                                {/* <div className={style.cardInput}>0.5<div/> */}
                                <p className={style.cardInput}>0.5</p>
                                <div className={style.cardLine}></div>
                                <div className={style.cardName}>A3</div>
                            </div>
                            <div className={style.card}>
                                <p className={style.cardInput}>0.25</p>
                                <div className={style.cardLine}></div>
                                <div className={style.cardName}>A2</div>
                            </div>
                            <div className={style.card}>
                                <p className={style.cardInput}>0.125</p>
                                <div className={style.cardLine}></div>
                                <div className={style.cardName}>A1</div>
                            </div>
                            <div className={style.card} style={{ marginRight: "55px" }}>
                                <p className={style.cardInput}>0.0675</p>
                                <div className={style.cardLine}></div>
                                <div className={style.cardName}>A0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Setting;