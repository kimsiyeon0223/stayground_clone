import React from 'react'
import styled from 'styled-components'

const OverlayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 55vh;
  background-image: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 25px;
`

const TextOverlay = styled.div`
  position: absolute;
  left: 60px;
  bottom: 60px;
  color: white;
  z-index: 10;
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

const Description = styled.p`
  font-size: 16px;
  margin: 0 0 12px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`

const DateBox = styled.div`
  width: 400px;
  border: 1px solid white;
  background-color: rgba(203, 203, 203, 0.3);
  border-radius: 100px;
  padding: 12px 24px 12px 24px;
  display: inline-block;
  margin-top: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const DateText = styled.span`
  font-size: 18px;
  color: white;
  font-weight: 500;
`

const EndButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
`

const ImageOverlay: React.FC = () => {
  return (
    <OverlayContainer>
      <TextOverlay>
        <Title>그리드 제주 제주도 서귀포시</Title>
        <Description>알림 신청 시, 3만 원 추가 할인 쿠폰 지급</Description>
        <DateBox>
          <DateText>2월 1일, 오후 12시</DateText>
        </DateBox>
      </TextOverlay>
      <EndButton>END</EndButton>
    </OverlayContainer>
  )
}

export default ImageOverlay
