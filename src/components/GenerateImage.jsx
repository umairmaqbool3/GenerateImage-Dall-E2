import React,{useState} from 'react'
import { Configuration, OpenAIApi } from 'openai';
import '../App.css';

function GenerateImage(){
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url)
  }
  return (
    <div className='app-main'>
      <h2>Generate an Image using Open AI API</h2>
      <input className='app-input' 
        placeholder='Type something to Generate an image..'
      onChange={(e)=>setPrompt(e.target.value)} />
      <button onClick={generateImage}>Generate Image</button>
      {result.length > 0 ? <img src={result} className='result-image' alt="result"/> : <></> }
    </div>
  )
}

export default GenerateImage;
