import './printer_add.css'

function PrinterAddBox({onAdd, onCancel}) {
    return (
        <div className='AddBox__fullScreen'>
            <div className="printerAdd_midBox">
                <h6 className="printerAdd_midBox_title">
                    Them may in
                </h6>
                <div className="printerAdd_midBox_line"></div>
                <table className="printerAdd_midBox_table">
                    <tbody className='printerAdd_midBox_body'>
                        <tr className="printerAdd_midBox_row">
                            <td className="printerAdd_midBox_cl1 printerAdd_midBox_cl">
                                <label htmlFor=""
                                    className='printerAdd_midBox_label'>
                                    ID</label>
                                <input type="text" className='printerAdd_midBox_inputBox'/>
                            </td>
                            <div className="printerAdd_midBox_cl_empty"></div>
                            <td className="printerAdd_midBox_cl2 printerAdd_midBox_cl">
                                <label htmlFor=""
                                    className='printerAdd_midBox_label'>
                                    Trang thai</label>
                                <div className="printerAdd_midBox_statusBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         viewBox="0 0 320 512"
                                         className='printerAdd_midBox_caretDown'>
                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className="printerAdd_midBox_row">
                            <td className="printerAdd_midBox_cl">
                                <label htmlFor=""
                                    className='printerAdd_midBox_label'>
                                        Ten may in
                                </label>
                                <input type="text" className='printerAdd_midBox_inputBox'/>
                            </td>
                        </tr>
                        <tr className="printerAdd_midBox_row">
                            <td className="printerAdd_midBox_cl">
                                <label htmlFor=""
                                    className='printerAdd_midBox_label'>
                                        Model
                                </label>
                                <input type="text" className='printerAdd_midBox_inputBox'/>
                            </td>
                        </tr>
                        <tr className="printerAdd_midBox_row">
                            <td className="printerAdd_midBox_cl1 printerAdd_midBox_cl">
                                <label htmlFor=""
                                    className='printerAdd_midBox_label'>
                                    Co so</label>
                                <div className="printerAdd_midBox_statusBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         viewBox="0 0 320 512"
                                         className='printerAdd_midBox_caretDown'>
                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                    </svg>
                                </div>
                            </td>
                            <div className="printerAdd_midBox_cl_empty"></div>
                            <td className="printerAdd_midBox_cl2 printerAdd_midBox_cl">
                                <label htmlFor=""
                                    className='printerAdd_midBox_label'>
                                    Toa</label>
                                <input type="text" 
                                    className='printerAdd_midBox_inputBox printerAdd_input_r3'/>
                            </td>
                            <div className="printerAdd_midBox_cl_empty"></div>
                            <td className="printerAdd_midBox_cl3 printerAdd_midBox_cl">
                                <label htmlFor=""
                                    className='printerAdd_midBox_label'>
                                    Phong</label>
                                <input type="text" 
                                    className='printerAdd_midBox_inputBox printerAdd_input_r3'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="printerAdd_midBox_line"></div>
                <div className="printerAdd_midBox_footer">
                    <button className="printerAdd_midBox_cancel" onClick={onCancel}>
                        Huy
                    </button>
                    <button className="printerAdd_midBox_done" onClick={onAdd}>
                        Them
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrinterAddBox