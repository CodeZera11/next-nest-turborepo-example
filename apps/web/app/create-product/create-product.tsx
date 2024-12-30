import React from 'react'
import createProduct from './actions/create-product'

const CreateProduct = () => {

  return (
    <form action={createProduct}>
      <div className=''>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' />
      </div>
      <div className=''>
        <label htmlFor="price">Price</label>
        <input type="number" name='price' id='price' />
      </div>
      <button type='submit'>Create Product</button>
    </form>
  )
}

export default CreateProduct