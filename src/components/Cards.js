import { useState } from 'react';

const Cards = ({ cardsList=[] }) => {
  const [flip, setFlip] = useState(false)
    return (
      <>
        {cardsList.map((data,index) => { if (data) {
                return (
                  <div onClick={() => setFlip(!flip)} key={ data.id }>
                    {flip ? data.answer : data.question}
                  </div>
                )
              }
              return null
        })}
      </>
    );
  }
  
  export default Cards
  