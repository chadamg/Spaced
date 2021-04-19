const Cards = ({ cardsList=[] }) => {
    return (
      <>
        {cardsList.map((data,index) => { if (data) {
                return (
                  <div key={ data.question }>
                    <h4>{ data.question }</h4>
                    <h4>{ data.answer }</h4>
                  </div>	
                )
              }
              return null
        })}
      </>
    );
  }
  
  export default Cards
  