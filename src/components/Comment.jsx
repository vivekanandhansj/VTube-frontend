import React from 'react'
import styled from "styled-components";
const Container = styled.div`
display:flex;
margin:30px 0px;
gap:10px;
`
const Avatar = styled.img`
width: 50px;
height:50px;
border-radius:50%;
`
const Details  = styled.div`
display:flex;
flex-direction:column;
gap:10px;
color: ${({ theme }) => theme.text};
`
const Name  = styled.span`
font-size:13px;
font-weight:500;


`
const Date  = styled.span`
font-size: 12px;
font-weight:400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`
const Text  = styled.span`
font-size:14px;
font-weight:500;

`
const Comment = () => {
  return (
    <Container>
        <Avatar src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"/>
        <Details>
            <Name>vivek<Date>1 day ago</Date></Name>
            <Text>It's festive to watch just the trailer. Can't imagine how the movie would be?</Text>
            </Details>  
    </Container>
  )
}

export default Comment