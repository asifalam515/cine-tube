import Star from "../assets/star.svg";
const Rating = ({value}) => {
   const starts= Array(value).fill(Star)
    return (
        <div>
            {
                starts.map((star,index)=>(
                    <img src={star} key={index} alt={star} width="14" height="14" />
                ))
            }
        </div>
    );
};

export default Rating;