
// import React, { useState } from 'react';
// import axios from 'axios';

// const ResumeScorer = () => {
//     const [requestR, setRequest] = useState('');
//     const [message, setMessage] = useState('');
//     const [file, setFile] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]); // Store the actual file object
//     };

//     const handleRegister = async (e) => {
//         e.preventDefault();

//         // Prepare the form data
//         const formData = new FormData();
//         formData.append('requestR', requestR);  // Append job description or any other data
//         formData.append('file', file);  // Append the file

//         try {
//             const response = await axios.post('http://localhost:8000/api/genai/', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',  // Required for file upload
//                 },
//             });
//             setMessage(response.data.response);
//             console.log(response.data);
//         } catch (error) {
//             setMessage(error.response?.data.error || 'An error occurred');
//         }
//     };

//     return (
//         <div>
//             <h2 style={style.title}>Resume Scorer</h2>
//             <form onSubmit={handleRegister}>
//                 <div>
//                 <input
//                     type="text"
//                     placeholder="Job Description"
//                     value={requestR}
//                     onChange={(e) => setRequest(e.target.value)}
//                 />
//                 </div>
//                 <div><input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} /></div>
                
//                 <button type="submit">Submit</button>
//             </form>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default ResumeScorer;


// const style = {
//     title : {
//         fontSize: '2rem',

//     }



// }

import React, { useState } from 'react';
import axios from 'axios';
import './resumeScorerPage.css'; // Import the CSS file

const ResumeScorer = () => {
    const [requestR, setRequest] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Store the actual file object
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // Prepare the form data
        const formData = new FormData();
        formData.append('requestR', requestR); // Append job description or any other data
        formData.append('file', file); // Append the file

        try {
            const response = await axios.post('http://localhost:8000/api/genai/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Required for file upload
                },
            });
            setMessage(response.data.response);
            console.log(response.data);
        } catch (error) {
            setMessage(error.response?.data.error || 'An error occurred');
        }
    };

    return (
        <div>
            <h2 className='titleH2'>Resume Scorer</h2>
            
            <form onSubmit={handleRegister}>
                <div className="container">
                    <h4>Job Description</h4>
                    <textarea
                        value={requestR}
                        onChange={(e) => {
                        setRequest(e.target.value);
                        e.target.style.height = "auto"; // Reset height to recalculate
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set height to content height
                        }}
                        style={{
                            width: "100%",
                            resize: "none", // Prevent manual resizing
                            overflow: "hidden", // Prevent scrollbar
                        }}
                    />
                </div>
                <div className="container">
                <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
                </div>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default ResumeScorer;
