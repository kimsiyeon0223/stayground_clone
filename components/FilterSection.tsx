import React, { useState } from 'react'
import styled from 'styled-components'

interface FilterSectionProps {
  selectedAmenities: string[]
  selectedSort: string | null
  onAmenitiesChange: (amenities: string[]) => void
  onSortChange: (sort: string) => void
}

const FilterSectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 40px;
  margin-top: 40px;
  position: relative;
`

const FilterButton = styled.button<{ isWide?: boolean; hasActiveFilter?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 22px;
  background: white;
  border: 1px solid ${props => props.hasActiveFilter ? '#333' : '#e0e0e0'};
  border-radius: 1000px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  min-width: ${props => props.isWide ? '160px' : '110px'};
`

const SortModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 8px;
  width: 12%;
  overflow: hidden;
`

const SortOption = styled.button<{ isSelected?: boolean }>`
  width: 100%;
  padding: 16px 20px;
  background: ${props => props.isSelected ? '#f8f8f8' : 'white'};
  color: #333;
  border: none;
  font-size: 14px;
  font-weight: ${props => props.isSelected ? '600' : '400'};
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;

  &:hover {
    background: #f8f8f8;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`

const FilterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 100%;
`

const FilterModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 30%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 24px;
`

const FilterModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`

const FilterModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`

const FilterSection = styled.div`
  margin-bottom: 32px;
`

const FilterSectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`

const AmenitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const AmenityButton = styled.button<{ isSelected?: boolean }>`
  padding: 12px 16px;
  background: white;
  color: #333;
  border: 1px solid ${props => props.isSelected ? '#333' : '#e0e0e0'};
  border-radius: 1000px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  white-space: nowrap;
  flex: 0 0 auto;

  &:hover {
    background: #f8f8f8;
    border-color: #ccc;
  }
`

const FilterModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
`

const ResetButton = styled.button`
  padding: 16px 24px;
  background: white;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 1000px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
`

const ApplyFilterButton = styled.button`
  padding: 16px 32px;
  background: black;
  color: white;
  border: none;
  border-radius: 1000px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: 80%;
  transition: background-color 0.2s;
`

const FilterSectionComponent: React.FC<FilterSectionProps> = ({
  selectedAmenities,
  selectedSort,
  onAmenitiesChange,
  onSortChange
}) => {
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [showSortModal, setShowSortModal] = useState(false)
  const [tempAmenities, setTempAmenities] = useState(selectedAmenities)

  const amenitiesData = [
    '사계절 온수풀', 'BBQ', '노천탕', '불멍', '산책로',
    '테라스', '조식', '스마트홈', '피트니스(헬스장)', '요가',
    '노래방'
  ]

  const sortOptions = [
    '추천순',
    '최신순',
    '인기순',
    '높은 가격순',
    '낮은 가격순'
  ]

  const handleFilterClick = () => {
    setShowFilterModal(true)
  }

  const handleCloseFilter = () => {
    setShowFilterModal(false)
  }

  const handleAmenityToggle = (amenity: string) => {
    setTempAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(item => item !== amenity)
        : [...prev, amenity]
    )
  }

  const handleResetFilter = () => {
    setTempAmenities([])
  }

  const handleApplyFilter = () => {
    onAmenitiesChange(tempAmenities)
    setShowFilterModal(false)
  }

  const handleSortClick = () => {
    setShowSortModal(!showSortModal)
  }

  const handleSortSelect = (sortOption: string) => {
    onSortChange(sortOption)
    setShowSortModal(false)
  }

  return (
    <FilterSectionContainer>
      <FilterButton 
        onClick={handleFilterClick}
        hasActiveFilter={selectedAmenities.length > 0}
      >
        필터
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </FilterButton>
      
      <FilterButton isWide={true} onClick={handleSortClick}>
        {selectedSort || '추천순'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </FilterButton>

      {showSortModal && (
        <SortModal>
          {sortOptions.map((option) => (
            <SortOption
              key={option}
              isSelected={selectedSort === option}
              onClick={() => handleSortSelect(option)}
            >
              {option}
            </SortOption>
          ))}
        </SortModal>
      )}

      {showFilterModal && (
        <FilterModal>
          <FilterModalContent>
            <FilterModalHeader>
              <FilterModalTitle>필터</FilterModalTitle>
              <CloseButton onClick={handleCloseFilter}>×</CloseButton>
            </FilterModalHeader>
            
            <FilterSection>
              <FilterSectionTitle>편의 시설</FilterSectionTitle>
              <AmenitiesGrid>
                {amenitiesData.map((amenity) => (
                  <AmenityButton
                    key={amenity}
                    isSelected={tempAmenities.includes(amenity)}
                    onClick={() => handleAmenityToggle(amenity)}
                  >
                    {amenity}
                  </AmenityButton>
                ))}
              </AmenitiesGrid>
            </FilterSection>
            
            <FilterModalFooter>
              <ResetButton onClick={handleResetFilter}>
                초기화
              </ResetButton>
              <ApplyFilterButton onClick={handleApplyFilter}>
                적용
              </ApplyFilterButton>
            </FilterModalFooter>
          </FilterModalContent>
        </FilterModal>
      )}
    </FilterSectionContainer>
  )
}

export default FilterSectionComponent
