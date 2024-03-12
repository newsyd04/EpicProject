
import React, { useState } from 'react';
import searchIndex from './searchIndex'; // Import your search index
import Nav from './Nav';

const Search = () => {
  const [query, setQuery] = useState('');
const [results, setResults] = useState<{ page: string; url: string; content: string; keywords: string; }[]>([]);

const handleSearch = (e: { target: { value: string; }; }) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery.length > 2) { // Trigger search for queries longer than 2 characters
        const matchedResults = searchIndex.filter(item =>
            item.content.toLowerCase().includes(searchQuery) || item.keywords.toLowerCase().includes(searchQuery)
        );
        setResults(matchedResults);
    } else {
        setResults([]);
    }
};

  return (
    <>
      <div className='container'>
        <Nav />
        <div className='container Doc-Styling'> 
          <article>
            <h2>Search</h2>
            <input
              type="search"
              value={query}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <div>
              {results.map((item, index) => (
                <div key={index}>
                  <a href={item.url}>{item.page}</a>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Search;
