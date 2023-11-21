import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin: auto;
  border: 3px solid antiquewhite;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 10px 0;
  background-color: #111a;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 98%;
  margin-bottom: 5px;
`;

const Rating = styled.div`
  background-color: gray;
  display: block;
  position: relative;
  border-radius: 4px;
  padding: 10px;
`;

const ReleaseDate = styled.div`
  background-color: black;
  display: block;
  position: relative;
  border-radius: 4px;
  padding: 10px;
`;

const Genres = styled.div`
  display: flex;
  color: #333333;
  background-color: #eeeeeeaa;
  border: 3px dotted white;
  border-radius: 15px;
  width: 98%;
  /* margin: 0 10px; */
`;

const PlatformDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  width: 98%;
  background-color: black;
  /* margin: 0 10px; */
  border: 3px solid white;
  border-radius: 5px;
`;

const PlatformSpan = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
  min-width: 65px;
  /* height: 100px; */
  margin: 1px;
  border: 3px solid white;
  /* border-radius: 50px; */
`;

const IMGDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 0;
  & img {
    width: 48.5%;
    border: 3px solid black;
    border-radius: 10px;
  }
`;

export default function DetailGameParser(props) {
  // console.log(this.props);
  const {
    id,
    name,
    background_image,
    background_image_additional,
    platforms,
    released,
    rating,
    genres,
    source,
  } = props.game || [];

  // const miHTML = validarHTML(description);
  return (
    <Link to={`/DetailPage?id=${id}&source=${source}`}>
      <DetailContainer>
        <Title>{name}</Title>

        <InfoDiv>
          <Rating>Rating: {rating} ✰⭐</Rating>

          <ReleaseDate>
            Lanzamiento:
            <br />
            {released}
          </ReleaseDate>
        </InfoDiv>

        <Genres>{genres?.map((genre) => genre.name)}</Genres>

        <IMGDiv>
          <img src={background_image} alt="Game Background" />
          <img
            src={background_image_additional}
            alt="Additional Game Background"
          />
        </IMGDiv>

        <Label>Plataformas disponibles:</Label>
        <PlatformDiv>
          {platforms?.map((platform, index) => {
            return (
              <PlatformSpan key={index}>{platform.platform.name}</PlatformSpan>
            );
          })}
        </PlatformDiv>
      </DetailContainer>
    </Link>
  );
}
