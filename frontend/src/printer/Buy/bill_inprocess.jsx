import './bill_inprocess.css'
import { useState } from 'react';

function BillInProcess({ onClose, item }) {
    if (!item) return null;

    return (
        <div className="box_full-screen" onClick={onClose}>
            <div className="box_contain_bill_detail_inprocess" onClick={(e) => e.stopPropagation()}>
                <div className="header_box_contain_bill_detail">Hóa đơn thanh toán</div>
                <table className="middle_box_contain_bill_detail">
                    <tbody className='MainContentOfTable'>
                        <tr className="row_of_table_bill">
                            <td className="column1_of_table_bill">Mã hóa đơn</td>
                            <td className="column2_of_table_bill">{item.invoiceID}</td></tr>
                        <tr className="row_of_table_bill">
                            <td className="column1_of_table_bill">Ngày tạo</td>
                            <td className="column2_of_table_bill">{item.createdDate}</td></tr>
                        <tr className="row_of_table_bill">
                            <td className="column1_of_table_bill">Số tiền</td>
                            <td className="column2_of_table_bill">{item.amount}</td></tr>
                        <tr className="row_of_table_bill">
                            <td className="column1_of_table_bill">Trạng thái</td>
                            <td className="column2_of_table_bill">{item.status}</td></tr>
                        <tr className="row_of_table_bill">
                            <td className="column1_of_table_bill">Cổng thanh toán</td>
                            <td className="column2_of_table_bill">{item.paymentGateway}</td></tr>
                    </tbody>
                </table>
                <div className="bottom_box_contain_bill_detail">
                    <button className="bottom_box_to_cancel" onClick={onClose}>Hủy giao dịch</button>
                    <button className="bottom_box_to_complete" onClick={onClose}>Xong</button>
                </div>
            </div>
        </div>
    );
};

export default BillInProcess