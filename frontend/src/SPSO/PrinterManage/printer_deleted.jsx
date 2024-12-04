import './printer_deleted.css'

function PrinterDeleted({onAdd}) {
    return (
        <div className='deleted_fullScreen'>
            <div className="deleted_fullScreen_midBox">
                <div className="deleted_midBox_header">
                    <div className="deleted_midBox_header_img"></div>
                </div>
                <div className="deleted_midBox_center">
                    Xac nhan xoa may in nay?
                </div>
                <div className="deleted_midBox_footer">
                    <button className="deleted_midBox_button" onClick={onAdd}>
                        Xoa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrinterDeleted