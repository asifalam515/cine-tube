import { useState } from 'react';
import { getImgUrl } from '../utils/cine-utility';
import MovieDetailsModal from './MovieDetailsModal';
import Rating from './Rating';

const MovieCard = ({movie}) => {
  const [showModal,setShowModal] = useState(false)
    return (
      <>
      <MovieDetailsModal></MovieDetailsModal>
       <figure  classNameName="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img classNameName="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
          <figcaption classNameName="pt-4">
            <h3 classNameName="text-xl mb-1">{movie.title}</h3>
            <p classNameName="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

            {/* rating section is here */}
            <div classNameName="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating}></Rating>
            </div>
            <a classNameName="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm" href="#">
              <img src="./assets/tag.svg" alt="" />
              <span classNameName="btn border-t-neutral-50">${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
      </>
    );
};

export default MovieCard;