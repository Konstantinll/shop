import React from 'react'

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className="category">
        <div className="chead d_flex heig">

          <h1>Brands</h1>
          <h2>Shops</h2>

        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="cateImg" />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className="box box2">
          <button>View all brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg