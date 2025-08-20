import React from 'react'
import styled from 'styled-components'
import AccommodationCard from './AccommodationCard'

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 60px 0;
  background: white;
`

const accommodationData = [
  {
    id: 1,
    name: '녹온',
    location: '강원도 속초시',
    capacity: '기준 2인(최대6인)',
    price: '330,000',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: '뭇별',
    location: '강원도 삼척시',
    capacity: '기준 2인(최대6인)',
    price: '520,000',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
    hasPromotion: true
  },
  {
    id: 3,
    name: '고유시차',
    location: '강원도 춘천시',
    capacity: '기준 2인(최대4인)',
    price: '360,000',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
  }
]

const AccommodationGrid: React.FC = () => {
  return (
    <GridContainer>
      {accommodationData.map((accommodation) => (
        <AccommodationCard
          key={accommodation.id}
          image={accommodation.image}
          name={accommodation.name}
          location={accommodation.location}
          capacity={accommodation.capacity}
          price={accommodation.price}
          hasPromotion={accommodation.hasPromotion}
        />
      ))}
    </GridContainer>
  )
}

export default AccommodationGrid
