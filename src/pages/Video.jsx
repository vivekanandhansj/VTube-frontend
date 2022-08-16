import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
  border: solid #red;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
display:flex;
gap:20px;

`;
const Image = styled.img`
width: 50px;
height:50px;
border-radius:50%;
`;
const ChannelDetail = styled.div`
display:flex;
flex-direction:column;
color:${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
font-weight:500;`;
const ChannelCounter = styled.span`
margin-top:5px;
margin-bottom:20px;
color:${({ theme }) => theme.textSoft};
font-size:10px;
`;
const Description = styled.p`font-size:12px;`;
const Subscribe = styled.button`
background-color:#cc1a00;
font-weight: 500;
color:white;
border:none;
border-radius: 3px;
height:max-content;
padding:10px 20px;
cursor:pointer;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LYMhbm2ORoc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>
          Ponniyin Selvan Teaser | #PS1 Tamil | Mani Ratnam | AR Rahman |
          Subaskaran | Madras Talkies | Lyca
        </Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://i.zoomtventertainment.com/101284222_249899159654768_72588961795395394_n_1591086953__rend_1_1.jpg?tr=w-600"/>
            <ChannelDetail>
              <ChannelName>Maniratnam</ChannelName>
              <ChannelCounter>20M subscribers</ChannelCounter>
              <Description>
                Subaskaran Presents A Mani Ratnam Film Ponniyin Selvan Part One
                (Tamil) Teaser An AR Rahman Musical Based on Kalki’s "Ponniyin
                Selvan" Releasing in theatres on 30th September 2022.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;
