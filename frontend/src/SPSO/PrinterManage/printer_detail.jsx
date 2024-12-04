import './printer_detail.css'
import React, { useState, useEffect } from 'react';

function PrinterDetail({onClose}) {
    return (
        <div className={`PrinterDetail__fullScreen ${onClose ? 'ShowPrinter' : ''}`}>
            <div className="printerDetail_midBox">
                <h6 className='printerDetail_midBox_title'>
                    Thông tin chi tiết
                </h6>
                <div className="printerDetail_midBox_line"></div>
                <table className="printerDetail_midBox_table">
                    <tbody className='printerDetail_table_body'>
                        <tr className="printerDetail_table_row">
                            <td className="printerDetail_table_cl1">
                                ID
                            </td>
                            <td className="printerDetail_table_cl2">
                                123456789
                            </td>
                        </tr>
                        <tr className="printerDetail_table_row">
                            <td className="printerDetail_table_cl1">
                                Tên máy
                            </td>
                            <td className="printerDetail_table_cl2">
                                Microsoft Print to PDF
                            </td>
                        </tr>
                        <tr className="printerDetail_table_row">
                            <td className="printerDetail_table_cl1">
                                Model
                            </td>
                            <td className="printerDetail_table_cl2">
                                Model là c j z
                            </td>
                        </tr>
                        <tr className="printerDetail_table_row">
                            <td className="printerDetail_table_cl1">
                                Trạng thái
                            </td>
                            <td className="printerDetail_table_cl2">
                                Sẵn sàng
                            </td>
                        </tr>
                        <tr className="printerDetail_table_row">
                            <td className="printerDetail_table_cl1">
                                Đặt tại
                            </td>
                            <td className="printerDetail_table_cl2">
                                101 - H1 - Cơ sở 2
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="printerDetail_midBox_line"></div>
                <div className="printerDetail_midBox_footer">
                    <button className="printerDetail_midBox_done" onClick={onClose}>
                        Xong
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrinterDetail