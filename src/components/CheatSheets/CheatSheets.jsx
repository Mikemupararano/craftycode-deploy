import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from './Javascript.pdf'
function CheatSheets() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.map(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => {
                <Page 
                pageNumber={pageNumber} 
                renderTexlayer={false} 
                renderAnnotationLayer={false} 
                />;
                })}
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default CheatSheets;