import React from 'react'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>+7(953)155-69-06</label>
            <i className='fa fa-envelope'></i>
            <label>example@mail.ru</label>
          </div>
          <div className="right row RText">
            <label>theme FAQ's</label>
            <label>Need Helps</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head