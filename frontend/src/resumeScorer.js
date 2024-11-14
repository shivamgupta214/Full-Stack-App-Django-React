// import React, { useState } from 'react';
// import axios from 'axios';
// import './loginPage.css';

// const ResumeScorer = () => {
//     const [requestR, setRequest] = useState('');
//     const [message, setMessage] = useState('');
//     const [file, setFile] = useState(null);

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/genai/', {
//                 requestR, file
//             });
//             setMessage(response.data.response);
//             console.log(response.data)
//         } catch (error) {
//             setMessage(error.response?.data.error || 'An error occurred');
//         }
        
//     };

//     return (
//         <div>
//             <h2>Resume</h2>
//             <form onSubmit={handleRegister}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={requestR}
//                     onChange={(e) => setRequest(e.target.value)}
//                 />
//                 <input type="file" accept=".pdf, .doc, .docx" onChange={(e) => setFile(e.target.value)} />
//                 <button type="submit">Submit</button>
//             </form>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default ResumeScorer;

import React, { useState } from 'react';
import axios from 'axios';
import './loginPage.css';

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
        formData.append('requestR', requestR);  // Append job description or any other data
        formData.append('file', file);  // Append the file

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/genai/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',  // Required for file upload
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
            <h2>Resume Scorer</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Job Description"
                    value={requestR}
                    onChange={(e) => setRequest(e.target.value)}
                />
                <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default ResumeScorer;
