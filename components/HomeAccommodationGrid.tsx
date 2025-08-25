import React from 'react'
import styled from 'styled-components'
import AccommodationCard from './AccommodationCard'

interface Accommodation {
  id: number
  name: string
  location: string
  capacity: string
  price: string
  image: string
  hasDeal?: boolean
  dealText?: string
}

interface HomeAccommodationGridProps {
  accommodationData?: Accommodation[]
}

const AccommodationGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  padding: 0 210px;
`

const HomeAccommodationGrid: React.FC<HomeAccommodationGridProps> = ({
  accommodationData = []
}) => {
  // 홈페이지에서는 최대 6개만 표시
  const displayData = accommodationData.slice(0, 6)
  
  return (
    <AccommodationGridContainer>
      {displayData.map((accommodation) => (
        <AccommodationCard
          key={accommodation.id}
          id={accommodation.id}
          image={accommodation.image}
          name={accommodation.name}
          location={accommodation.location}
          capacity={accommodation.capacity}
          price={accommodation.price}
          hasPromotion={accommodation.hasDeal}
        />
      ))}
    </AccommodationGridContainer>
  )
}

export default HomeAccommodationGrid
