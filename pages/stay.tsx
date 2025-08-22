import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import AccommodationCard from '../components/AccommodationCard'
import Footer from '../components/Footer'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
`

const MainContent = styled.main`
  padding-top: 180px;
`

const ContentWrapper = styled.div`
  padding: 0 210px;
`

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #333;
  margin-bottom: 40px;
  
`

const SearchBar = styled.div`
  display: flex;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  overflow: hidden;
  margin-bottom: 40px;
`

const SearchSection = styled.div<{ isActive?: boolean }>`
  flex: 1;
  padding: 15px 32px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.isActive ? 1 : 0.3};

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: #e0e0e0;
  }

  &:hover {
    background: #f8f8f8;
  }
`

const SearchLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin-bottom: 8px;
`

const SearchPlaceholder = styled.div<{ hasValue?: boolean }>`
  font-size: 16px;
  color: ${props => props.hasValue ? '#000' : '#999'};
  font-weight: ${props => props.hasValue ? '600' : '400'};
`

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 20px;
  margin-top: 40px;
`

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 8px;
`

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
width: fit-content;
`

const IconLabel = styled.div`
  font-size: 12px;
  color: #333;
  width: fit-content;
  font-weight: 500;
`

const LocationModal = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 8px;
  padding: 20px;
  width: 50%;
`

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`

const LocationButton = styled.button`
  padding: 12px 16px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 1000px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f8f8;
    border-color: #ccc;
  }
`



const SearchBarContainer = styled.div`
  position: relative;
`

const CalendarModal = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 8px;
  padding: 20px 20px 80px 20px;
  width: 600px;
`

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
`

const MonthButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`

const MonthTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
  text-align: center;
`

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`

const MonthCalendar = styled.div`
  display: flex;
  flex-direction: column;
`

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
`

const WeekDay = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  padding: 8px 0;
`

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`

const DayButton = styled.button<{ 
  isSelected?: boolean; 
  isInRange?: boolean; 
  isCurrentMonth?: boolean | null;
  isToday?: boolean;
}>`
  width: 32px;
  height: 32px;
  border: none;
  background: ${props => {
    if (props.isSelected) return '#333';
    if (props.isInRange) return '#f0f0f0';
    return 'transparent';
  }};
  color: ${props => {
    if (props.isSelected) return 'white';
    if (!props.isCurrentMonth) return '#ccc';
    if (props.isToday) return '#333';
    return '#333';
  }};
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${props => props.isToday ? '600' : '400'};
  transition: all 0.2s;

  &:hover {
    background: ${props => props.isSelected ? '#333' : '#f5f5f5'};
    border: ${props => !props.isSelected ? '1px solid #333' : 'none'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`

const ApplyButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 14px 28px;
  background: #333;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #555;
  }
`

const PeopleModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 8px;
  padding: 24px;
  width: 300px;
`

const PeopleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-of-type {
    border-bottom: none;
  }
`

const PeopleLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const CounterButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  color: #333;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

const CounterNumber = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  min-width: 20px;
  text-align: center;
`

const PeopleApplyButton = styled.button`
  width: 40%;
  padding: 14px;
  background: #333;
  color: white;
  border: none;
  border-radius: 1000px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #555;
  }
`

const PeopleApplyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

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

const AccommodationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
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





const StayPage = () => {
  const [activeSearchSection, setActiveSearchSection] = useState<string | null>(null)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [showCalendarModal, setShowCalendarModal] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 7, 1)) // 2025년 8월
  const [selectedDates, setSelectedDates] = useState<{ checkin: Date | null; checkout: Date | null }>({
    checkin: new Date(2025, 7, 6), // 2025년 8월 6일
    checkout: new Date(2025, 7, 8) // 2025년 8월 8일
  })
  const [isSelectingCheckout, setIsSelectingCheckout] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>('서울')
  const [showPeopleModal, setShowPeopleModal] = useState(false)
  const [peopleCount, setPeopleCount] = useState({
    adults: 2,
    children: 0,
    infants: 0
  })
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [showSortModal, setShowSortModal] = useState(false)
  const [selectedSort, setSelectedSort] = useState<string | null>(null)

  const iconData = [
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: '모든 스테이' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="12" y="10" textAnchor="middle" fontSize="8" fill="currentColor">%</text>
        </svg>
      ), 
      label: '마감 임박 할인' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L10 4L12 6L14 4L16 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ), 
      label: '단독 숙소' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10L12 4L20 10V20H4V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 20V12H16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1"/>
          <path d="M6 18L8 16L10 18L12 16L14 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ), 
      label: '캠핑&글램핑' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: '반려동물' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 14L10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: '수영장' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 6L8 8L10 6L12 8L14 6L16 8L18 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ), 
      label: '자쿠지' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14L9 12L11 14L13 12L15 14L17 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ), 
      label: '한옥' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12L6 8L10 12L14 8L18 12L22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="4" r="2" stroke="currentColor" strokeWidth="1"/>
          <path d="M2 16L6 12L10 16L14 12L18 16L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: '오션뷰' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14L10 12L12 14L14 12L16 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ), 
      label: '숲뷰' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="7" y="14" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
          <rect x="11" y="14" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
          <rect x="15" y="14" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ), 
      label: '시티뷰' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12L6 10L8 12L10 10L12 12L14 10L16 12L18 10L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 8L8 6L10 8L12 6L14 8L16 6L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 16L10 14L12 16L14 14L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      label: '하버뷰' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 18L10 16L12 18L14 16L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L8 4L10 6L12 4L14 6L16 4L18 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      ), 
      label: '사우나' 
    }
  ]

  const handleSearchSectionClick = (section: string) => {
    setActiveSearchSection(section)
    if (section === 'destination') {
      setShowLocationModal(true)
      setShowCalendarModal(false)
      setShowPeopleModal(false)
    } else if (section === 'checkin' || section === 'checkout') {
      setShowCalendarModal(true)
      setShowLocationModal(false)
      setShowPeopleModal(false)
      setIsSelectingCheckout(section === 'checkout')
    } else if (section === 'people') {
      setShowPeopleModal(true)
      setShowLocationModal(false)
      setShowCalendarModal(false)
    }
  }

  const formatDate = (date: Date) => {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate()
  }

  const isInRange = (date: Date) => {
    if (!selectedDates.checkin || !selectedDates.checkout) return false
    return date > selectedDates.checkin && date < selectedDates.checkout
  }

  const handleDateClick = (date: Date) => {
    if (!isSelectingCheckout) {
      // 체크인 선택
      setSelectedDates(prev => ({
        ...prev,
        checkin: date,
        checkout: null
      }))
      setIsSelectingCheckout(true)
    } else {
      // 체크아웃 선택
      if (selectedDates.checkin && date > selectedDates.checkin) {
        setSelectedDates(prev => ({
          ...prev,
          checkout: date
        }))
        setIsSelectingCheckout(false)
      } else {
        // 체크아웃이 체크인보다 이전이면 체크인을 다시 선택
        setSelectedDates({
          checkin: date,
          checkout: null
        })
        setIsSelectingCheckout(true)
      }
    }
  }

  const handleApplyDates = () => {
    setShowCalendarModal(false)
    setActiveSearchSection('people')
    setShowPeopleModal(true)
  }

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location)
    setShowLocationModal(false)
    // 여행지 선택 후 체크인으로 자동 이동
    setActiveSearchSection('checkin')
    setShowCalendarModal(true)
    setIsSelectingCheckout(false)
  }

  const handlePeopleCountChange = (type: 'adults' | 'children' | 'infants', action: 'increase' | 'decrease') => {
    setPeopleCount(prev => {
      const newCount = { ...prev }
      if (action === 'increase') {
        newCount[type]++
      } else {
        if (newCount[type] > 0) {
          newCount[type]--
        }
      }
      return newCount
    })
  }

  const handlePeopleApply = () => {
    setShowPeopleModal(false)
    setActiveSearchSection(null)
  }

  const formatPeopleText = () => {
    const { adults, children, infants } = peopleCount
    const parts = []
    
    if (adults > 0) parts.push(`성인 ${adults}명`)
    if (children > 0) parts.push(`아동 ${children}명`)
    if (infants > 0) parts.push(`영아 ${infants}명`)
    
    return parts.length > 0 ? parts.join(', ') : '인원 선택'
  }

  const handleFilterClick = () => {
    setShowFilterModal(true)
  }

  const handleCloseFilter = () => {
    setShowFilterModal(false)
  }

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(item => item !== amenity)
        : [...prev, amenity]
    )
  }

  const handleResetFilter = () => {
    setSelectedAmenities([])
  }

  const handleApplyFilter = () => {
    setShowFilterModal(false)
    // 여기에 필터 적용 로직 추가
  }

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

  const handleSortClick = () => {
    setShowSortModal(!showSortModal)
  }

  const handleSortSelect = (sortOption: string) => {
    setSelectedSort(sortOption)
    setShowSortModal(false)
  }

  const renderCalendar = (monthOffset: number = 0) => {
    const targetMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset, 1)
    const daysInMonth = getDaysInMonth(targetMonth)
    const firstDay = getFirstDayOfMonth(targetMonth)
    const today = new Date()
    
    const days = []
    
    // 이전 달의 마지막 날들
    for (let i = 0; i < firstDay; i++) {
      const prevMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth() - 1, 0)
      const prevDay = prevMonth.getDate() - firstDay + i + 1
      days.push(
        <DayButton key={`prev-${i}`} isCurrentMonth={!!false}>
          {prevDay}
        </DayButton>
      )
    }
    
    // 현재 달의 날들
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), day)
      const isSelected = (selectedDates.checkin && isSameDay(date, selectedDates.checkin)) ||
                        (selectedDates.checkout && isSameDay(date, selectedDates.checkout))
      const inRange = isInRange(date)
      const isToday = isSameDay(date, today)
      
      days.push(
        <DayButton
          key={day}
          isSelected={!!isSelected}
          isInRange={!!inRange}
          isCurrentMonth={!!true}
          isToday={!!isToday}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </DayButton>
      )
    }
    
    // 다음 달의 첫 날들
    const remainingDays = 42 - days.length // 6주 * 7일 = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <DayButton key={`next-${i}`} isCurrentMonth={!!false}>
          {i}
        </DayButton>
      )
    }
    
    return (
      <MonthCalendar>
        <MonthTitle>{targetMonth.getFullYear()}년 {targetMonth.getMonth() + 1}월</MonthTitle>
        <WeekDays>
          <WeekDay>일</WeekDay>
          <WeekDay>월</WeekDay>
          <WeekDay>화</WeekDay>
          <WeekDay>수</WeekDay>
          <WeekDay>목</WeekDay>
          <WeekDay>금</WeekDay>
          <WeekDay>토</WeekDay>
        </WeekDays>
        <DaysGrid>
          {days}
        </DaysGrid>
      </MonthCalendar>
    )
  }

  const locationData = [
    '전체', '서울', '부산', '대구', '인천',
    '대전', '광주', '울산', '경기도', '강원도',
    '충청남도', '충청북도', '전라남도', '전라북도', '경상남도',
    '경상북도', '제주도'
  ]

  const accommodationData = [
    {
      id: 1,
      name: '느린미학',
      location: '경상북도 경주시',
      capacity: '기준 2인(최대4인)',
      price: '330,000원~',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 2,
      name: '달리야드',
      location: '제주도 서귀포시',
      capacity: '기준 4인(최대4인)',
      price: '350,000원~',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 3,
      name: '누운 섶',
      location: '제주도 제주시',
      capacity: '기준 2인(최대6인)',
      price: '390,000원',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 4,
      name: '숙소 4',
      location: '경기도 가평군',
      capacity: '기준 2인(최대4인)',
      price: '280,000원~',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -15%'
    },
    {
      id: 5,
      name: '숙소 5',
      location: '강원도 평창군',
      capacity: '기준 4인(최대6인)',
      price: '420,000원~',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -10%'
    },
    {
      id: 6,
      name: '숙소 6',
      location: '충청남도 태안군',
      capacity: '기준 2인(최대4인)',
      price: '310,000원~',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      hasDeal: false
    }
  ]

  return (
    <Container>
      <Header isScrolled={true} />
      <MainContent>
        <ContentWrapper>
          <MainTitle>CHECK IN TRAVEL</MainTitle>
          
          <SearchBarContainer>
            <SearchBar>
              <SearchSection 
                isActive={activeSearchSection === 'destination'}
                onClick={() => handleSearchSectionClick('destination')}
              >
                <SearchLabel>여행지</SearchLabel>
                <SearchPlaceholder hasValue={!!selectedLocation}>
                  {selectedLocation || '여행지/숙소 검색'}
                </SearchPlaceholder>
              </SearchSection>
              
              <SearchSection 
                isActive={activeSearchSection === 'checkin'}
                onClick={() => handleSearchSectionClick('checkin')}
              >
                <SearchLabel>체크인</SearchLabel>
                <SearchPlaceholder hasValue={!!selectedDates.checkin}>
                  {selectedDates.checkin ? formatDate(selectedDates.checkin) : '체크인 날짜 검색'}
                </SearchPlaceholder>
              </SearchSection>
              
              <SearchSection 
                isActive={activeSearchSection === 'checkout'}
                onClick={() => handleSearchSectionClick('checkout')}
              >
                <SearchLabel>체크아웃</SearchLabel>
                <SearchPlaceholder hasValue={!!selectedDates.checkout}>
                  {selectedDates.checkout ? formatDate(selectedDates.checkout) : '체크아웃 날짜 검색'}
                </SearchPlaceholder>
              </SearchSection>
              
              <SearchSection 
                isActive={activeSearchSection === 'people'}
                onClick={() => handleSearchSectionClick('people')}
              >
                <SearchLabel>인원</SearchLabel>
                <SearchPlaceholder hasValue={peopleCount.adults > 0 || peopleCount.children > 0 || peopleCount.infants > 0}>
                  {formatPeopleText()}
                </SearchPlaceholder>
              </SearchSection>
            </SearchBar>

            {showLocationModal && (
              <LocationModal>
                <LocationGrid>
                  {locationData.map((location, index) => (
                    <LocationButton 
                      key={index}
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location}
                    </LocationButton>
                  ))}
                </LocationGrid>
              </LocationModal>
            )}

            {showCalendarModal && (
              <CalendarModal>
                <CalendarHeader>
                  <MonthButton onClick={handlePrevMonth}>&lt;</MonthButton>
                  <MonthButton onClick={handleNextMonth}>&gt;</MonthButton>
                </CalendarHeader>
                
                <CalendarGrid>
                  {renderCalendar(0)}
                  {renderCalendar(1)}
                </CalendarGrid>
                
                <ApplyButton onClick={handleApplyDates}>
                  적용
                </ApplyButton>
              </CalendarModal>
            )}

            {showPeopleModal && (
              <PeopleModal>
                <PeopleRow>
                  <PeopleLabel>성인</PeopleLabel>
                  <CounterContainer>
                    <CounterButton 
                      onClick={() => handlePeopleCountChange('adults', 'decrease')}
                      disabled={peopleCount.adults <= 0}
                    >
                      -
                    </CounterButton>
                    <CounterNumber>{peopleCount.adults}</CounterNumber>
                    <CounterButton 
                      onClick={() => handlePeopleCountChange('adults', 'increase')}
                    >
                      +
                    </CounterButton>
                  </CounterContainer>
                </PeopleRow>
                
                <PeopleRow>
                  <PeopleLabel>아동</PeopleLabel>
                  <CounterContainer>
                    <CounterButton 
                      onClick={() => handlePeopleCountChange('children', 'decrease')}
                      disabled={peopleCount.children <= 0}
                    >
                      -
                    </CounterButton>
                    <CounterNumber>{peopleCount.children}</CounterNumber>
                    <CounterButton 
                      onClick={() => handlePeopleCountChange('children', 'increase')}
                    >
                      +
                    </CounterButton>
                  </CounterContainer>
                </PeopleRow>
                
                                <PeopleRow>
                  <PeopleLabel>영아</PeopleLabel>
                  <CounterContainer>
                    <CounterButton 
                      onClick={() => handlePeopleCountChange('infants', 'decrease')}
                      disabled={peopleCount.infants <= 0}
                    >
                      -
                    </CounterButton>
                    <CounterNumber>{peopleCount.infants}</CounterNumber>
                    <CounterButton 
                      onClick={() => handlePeopleCountChange('infants', 'increase')}
                    >
                      +
                    </CounterButton>
                  </CounterContainer>
                </PeopleRow>
                
                <PeopleApplyContainer>
                  <PeopleApplyButton onClick={handlePeopleApply}>
                    적용
                  </PeopleApplyButton>
                </PeopleApplyContainer>
                
              </PeopleModal>
            )}
          </SearchBarContainer>

          <IconGrid>
            {iconData.map((item, index) => (
              <IconItem key={index}>
                <IconWrapper>
                  {item.icon}
                </IconWrapper>
                <IconLabel>{item.label}</IconLabel>
              </IconItem>
            ))}
          </IconGrid>

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
          </FilterSectionContainer>

          <AccommodationGrid>
            {accommodationData.map((accommodation) => (
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
          </AccommodationGrid>
        </ContentWrapper>
      </MainContent>

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
                    isSelected={selectedAmenities.includes(amenity)}
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
      
      <Footer />
    </Container>
  )
}

export default StayPage
