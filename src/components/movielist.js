import React from 'react';
import movie from './movie';

function movieList(props) {
  const movies = props.movies || [ {title: "Sweet Home Alabama",
  imageUrl:
    "https://i.etsystatic.com/27719728/r/il/cfa956/4812486927/il_794xN.4812486927_8gxe.jpg",
  synopsis:
    "New York fashion designer Melanie suddenly finds herself engaged to the city's most eligible bachelor. But Melanie's past holds many secrets, including Jake, the redneck husband she married in high school, who refuses to divorce her. Bound and determined to end their relationship once and for all, Melanie sneaks back home to Alabama to confront her past, only to discover that you can take the girl out of the South, but you can't take the South out of the girl.",
  rating: 5
},
{
  title: "You've Got Mail",
  imageUrl:
    "https://m.media-amazon.com/images/I/51na41B8cOL.jpg",
  synopsis:
    "Struggling boutique bookseller Kathleen Kelly hates Joe Fox, the owner of a corporate Foxbooks chain store that just moved in across the street. When they meet online, however, they begin an intense and anonymous Internet romance, oblivious of each other's true identity. Eventually Joe learns that the enchanting woman he's involved with is actually his business rival. He must now struggle to reconcile his real-life dislike for her with the cyber love he's come to feel.",
  rating: 4
},
{
  title: "For Love Or Money",
  imageUrl:
    "https://m.media-amazon.com/images/I/71jg5IosU7L._SX385_.jpg",
  synopsis:
    "New York concierge Doug Ireland wants to go into business for himself and refurbish a hotel on Roosevelt Island, N.Y., but he needs an investor. With a few weeks left before his option on the site runs out, Doug agrees to help wealthy Christian Hanover conceal his affair with salesgirl Andy Hart from his wife. Despite his own attraction to Andy, Doug tries to stay focused on getting Christian to invest $3 million in his project.",
  rating: 3.5
},
{
    title: "America's Sweethearts",
    imageUrl:
      "https://m.media-amazon.com/images/I/51ktfUJpJ7L.jpg",
    synopsis:
      "For an awkward, self-conscious girl like Kiki (Julia Roberts), being the personal assistant to a beautiful megastar like Gwen isn't easy. But when she dutifully accepts the task of helping Gwen and her estranged husband Eddie make it through one last public appearance masterminded by legendary press agent Lee Phillips, forever devoted Kiki finds that her job is about to get even harder when her and Eddie's relationship takes a romantic turn.",
    rating: 3 
  },
  {
    title: "Never Been Kissed",
    imageUrl:
      "https://m.media-amazon.com/images/I/51gDJt-dykL._AC_UF894,1000_QL80_.jpg",
    synopsis:
      "Josie Geller, a baby-faced junior copywriter at the Chicago Sun-Times, must pose as a student at her former high school to research contemporary teenage culture. With the help of her brother, Rob, Josie infiltrates the inner circle of the most popular clique on campus. But she hits a major snag in her investigation -- not to mention her own failed love life -- when she falls for her dreamy English teacher, Sam Coulson.",
    rating: 3.5
  },
  {
    title: "10 Things I Hate About You",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMmVhZjhlZDYtMDAwZi00MDcyLTgzOTItOWNiZjY0YmE0MGE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    synopsis:
      "Kat Stratford is beautiful, smart and quite abrasive to most of her fellow teens, meaning that she doesn't attract many boys. Unfortunately for her younger sister, Bianca, house rules say that she can't date until Kat has a boyfriend, so strings are pulled to set the dour damsel up for a romance. Soon Kat crosses paths with handsome new arrival Patrick Verona. Will Kat let her guard down enough to fall for the effortlessly charming Patrick?",
    rating: 4.2
  }
];

  return (  
    <div className="container">
      <div className='card m-3' id='pageTitle'><h1><i>~Rom-Com's of the 90's Movie List~</i></h1></div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
}

export default movieList;