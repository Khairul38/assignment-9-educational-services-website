import { useEffect, useState } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./categories.JSON')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, []);
    return [categories];
};

export default useCategories;