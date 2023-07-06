import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  const movies = props.movies || [ {title: "Harry Potter & The Half-Blood Prince",
  imageUrl:
    "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_.jpg",
  synopsis:
    "As Death Eaters wreak havoc in both Muggle and Wizard worlds, Hogwarts is no longer a safe haven for students. Though Harry (Daniel Radcliffe) suspects there are new dangers lurking within the castle walls, Dumbledore is more intent than ever on preparing the young wizard for the final battle with Voldemort. Meanwhile, teenage hormones run rampant through Hogwarts, presenting a different sort of danger. Love may be in the air, but tragedy looms, and Hogwarts may never be the same again..",
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
  title: "The Fugitgive",
  imageUrl:
    "https://m.media-amazon.com/images/M/MV5BNzczMzEwODgwM15BMl5BanBnXkFtZTYwNjE3Njk4._V1_.jpg",
  synopsis:
    "A well respected Chicago surgeon Dr. Richard Kimble has found out that his wife, Helen, has been murdered ferociously in her own home. The police found Kimble and accused him of the murder. Then, Kimble (without Justifiable Reason) was tried, convicted, and sentenced to death. However, on the way to prison, Kimble's transport crashed. Kimble escapes and is now on the run. Deputy Samuel Gerard from Chicago takes charge of the chase of Kimble. Meanwhile, Kimble takes up his own investigation to find who really killed his wife, and to lure Gerard and his team into it as well.",
  rating: 3.5
},
{
    title: "Double Jeopardy",
    imageUrl:
      "https://m.media-amazon.com/images/I/81qVCJOEUkS._AC_UF894,1000_QL80_.jpg",
    synopsis:
      "When Nick Parsons appears to be murdered his wife Libby is tried and convicted. Six years later Libby is paroled and is pursued by Travis Lehman (her parole officer) as she sets out to find her son and settle the score with Nick.",
    rating: 3 
  },
  {
    title: "The Great Gatsby",
    imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpK621goh9Gy4bvJvQ2vqm7lNnLj7shBVl3PvORTyYIGubsLXDeQocMosmZoUsLCQN-zE&usqp=CAU",
    synopsis:
      "An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway sees through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await.",
    rating: 3.5
  },
  {
    title: "Kate",
    imageUrl:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Focc-0-2705-3934.1.nflxso.net%2Fdnm%2Fapi%2Fv6%2F6AYY37jfdO6hpXcMjf9Yu5cnmO0%2FAAAABUH2lGywEKU4j1tSuJrO-Cmu2y0Dx0ZkTyJ06O_t_N2igdsXAiJR85P74jI5-Y85hjZ6gQzCF0A-G0sR_8loTf1nvRFilycLFq4T.jpg%3Fr%3Dd9e&tbnid=mWZLsFJhj0kO_M&vet=12ahUKEwjQqeqq2fr_AhXzE94AHTqPDgwQMygFegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.netflix.com%2Ftitle%2F80216200&docid=AtAlgVSslvzkAM&w=1024&h=576&q=kate%20netflix&ved=2ahUKEwjQqeqq2fr_AhXzE94AHTqPDgwQMygFegUIARDjAQ",
    synopsis:
      "Meticulous and preternaturally skilled, Kate is the perfect specimen of a finely tuned assassin at the height of her game. But when she uncharacteristically blows an assignment targeting a member of the yakuza in Tokyo, she quickly discovers she's been poisoned, a brutally slow execution that gives her less than 24 hours to exact revenge on her killers. As her body swiftly deteriorates, Kate forms an unlikely bond with the teenage daughter of one of her past victims",
    rating: 4.2
  }
];

  return (  
    <div className="container">
      <div className='card m-3' id='pageTitle'><h1><i>~Movie Reccomendations~</i></h1></div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;