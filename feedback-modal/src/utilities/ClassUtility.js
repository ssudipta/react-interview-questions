export const appendActiveClass = (itemRating, activeRating, usedClasses)=> {
    let className = usedClasses
    className = activeRating === itemRating ? className+' active' : className
    return className
  }