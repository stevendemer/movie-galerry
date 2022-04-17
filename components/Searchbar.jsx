import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchQueryAtom } from '../atoms/searchAtom';
import { v4 as uuidv4 } from 'uuid';
import getMovies from '../utils/getMovies';
import axios from 'axios';

const Searchbar = () => {

    const [query, setQuery] = useState('');
    const [_, setSearchQuery] = useRecoilState(searchQueryAtom);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const onChange = e => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (!query) return;
        setSearchQuery((prev) => [
            ...prev,
            {
                id: uuidv4(),
                text: query,
            }
        ]);
        setQuery(""); // empty the search query
    }

    useEffect(() => {
        setLoading(true);
        const re = getMovies(query)
            .catch(console.error);
        setData((prev) => [...prev, re['results']]);
        setLoading(false);

    }, [query]);

  return (
    <div className="mx-auto bg-yellow-600 text-green-600">
        <div className="flex justify-center items-center py-10">
            <input onChange={onChange} className='h-8 px-32 py-2 rounded-lg' placeholder="Search for a movie" />
            <button type="submit" onClick={onSubmit} className="bg-black h-8 px-10 ml-3 rounded-xl text-lime-500">Search</button>
        </div>
        {isLoading && <h2>Loading...</h2>}
        {data.map((d, idx) => (
            <div key={idx}>{d}</div>
        ))}
    </div>
  );
}

export default Searchbar;