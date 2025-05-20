import React, { useState, useEffect } from 'react';

const Categoryy = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.REACT_APP_API_URL;

  // Optional: Map display names to image file names
  const imageFileNames = {
    Women: 'accessories-women-cat.jpg',
    Men: 'accessories-men-cat.jpg',
    Shoes: 'shoes-cat.jpg',
    Bags: 'bag-cat.jpg',
    Glasses: 'glasses-cat.jpg',
     jewellery: 'jewelry-cat.jpg',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/GetCategory');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <header>
      <div>
        <h1>Categories</h1>
        <ul>
          {categories.map((category, index) => {
            const fileName = imageFileNames[category.category] ;
            const imageUrl = `${baseUrl}/assets/images/dropdowns/${fileName}`;

            return (
              <li key={index}>
                <h2>{category.category}</h2>
                <img src={imageUrl} alt={category.category} width="150" />
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Categoryy;
