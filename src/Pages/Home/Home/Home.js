import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
  // const APP_ID = '046f0a15';
  // const API_KEY = '7128cc8aef9424686376b3007bba3f51';
  // fetch(
  //   `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${API_KEY}`
  // )
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))

  //   .catch((err) => {
  //     console.error(err);
  //   });
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
