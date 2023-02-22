import React from 'react'
import Categories from '../../components/Categories/Categories'
import Info from '../../components/Info/Info'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <main>
        <Categories />
        <Info />
        <Products />
    </main>
  )
}

export default Home