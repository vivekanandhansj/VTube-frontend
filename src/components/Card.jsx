import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: ${(props)=>props.type !=="sm" && "200px"};

  margin-bottom: ${(props)=>props.type ==="sm" ? "10px" : "45px"};
  cursor: pointer;
   display:${(props)=>props.type ==="sm" && "flex"}
`;
const Image = styled.img`
  width: 100%;
  height:${(props)=>props.type ==="sm" ? "102px" : "202px"} ;
  background-color: #999;
  flex:1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm"  && "16px" };
  margin-left: ${(props) => props.type === "sm"  && "8px" };
  gap: 12px;
  flex:1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({type}) => {
  return (
    <Link to = "/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
      <Image type={type} src="https://www.masala.com/cloud/2022/08/09/ePjvdy04-Ponniyin-Selvan-Teaser-2022-scaled-2-1200x728.jpg" />
      <Details type={type}>
        <ChannelImage
        type={type}
         src="https://i.zoomtventertainment.com/101284222_249899159654768_72588961795395394_n_1591086953__rend_1_1.jpg?tr=w-600" />
        <Texts>
          <Title>Ponniyin Selvan</Title>
          <ChannelName>Maniratnam</ChannelName>
          <Info>660,988 views. 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
};

export default Card;
