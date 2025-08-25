import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding: 0 210px;
`

const Card = styled.div`
  width: 40%;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`

const Image = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 25px 25px 0 0;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

const DayBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
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
`

const ContentContainer = styled.div`
  padding: 40px 20px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 15px 0;
  line-height: 1.4;
`

const CallToAction = styled.a`
  font-size: 14px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding-top: 20px;
`

const promotionData = [
  {
    id: 4,
    title: '느린미학 썸머 프로모션',
    description: '기간 내 숙박 시 10% 할인',
    callToAction: '예약하기 >',
    dayBadge: 'D-11',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: '달리야드 9월 프로모션',
    description: '기간 내 평일 숙박 시 10% 할인',
    callToAction: '예약하기 >',
    dayBadge: 'D-41',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: '누운 섶 썸머 페스타',
    description: '여름 휴가를 준비하는 여러분에게 2만원 쿠폰을 선물합니다!',
    callToAction: '더보기 >',
    dayBadge: 'D-11',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
  }
]

const PromotionCards: React.FC = () => {
  const router = useRouter()

  const handleCardClick = (promotionId: number) => {
    // 프로모션 ID에 따라 해당하는 숙소 상세 페이지로 이동
    const accommodationMapping: { [key: number]: number } = {
      4: 1, // 보스케 썸머 프로모션 -> 숙소 ID 1
      5: 2, // 조각밤 9월 프로모션 -> 숙소 ID 2
      6: 3  // 스테이그라운드 썸머 페스타 -> 숙소 ID 3
    }
    
    const accommodationId = accommodationMapping[promotionId] || 1
    router.push(`/accommodation/${accommodationId}`)
  }

  return (
    <Container>
      {promotionData.map((promotion) => (
        <Card key={promotion.id} onClick={() => handleCardClick(promotion.id)}>
          <ImageContainer>
            <Image imageUrl={promotion.image} />
            <DayBadge>{promotion.dayBadge}</DayBadge>
          </ImageContainer>
          <ContentContainer>
            <Title>{promotion.title}</Title>
            <Description>{promotion.description}</Description>
            <CallToAction>{promotion.callToAction}</CallToAction>
          </ContentContainer>
        </Card>
      ))}
    </Container>
  )
}

export default PromotionCards
