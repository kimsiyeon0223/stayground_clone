import React, { useEffect, useRef, useState } from 'react'
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

interface AccommodationGridProps {
  accommodationData?: Accommodation[]
  onLoadMore: () => void
  hasMore: boolean
  isLoading: boolean
}

const AccommodationGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
`

const AnimatedCard = styled.div<{ isVisible: boolean; delay?: string }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : '30px'});
  transition: all 0.6s ease;
  transition-delay: ${props => props.delay || '0s'};
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`

const AccommodationGridComponent: React.FC<AccommodationGridProps> = ({
  accommodationData = [],
  onLoadMore,
  hasMore,
  isLoading
}) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadingRef = useRef<HTMLDivElement>(null)

  // 카드 애니메이션 observer 설정
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0')
            setVisibleCards(prev => new Set(prev).add(cardId))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const cards = document.querySelectorAll('.accommodation-card')
    cards.forEach((card) => {
      cardObserver.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        cardObserver.unobserve(card)
      })
    }
  }, [accommodationData])

  // 무한 스크롤 observer 설정
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          onLoadMore()
        }
      },
      { threshold: 0.1 }
    )

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [hasMore, isLoading, onLoadMore])

  return (
    <>
      <AccommodationGridContainer>
        {accommodationData?.map((accommodation, index) => (
          <AnimatedCard
            key={accommodation.id}
            className="accommodation-card"
            data-card-id={accommodation.id}
            isVisible={visibleCards.has(accommodation.id)}
            delay={`${(index % 6) * 0.1}s`}
          >
            <AccommodationCard
              id={accommodation.id}
              image={accommodation.image}
              name={accommodation.name}
              location={accommodation.location}
              capacity={accommodation.capacity}
              price={accommodation.price}
              hasPromotion={accommodation.hasDeal}
            />
          </AnimatedCard>
        ))}
      </AccommodationGridContainer>
      
      {hasMore && (
        <LoadingSpinner ref={loadingRef}>
          {isLoading ? '로딩 중...' : ''}
        </LoadingSpinner>
      )}
    </>
  )
}

export default AccommodationGridComponent
