import React, {useState} from 'react';
import {useEffect} from 'react';
export default function Form(props) {



  const handleUpClickUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "Success");
  };

  const handleUpClickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "Success");
  };

  const handleOnChange = (event) => {
    // Update the text with the value from the input field
    setText(event.target.value);
  };


  const [text, setText] = useState('Enter the text here');

  // Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra space removed!", "Success");
  };

  // Copy text
  const handleCopy = () => {
    let textArea = document.getElementById("box1");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied!", "Success");
  };

  // Sentence case
  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .split('. ')
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ');
    setText(newText);
    props.showAlert("Converted to Sentencecase!", "Success");
  };

  // Clear text
  const handleClearText = () => {
    setText(""); 
    props.showAlert("Cleared All!", "Success");
  };

  // Auto-save feature
  const [isSaving, setIsSaving] = useState(false);
  const saveText = () => {
    setIsSaving(true);
    setTimeout(() => {
      console.log("Auto-saved:", text);
      setIsSaving(false);
      /* props.showAlert("Auto-saved!", "Success"); */
    }, 4000); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text) {
        saveText();
      }
    }, 5000); 
    return () => clearTimeout(timer);
  }, [text]);
  //listen function
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  useEffect(() => {
    const fetchVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]); // Set a default voice
    };

    // Ensure voices are loaded properly in some browsers
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = fetchVoices;
    } else {
      fetchVoices(); // Fetch immediately if no event is required
    }
  }, []);
  const handlePlayText = () => {
    if (text.trim() === "") return; // Don't play empty text
    const speech = new SpeechSynthesisUtterance(text);
    speech.voice = selectedVoice; // Set the selected voice
    window.speechSynthesis.speak(speech);
  };

// Function to handle voice change
const handleVoiceChange = (event) => {
  const selected = voices.find(voice => voice.name === event.target.value);
  setSelectedVoice(selected);
};

/*  fs*/
// Function to remove special characters
const removeSpecialCharacters = (inputText) => {
  return inputText.replace(/[^a-zA-Z0-9 ]/g, '');
};

// Function to clean the text by removing special characters
const handleRemoveSpecialCharacters = () => {
  const cleanedText = removeSpecialCharacters(text);
  setText(cleanedText);
  props.showAlert("Special characters removed!", "Success");
};
/* fe  */

 // Function to change the text by replacing a word with another
 const handleChangeWithPrompt = () => {
  const wordToReplace = prompt("Which word would you like to replace?");
  
  // If the user cancels or does not enter a word, stop the process
  if (!wordToReplace || !text.includes(wordToReplace)) {
    props.showAlert("Word not found!", "Error");
    return;
  }

  const replacementWord = prompt(`What would you like to replace "${wordToReplace}" with?`);

  // If the user cancels or does not enter a replacement, stop the process
  if (replacementWord === null) {
    return;
  }

  // Replace all occurrences of the word (case-sensitive)
  const updatedText = text.split(' ').map(word => 
    word === wordToReplace ? replacementWord : word
  ).join(' ');

  setText(updatedText);
  props.showAlert(`Replaced "${wordToReplace}" with "${replacementWord}"!`, "Success");
};



  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const readingTimeInMinutes = wordCount / 200; // Average reading speed: 200 WPM
  const minutes = Math.floor(readingTimeInMinutes);
  const seconds = Math.floor((readingTimeInMinutes - minutes) * 60);
  const [selectedFont, setSelectedFont] = useState('Roboto');
  const [fontSize, setFontSize] = useState('15');
  const googleFonts = [
    { name: 'Fontfamily', family: 'Roboto' },
    { name: 'Open Sans', family: 'Open+Sans' },
    { name: 'Lato', family: 'Lato' },
    { name: 'Montserrat', family: 'Montserrat' },
    { name: 'Poppins', family: 'Poppins' },
    { name: 'Playfair Display', family: 'Playfair+Display' },
    { name: 'Merriweather', family: 'Merriweather' },
    { name: 'Raleway', family: 'Raleway' },
    { name: 'Source Sans Pro', family: 'Source+Sans+Pro' },
    { name: 'Nunito', family: 'Nunito' },
    { name: 'Oswald', family: 'Oswald' },
    { name: 'Slabo 27px', family: 'Slabo+27px' },
    { name: 'Roboto Condensed', family: 'Roboto+Condensed' },
    { name: 'Anton', family: 'Anton' },
    { name: 'Dancing Script', family: 'Dancing+Script' },
    { name: 'Cabin', family: 'Cabin' },
    { name: 'Comfortaa', family: 'Comfortaa' },
    { name: 'Bebas Neue', family: 'Bebas+Neue' },
    { name: 'Exo 2', family: 'Exo+2' },
    { name: 'Caveat', family: 'Caveat' },
    { name: 'PT Sans', family: 'PT+Sans' },
    { name: 'Quicksand', family: 'Quicksand' },
    { name: 'Droid Sans', family: 'Droid+Sans' },
    { name: 'Zilla Slab', family: 'Zilla+Slab' },
    { name: 'Sanchez', family: 'Sanchez' },
    { name: 'Inconsolata', family: 'Inconsolata' },
    { name: 'Barlow', family: 'Barlow' },
    { name: 'Muli', family: 'Muli' },
    { name: 'Coda', family: 'Coda' },
    { name: 'Play', family: 'Play' },
    { name: 'Lobster', family: 'Lobster' },
    { name: 'Abril Fatface', family: 'Abril+Fatface' },
    { name: 'Raleway Dots', family: 'Raleway+Dots' },
    { name: 'Yeseva One', family: 'Yeseva+One' },
    { name: 'Varela Round', family: 'Varela+Round' },
    { name: 'Work Sans', family: 'Work+Sans' },
    { name: 'Crimson Pro', family: 'Crimson+Pro' },
    { name: 'Karla', family: 'Karla' },
    { name: 'Cinzel', family: 'Cinzel' },
    { name: 'Titillium Web', family: 'Titillium+Web' },
];
  const loadGoogleFont = (fontFamily) => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g,'+')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  };

  // Update font when user selects a new one
  useEffect(() => {
    loadGoogleFont(selectedFont);
  }, [selectedFont]);

  return (
    <>
      <div className="container my-1 d-flex justify-content-between">
        {/* Text Area Section */}
        <div className="text-area-section" style={{ flex: '0 0 82%', marginRight: '30px' }}>
          <div className="mb-4" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            </div>
            {/* counter heading part strt */}
            <div
  className="container"
  style={{
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    backgroundColor: props.mode === 'dark' ? '#042743' : '#BEE4F4',
    color: props.mode === 'dark' ? 'white' : 'black',
    fontSize: '24px',
    padding: '12px', // Add padding for spacing
    position: 'relative',
    gap: '10px', // Space between the elements
  }}
>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center', 
      marginBottom: '10px', 
    }}
  >
    <p style={{ margin: 0 ,fontSize:'30px'}}>
      {text.trim().split(/\s+/).filter(Boolean).length} Words and {text.length} Characters
    </p>

    <div
      style={{
        display: 'flex',
        alignItems: 'center', 
        gap: '10px', 
        scale:'0.7',
        paddingLeft:'14px',
      }}
    >
      <div>
        <select id="fontSize" onChange={(e) => setFontSize(e.target.value)} value={fontSize}>
          
          <option value="12">12px</option>
          <option value="14">14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="20">20px</option>
          <option value="24">24px</option>
          <option value="28">28px</option>
          <option value="32">32px</option>
        </select>
      </div>

      <div>
        <select id="fontFamily" style={{width: '150px'}}onChange={(e) => setSelectedFont(e.target.value)} value={selectedFont}>
          {googleFonts.map((font, index) => (
            <option  key={index} value={font.family}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</div>


      {/* counter headng part end */}

            <textarea className="form-control" value={text} style={{ fontSize: `${fontSize}px`,fontFamily: selectedFont, backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="box1" rows="9"></textarea>
            <div className="my-1" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : '#BEE4F4', color: props.mode === 'dark' ? 'white' : 'black' }}>
              <button disabled={text.length===0} className='btn btn-primary bg-dark my-2 mx-2' onClick={handleUpClickUpper}>Convert to Uppercase</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2' onClick={handleUpClickLower}>Convert to Lowercase</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2' onClick={handleSentenceCase}>Convert to Sentence Case</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2' onClick={handleClearText}>Clear Text</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2' onClick={handleCopy}>Copy Text</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2' onClick={handleRemoveSpecialCharacters}>Remove Special Characters</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2' onClick={handleChangeWithPrompt}>Change Text</button>
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2 my-2' onClick={saveText}>Auto-Save Now</button>
            
              <button disabled={text.length===0} className='btn btn-primary bg-dark mx-2 my-2' onClick={handlePlayText}>Listen text</button>
                            {voices.length > 0 && (
                      <div>
                        <label htmlFor="voiceSelect">Select Voice: </label>
                        <select id="voiceSelect" onChange={handleVoiceChange}>
                          {voices.map((voice, index) => (
                            <option key={index} value={voice.name}>
                              {`${voice.name} (${voice.lang})`}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
              {isSaving && <p>Saving...</p>}
            </div>
        </div>

        {/* Advertisement Section */}
        <div style={{paddingLeft:'5px',paddingTop:'20px'}}>
        <div className="ad-section" style={{ flex: '0 0 20%', backgroundColor: props.mode === 'dark' ? '#f0f0f0' : '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}>
          <h3 style={{width:'221px'}}>Advertisement</h3>
          <div className="ad-content" style={{ marginTop: '30Epx' }}>
            <img src="https://kamaleshjicse.wordpress.com/wp-content/uploads/2016/06/uu4k53o8t88cziqqckdk.jpg" alt="Ad 1" style={{ width: '100%', borderRadius: '8px',border:"soild 5px"}} />
            <p>No Worry Update text here!</p>
          </div>
          <div className="ad-content" style={{ marginBottom: '10px',marginTop:'30px' }}>
            <img src="https://user-images.githubusercontent.com/94471189/193782622-db0071f8-122e-4909-83a8-fe5da257febc.png" alt="Ad 2" style={{ width: '85%', borderRadius: '8px', paddingLeft:'26px' }} />
            <p>Here are the Utils! </p>
          </div>
        </div>
        </div>
      </div>

      <div className='mx-2 my-3 justify-content-center p-3 rounded border border-solid 'style={{backgroundColor: props.mode==='dark'?'#042743':'#BEE4F4',color:props.mode==='dark'?'white':'black'}} >
    <h3>What is TextUtils?</h3>
    <p>Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above.
    Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later. </p>
    <p>Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.</p>
    <p>In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.</p>
    <p>In the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you’re using.</p>
    <strong>Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.</strong>
    </div>
    </>
  );
}
