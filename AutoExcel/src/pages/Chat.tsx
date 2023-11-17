import { useState } from 'react';
import Industry from '../components/Industry';
import Confirm from '../components/Confirm'; // Import the Confirm component if you have one
import '../styles/Chat.css';
import Fab from '@mui/material/Fab';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
//import { Configuration, OpenAIApi } from 'openai';

export default function Chat() {
  {/*const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);*/}

  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmPage, setConfirmPage] = useState(false);
  const [industry, setIndustry] = useState(() => {
    const storedIndustry = localStorage.getItem('industry');
    return storedIndustry || ''; // Set default value if 'industry' is not in local storage
  });

  {/*const handleSubmit = async () => {
    setLoading(true);

    const data = '{"role": "system",' +
  '"content": "You are a text parser which takes unstructured data and returns structured data in the form of a JSON object. Given a context, column names, and unstructured data for a CSV file, return a JSON object for the data as,\\n{\\n column1: relevant data,\\ncolumn2: relevant data,\\n......\\n}\\nIf data is not present use NA, return only the JSON object.\\n\\n Example for a car dealership the columns are brand , make, manufacturing year, ownership number, price, km run. \\n\\n unstructured data: \'2017 Sigma 4 auto 4by4 delhi 1st 1.29lac km done, 21.5 lac \'.\\n\\n structured output: {\\nmanufacturing year: 2017,\\nkm_run: 129000,\\nprice: 2150000,\\nownership_no: NA,\\nmake: NA,\\nbrand: NA}",' +
  '"given context":"' + industry + '",' +
  '"given columns":"brand,year,price,km_driven,ownership_num",' +
  '"given unstructured data":"' + prompt + '"}';

    
    try {
      const result = await openai.createCompletion({
        model: 'gpt-3.5-turbo',
        prompt: data,
        temperature: 0.5,
        max_tokens: 4000,
      });

      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      console.error(e);
      setApiResponse('Something is going wrong, Please try again.');
    }

    setLoading(false);
  };*/}

  const postData = () => {
    const data = { context: industry, columns: 'brand,year,price,km_driven,ownership_num', prompt: prompt };

    axios
      .post('your_endpoint_url', { data })
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error sending POST request:', error);
      });
  };

  const [industryPage, setIndustryPage] = useState(true);

  return (
    <div className='chat-base'>
      {industryPage && <Industry onClose={() => setIndustryPage(false)} />}
      {confirmPage && <Confirm onClose={() => setConfirmPage(false)} />}
      {apiResponse}
      <div className='text-area-container'>
        <textarea className='text-area' placeholder='Type your prompt here.' onChange={(e) => setPrompt(e.target.value)} value={prompt} />
        <Fab color='primary' aria-label='voice-recognition' className='voice-icon'>
          <MicIcon />
        </Fab>
        <Fab color='primary' aria-label='send' className='send-icon' onClick={postData}>
          <SendIcon />
        </Fab>
      </div>
    </div>
  );
}
