import React from 'react'
import styled from 'styled-components'

interface AccommodationCardProps {
  image: string
  name: string
  location: string
  capacity: string
  price: string
  hasPromotion?: boolean
}

const CardContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  transition: none;
  cursor: pointer;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
`

const Image = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`

const PromotionTag = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: #333;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`

const ContentContainer = styled.div`
  padding: 20px 0;
`

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`

const LocationAndCapacity = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
  line-height: 1.4;
`

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`

const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`

const PriceUnit = styled.span`
  font-size: 14px;
  color: #666;
`

const AccommodationCard: React.FC<AccommodationCardProps> = ({
  image,
  name,
  location,
  capacity,
  price,
  hasPromotion = false
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image imageUrl={image} />
        {hasPromotion && <PromotionTag>PROMOTION</PromotionTag>}
      </ImageContainer>
      <ContentContainer>
        <Name>{name}</Name>
        <LocationAndCapacity>{location} | {capacity}</LocationAndCapacity>
        <PriceContainer>
          <Price>{price}</Price>
          <PriceUnit>원 ~</PriceUnit>
        </PriceContainer>
      </ContentContainer>
    </CardContainer>
  )
}

export default AccommodationCard
