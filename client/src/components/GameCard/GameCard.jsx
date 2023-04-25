import styled from "styled-components";

//prettier-ignore
const genreColors = {
   4: "darkred"       , // Action
  51: "darkcyan"      , // Indie
   3: "darkgreen"     , // Adventure
   5: "darkgoldenrod" , // RPG
  10: "darkmagenta"   , // 
   2: "darkblue"      , // Shooter
  40: "darkviolet"    , // 
  14: "darkturquoise" , // 
   7: "darkolivegreen", // Puzzle
  11: "darkslateblue" , // 
  83: "black"         , // Platformer
   1: "brown"         , // 
  59: "chocolate"     , // Massively Multiplayer
  15: "blue"          , // 
   6: "red"           , // 
  19: "green"         , // 
  28: "orangered"     , // 
  34: "aquamarine"    , // 
  17: "navy"          , // 
};

const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 48%;
  margin-bottom: 10px;
  background-color: #222a;
  border: 3px solid white;
  border-radius: 10px;
  transition: all 0.5s;
  z-index: 1;
  &:hover {
    transform: scale(1.05);
    filter: saturate(1.2) contrast(1.2);
    z-index: 999;
    border: 3px solid turquoise;
  }
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

const CardSectionLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 70%;
  border-right: 3px dotted #333a;
`;

const CardSectionRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Released = styled.p`
  font-size: "small";
  color: #aaaa;
  margin: "0 0 5px 0";
`;

const GenreBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  & span {
    border-radius: 3px;
    margin: 3px 0 0 5px;
    padding: 0 3px;
  }
`;
const PlatformBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #7777;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  border-radius: 0 7px 0 0;
  overflow: hidden;
`;

const CardImg = styled.img`
  height: 100%;
`;

export default function GameCard(props) {
  console.log(props.gameData);
  const { id, name, platforms, short_screenshots, released, rating, genres } =
    props.gameData || {};
  return (
    // id, nombre, descripcion, plataformas, imagen, fecha_lanzamiento, rating, genre
    <CardContainer className="card">
      <CardSectionLeft>
        <h2 style={{ marginBottom: "0" }}>{name}</h2>
        <Released>{released}</Released>
        <GenreBox>
          {genres?.map((categoria) => (
            <span style={{ backgroundColor: `${genreColors[categoria.id]}` }}>
              {categoria.name}
            </span>
          ))}
        </GenreBox>
        <PlatformBox>
          {platforms?.map((platform) => (
            <span
              style={{
                margin: "3px 5px",
                padding: "0 3px",
                backgroundColor: "#222A",
                borderRadius: "5px",
              }}
            >
              {platform.platform.name}
            </span>
          ))}
        </PlatformBox>
      </CardSectionLeft>

      <CardSectionRight>
        <ImageContainer>
          <CardImg src={short_screenshots[0]?.image} alt="GameImg" />
        </ImageContainer>
        <label>Rating: {rating}</label>
      </CardSectionRight>
    </CardContainer>
  );
}
