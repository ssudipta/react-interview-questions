import content from "../data/emojicontent"
import { appendActiveClass } from "../utilities/ClassUtility"


const RatingContent = ({handleClick, activeRating}) => {

  return (
    <div className='icon-container'>
        {
            content.map((item)=> (
                <div
                    key={item.rating}
                    className={appendActiveClass(item.rating, activeRating, 'icon-item')}
                    onClick={()=> handleClick(item)}
                >
                    <img src={item.url} className="icon-image" alt={item.mood}/>
                    <p>{item.mood}</p>
                </div>
            ))
        }
    </div>
  )
}

export default RatingContent