import './printer_deletedCompleted.css'

function PrinterDeletedCompleted({onCancel}) {
    return (
        <div className='deletedCompleted_fullScreen'>
            <div className="deletedCompleted_midBox">
                <div className="deletedCompleted_midBox_header">
                    <div className="deletedCompleted_midBox_header_img"></div>
                </div>
                <div className="deletedCompleted_midBox_center">
                    Da xoa may in
                </div>
                <div className="deletedCompleted_midBox_footer">
                    <button className="deletedCompleted_midBox_button" onClick={onCancel}>
                        Xong
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrinterDeletedCompleted