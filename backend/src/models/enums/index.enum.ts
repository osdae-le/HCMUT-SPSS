// enums/printer-status.enum.ts
export enum PrinterStatus {
    ONLINE = 'ONLINE',
    ERROR = 'ERROR',
    BUSY = 'BUSY',
    OFFLINE = 'OFFLINE',
  }
  
  // enums/orientation.enum.ts
  export enum Orientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
  }
  
  // enums/page-size.enum.ts
  export enum PageSize {
    A1 = 'A1',
    A2 = 'A2',
    A3 = 'A3',
    A4 = 'A4',
  }
  
  // enums/print-type.enum.ts
  export enum PrintType {
    BlackAndWhite = 'BlackAndWhite',
    Colour = 'Colour',
  }
  
  // enums/print-side.enum.ts
  export enum PrintSide {
    OneSide = 'OneSide',
    TwoSide = 'TwoSide',
  }
  
  // enums/file-type.enum.ts
  export enum FileType {
    DOC = 'DOC',
    DOCX = 'DOCX',
    PDF = 'PDF',
  }
  
  // enums/printer-file-status.enum.ts
  export enum PrinterFileStatus {
    QUEUE = 'QUEUE',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
  }
  
  // enums/transaction-status.enum.ts
  export enum TransactionStatus {
    FAILED = 'FAILED',
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
  }
  