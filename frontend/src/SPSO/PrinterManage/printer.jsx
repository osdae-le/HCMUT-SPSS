import './printer.css';
import React, { useState } from 'react';
import PrinterDetail from './printer_detail';
import PrinterAddBox from './printer_add';
import PrinterAddCompleted from './printer_addCompleted';
import PrinterChangeInfo from './printer_changeInfo';
import PrinterChangeInfoCompleted from './printer_changeInfoCompleted';
import PrinterDeleted from './printer_deleted';
import PrinterDeletedCompleted from './printer_deletedCompleted';

function ManagePrinter() {
    const [visibleOption, setVisibleOption] = useState(null);

    const handleToggleOption = (id) => {
        setVisibleOption(visibleOption === id ? null : id);
    };

    const [showPrinterDetail, setShowPrinterDetail] = useState(false);

    const handleShowDetail = () => {
        setShowPrinterDetail(true);
    };

    const handleHideDetail = () => {
        setShowPrinterDetail(false);
    };

    const [showAddBox, setShowAddBox] = useState(false);
    const [showAddCompleted, setShowAddCompleted] = useState(false);

    const handleAddClick = () => {
        setShowAddBox(true);
    };

    const handleAddPrinter = () => {
        setShowAddBox(false);
        setShowAddCompleted(true);
    };

    const handleCancelAdd = () => {
        setShowAddBox(false);
    };

    const handleCloseCompleted = () => {
        setShowAddBox(false);
        setShowAddCompleted(false);
    };

    const [showChangeBox, setshowChangeBox] = useState(false);
    const [showChangeCompletedBox, setshowChangeCompletedBox] = useState(false);

    const handleChangeClick = () => {
        setshowChangeBox(true);
    }

    const handleChangePrinter = () => {
        setshowChangeBox(false);
        setshowChangeCompletedBox(true);
    }

    const handleCloseChange = () => {
        setshowChangeCompletedBox(false);
        setshowChangeBox(false);
    }

    const handleCancelChange = () => {
        setShowChangeBox(false);
    }

    const [showDeleted, setshowDeleted] = useState(false);
    const [showDeletedCompleted, setshowDeletedCompleted] = useState(false);

    const handleDeletedClick = () => {
        setshowDeleted(true);
    }

    const handleDeletedPrinter = () => {
        setshowDeleted(false);
        setshowDeletedCompleted(true);
    }

    const handleDeletedClose = () => {
        setshowDeleted(false);
        setshowDeletedCompleted(false);
    }
    
    return (
        <div className='Printer-fullScreen'>
            <div className="Printer_fullBox">
                <div className="PrinterHeader">
                    <div className="printerHeaderMid">
                        <div className="printerHeaderMidLeft">
                            <div className="printerHeaderEmpty"></div>
                            <div className="printerHeaderAdd" onClick={handleAddClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='printerHeaderAdd_Plus' 
                                    viewBox="0 0 448 512">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                                <p>Thêm</p>
                            </div>
                            <div className="printerHeaderAmount">
                                Số lượng: 12
                            </div>
                        </div>
                        <div className="printerHeaderMidRight">
                            <div className="printerHeaderMidRight_img">
                            </div>
                            <div className="printerHeaderMidRight_containInput">
                                <input type="text" 
                                className="printerHeaderMidRight_input" />
                                <div className="containLogoSearch"></div>
                            </div>
                            <div className="printerHeaderEmpty"></div>
                        </div>
                    </div>
                </div>
                <table className="tableOfPrinter">
                    <thead></thead>
                    <tbody className='tableOfPrinter_body'>
                        <tr className="tableOfPrinter_row">
                            <td className='tableOfPrinter_cl1'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft Print to PDF
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl1')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl1' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} 
                                                    className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl2'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft HP Printer - ser...
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl2')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl2' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl3'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft HP Printer - ser...
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl3')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl3' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl4'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft HP Printer - ser...
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl4')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl4' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl5'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft HP Printer - ser...
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl5')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl5' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="tableOfPrinter_row">
                            <td className='tableOfPrinter_cl1'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img __Box__img_yellow"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft HP Printer - ser...
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl6')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl6' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl2'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img __Box__img_yellow"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        HP
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl7')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl7' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl3'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img __Box__img_yellow"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft HP Printer - ser...
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl8')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl8' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl4'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img __Box__img_red"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Microsoft HP Printer - ser...
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl9')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl9' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl5'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img __Box__img_red"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        HP - printer
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl10')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl10' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="tableOfPrinter_row">
                            <td className='tableOfPrinter_cl1'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img __Box__img_yellow"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Dell
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl11')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl11' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl2'>
                                <div className="tableOfPrinter__Box">
                                    <div className="tableOfPrinter__Box__img __Box__img_yellow"></div>
                                    <div className="tableOfPrinter__Box_name">
                                        Best Printer Ever
                                    </div>
                                    <div className="tableOfPrinter__Box_option">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            className='tableOfPrinter__Box_more'
                                            onClick={() => handleToggleOption('cl12')}>
                                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                        <div className={`tableOfPrinter__subBox_option ${visibleOption === 'cl12' ? 'show' : ''}`}>
                                            <ul className='tableOfPrinter__subBox_list'>
                                                <li onClick={handleShowDetail} className="showDetailButton">
                                                    Chi tiết
                                                </li>
                                                <li onClick={handleChangeClick}>
                                                    Chỉnh sửa</li>
                                                <li onClick={handleDeletedClick}>
                                                    Xóa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='tableOfPrinter_cl3'>
                            </td>
                            <td className='tableOfPrinter_cl4'>
                            </td>
                            <td className='tableOfPrinter_cl5'>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {showPrinterDetail && (
                <PrinterDetail onClose={handleHideDetail} 
                    className={`${showPrinterDetail ? 'showPrinter' : ''}`}/>
            )}
            {showAddBox && <PrinterAddBox onAdd={handleAddPrinter} onCancel={handleCancelAdd} />}
            {showAddCompleted && <PrinterAddCompleted onClose={handleCloseCompleted} />}
            {showChangeBox && <PrinterChangeInfo onAdd={handleChangePrinter} onCancel={handleCancelChange}/>}
            {showChangeCompletedBox && <PrinterChangeInfoCompleted onClose={handleCloseChange}/>}
            {showDeleted && <PrinterDeleted onAdd={handleDeletedPrinter}/>}
            {showDeletedCompleted && <PrinterDeletedCompleted onCancel={handleDeletedClose}/>}
        </div>
    );
}

export default ManagePrinter