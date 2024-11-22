import CardProject from "./card-project";

const CardList = () => {

  const cards = []

  return (
    <div className="flex-1 flex justify-center items-center">
      {cards && cards.length > 0 ? (
        <div className='grid grid-cols-4'>
          <CardProject />
        </div>
      ) : (
        <div className='text-center space-y-2'>
          <h2 className='text-xl font-medium'>Not project ideas found</h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      )}
    </div>
  )
}

export default CardList