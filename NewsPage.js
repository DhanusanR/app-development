
import axios from 'axios';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import Navbar from './Navbar'; // Ensure the Navbar component is correctly imported
import Footer from './Footer'; // Ensure the Footer component is correctly imported
import './NewsPage.css'; 

const summarizeText = async (text) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions', // Endpoint for text generation
      {
        model: "text-davinci-003", // Model you want to use
        prompt: `Summarize the following text:\n\n${text}`, // Prompt for summarization
        max_tokens: 150, // Adjust as needed
        temperature: 0.5
      },
      {
        headers: {
          'Authorization': `Bearer sk-proj-g6gtfmSXIQilWdDdm03dT3BlbkFJTJD9f82zYsW7YkuTYCo4`, // Your API key
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].text.trim(); // Extract summary
  } catch (error) {
    console.error('Error summarizing text:', error);
    return 'Error summarizing text.';
  }
};

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [summaries, setSummaries] = useState({});

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=renewable%20energy&apiKey=f7dcabe09544433a8a92f90e4b2734f6')
      .then(response => response.json())
      .then(async (data) => {
        setArticles(data.articles);
        // Fetch summaries for each article
        const summaries = {};
        for (const article of data.articles) {
          summaries[article.title] = await summarizeText(article.description);
        }
        setSummaries(summaries);
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="news-page">
      <Navbar /> {/* Add Navbar here */}
      
      <main className="main-content">
        <h1>Latest News on Renewable Energy</h1>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="news-card">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="news-image" />
              )}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p><strong>Summary:</strong> {summaries[article.title]}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
            </div>
          ))
        ) : (
          <p>No news articles found.</p>
        )}
      </main>
      
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default NewsPage;
