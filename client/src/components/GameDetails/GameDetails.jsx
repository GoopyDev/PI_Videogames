import React from "react";
import { connect } from "react-redux";
import { getVideogameById, cleanDetail } from "../../redux/actions";
// import validarHTML from "./ValidarHTML";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-top: 50px;
  border: 5px solid gold;
  border-radius: 10px;
  background-color: #3339;
  //prettier-ignore
  background-image: linear-gradient(to bottom, #3c0000d6,#8b0000d7 4%,transparent 20%, black 90%),
  linear-gradient(-45deg, goldenrod, gold, #fffbc2, white, goldenrod, gold, orange, yellow, darkgoldenrod, gold, white, yellow,
  #fffbc2, goldenrod, gold, #fffbc2, white, goldenrod, gold, orange, yellow, darkgoldenrod, gold, white, yellow);
  background-position: center;
  animation: shine 40s ease-in-out alternate 0s infinite;

  @keyframes shine {
    0% {
      background-size: 100%;
    }
    50% {
      background-size: 400%;
      background-position: 100% 80%;
    }
    75% {
      background-size: 250%;
      background-position: 90% 110%;
    }
    100% {
      background-size: 600%;
      background-position: 60% 85%;
    }
  }
`;

const Title = styled.h1`
  background-color: #111a;
  min-width: 400px;
  max-width: 98%;
  margin-bottom: 5px;
  padding: 15px;
  border: 5px solid white;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    min-width: 10px;
    width: 95%;
    max-width: 90% !important;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin-bottom: 5px;
`;

const ID = styled.h4`
  display: inline-block;
  border-radius: 5px;
  background-color: rgba(119, 119, 119, 0.467);
  padding: 3px;
  margin: 0 0 10px px 0;
`;
const Rating = styled.div`
  background-color: gray;
  display: block;
  position: relative;
  border-radius: 4px;
  padding: 10px;
  /* top: 250px; */
  /* left: 3.5%; */
  /* @media screen and (max-width: 850px) {
    position: relative;
    top: 0;
    left: 0;
    width: 50%;
  } */
`;
const ReleaseDate = styled.div`
  background-color: black;
  display: block;
  position: relative;
  border-radius: 4px;
  padding: 10px;
  /* top: 250px; */
  /* right: 3.5%; */
  /* right: 130px; */
  /* @media screen and (max-width: 850px) {
    position: relative;
    top: 0;
    right: 0;
    width: 50%;
  } */
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
  justify-content: space-evenly;
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
  width: 100px;
  height: 100px;
  margin: 10px 15px;
  border: 3px solid white;
  border-radius: 50px;
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
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    & img {
      width: 98%;
      margin: 5px 0;
    }
  }
`;

const Description = styled.div`
  font-size: x-large;
  background-color: #222c;
  border-radius: 10px;
  margin: 0 10px 10px 10px;
  padding: 10px;
`;

const DescriptionTitle = styled.h4`
  margin: 20px 0 0 0;
`;

const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 20px 20px 20px;
  @media screen and (max-width: 600px) {
    font-size: medium;
  }
`;

class GameDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  async componentDidMount() {
    // const url = new URLSearchParams(window.location.search);
    // const id = url.get("id");
    const id = new URLSearchParams(window.location.search).get("id");
    await this.props.getVideogameById(id);
  }

  componentWillUnmount() {
    this.props.cleanDetail();
  }

  render() {
    const {
      id,
      name,
      background_image,
      background_image_additional,
      platforms,
      description,
      released,
      rating,
      genres,
    } = this.props.game.detail;

    // const miHTML = validarHTML(description);
    return (
      <DetailContainer>
        <Title>{name}</Title>

        <InfoDiv>
          <Rating>
            Rating: {rating}
            <br />
            ✰⭐
          </Rating>

          <ID>Game ID: {id}</ID>

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
          {platforms?.map((platform) => {
            return <PlatformSpan>{platform.platform.name}</PlatformSpan>;
          })}
        </PlatformDiv>

        <Description>
          <DescriptionTitle>Descripción:</DescriptionTitle>
          <DescriptionText dangerouslySetInnerHTML={{ __html: description }} />
        </Description>
      </DetailContainer>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    game: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getVideogameById: (id) => {
      dispatch(getVideogameById(id));
    },
    cleanDetail: () => {
      dispatch(cleanDetail());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
