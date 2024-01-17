//SingleHome
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleHome = () => {
  const { id } = useParams();

  return (
    <section className='singlehome'>
      <p>Home ID: {id}</p>
    </section>
  );
};

export default SingleHome;
