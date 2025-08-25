import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLanguage } from '../contexts/LanguageContext'

interface SearchBarProps {
  selectedLocation: string | null
  selectedDates: { checkin: Date | null; checkout: Date | null }
  peopleCount: { adults: number; children: number; infants: number }
  onLocationSelect: (location: string) => void
  onDateSelect: (dates: { checkin: Date | null; checkout: Date | null }) => void
  onPeopleSelect: (people: { adults: number; children: number; infants: number }) => void
}

const SearchBarContainer = styled.div`
  position: relative;
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
  border-radius: 1000px;
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

const SearchBarComponent: React.FC<SearchBarProps> = ({
  selectedLocation,
  selectedDates,
  peopleCount,
  onLocationSelect,
  onDateSelect,
  onPeopleSelect
}) => {
  const { t } = useLanguage()
  const [activeSearchSection, setActiveSearchSection] = useState<string | null>(null)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [showCalendarModal, setShowCalendarModal] = useState(false)
  const [showPeopleModal, setShowPeopleModal] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isSelectingCheckout, setIsSelectingCheckout] = useState(false)
  const [tempDates, setTempDates] = useState(selectedDates)
  const [tempPeopleCount, setTempPeopleCount] = useState(peopleCount)

  // 모달 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      
      // 위치 모달 외부 클릭
      if (showLocationModal && !target.closest('.location-modal')) {
        setShowLocationModal(false)
        setActiveSearchSection(null)
      }
      
      // 캘린더 모달 외부 클릭
      if (showCalendarModal && !target.closest('.calendar-modal')) {
        setShowCalendarModal(false)
        setActiveSearchSection(null)
      }
      
      // 인원 모달 외부 클릭
      if (showPeopleModal && !target.closest('.people-modal')) {
        setShowPeopleModal(false)
        setActiveSearchSection(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showLocationModal, showCalendarModal, showPeopleModal])

  const locationData = [
    t('stay.location.all'), t('stay.location.seoul'), t('stay.location.busan'), t('stay.location.daegu'), t('stay.location.incheon'),
    t('stay.location.daejeon'), t('stay.location.gwangju'), t('stay.location.ulsan'), t('stay.location.gyeonggi'), t('stay.location.gangwon'),
    t('stay.location.chungnam'), t('stay.location.chungbuk'), t('stay.location.jeonnam'), t('stay.location.jeonbuk'), t('stay.location.gyeongnam'),
    t('stay.location.gyeongbuk'), t('stay.location.jeju')
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
    if (!tempDates.checkin || !tempDates.checkout) return false
    return date > tempDates.checkin && date < tempDates.checkout
  }

  const handleDateClick = (date: Date) => {
    if (!isSelectingCheckout) {
      setTempDates(prev => ({
        ...prev,
        checkin: date,
        checkout: null
      }))
      setIsSelectingCheckout(true)
    } else {
      if (tempDates.checkin && date > tempDates.checkin) {
        setTempDates(prev => ({
          ...prev,
          checkout: date
        }))
        setIsSelectingCheckout(false)
      } else {
        setTempDates({
          checkin: date,
          checkout: null
        })
        setIsSelectingCheckout(true)
      }
    }
  }

  const handleApplyDates = () => {
    onDateSelect(tempDates)
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
    onLocationSelect(location)
    setShowLocationModal(false)
    setActiveSearchSection('checkin')
    setShowCalendarModal(true)
    setIsSelectingCheckout(false)
  }

  const handlePeopleCountChange = (type: 'adults' | 'children' | 'infants', action: 'increase' | 'decrease') => {
    setTempPeopleCount(prev => {
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
    onPeopleSelect(tempPeopleCount)
    setShowPeopleModal(false)
    setActiveSearchSection(null)
  }

  const formatPeopleText = () => {
    const { adults, children, infants } = peopleCount
    const parts = []
    
    if (adults > 0) parts.push(`${t('stay.search.adult')} ${adults}${t('stay.search.people_count')}`)
    if (children > 0) parts.push(`${t('stay.search.child')} ${children}${t('stay.search.people_count')}`)
    if (infants > 0) parts.push(`${t('stay.search.infant')} ${infants}${t('stay.search.people_count')}`)
    
    return parts.length > 0 ? parts.join(', ') : t('stay.search.people_placeholder')
  }

  const renderCalendar = (monthOffset: number = 0) => {
    const targetMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset, 1)
    const daysInMonth = getDaysInMonth(targetMonth)
    const firstDay = getFirstDayOfMonth(targetMonth)
    const today = new Date()
    
    const days = []
    
    for (let i = 0; i < firstDay; i++) {
      const prevMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth() - 1, 0)
      const prevDay = prevMonth.getDate() - firstDay + i + 1
      days.push(
        <DayButton key={`prev-${i}`} isCurrentMonth={!!false}>
          {prevDay}
        </DayButton>
      )
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), day)
      const isSelected = (tempDates.checkin && isSameDay(date, tempDates.checkin)) ||
                        (tempDates.checkout && isSameDay(date, tempDates.checkout))
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
    
    const remainingDays = 42 - days.length
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

  return (
    <SearchBarContainer>
      <SearchBar>
        <SearchSection 
          isActive={activeSearchSection === 'destination'}
          onClick={() => handleSearchSectionClick('destination')}
        >
          <SearchLabel>{t('stay.search.destination')}</SearchLabel>
          <SearchPlaceholder hasValue={!!selectedLocation}>
            {selectedLocation || t('stay.search.destination_placeholder')}
          </SearchPlaceholder>
        </SearchSection>
        
        <SearchSection 
          isActive={activeSearchSection === 'checkin'}
          onClick={() => handleSearchSectionClick('checkin')}
        >
          <SearchLabel>{t('stay.search.checkin')}</SearchLabel>
          <SearchPlaceholder hasValue={!!selectedDates.checkin}>
            {selectedDates.checkin ? formatDate(selectedDates.checkin) : t('stay.search.checkin_placeholder')}
          </SearchPlaceholder>
        </SearchSection>
        
        <SearchSection 
          isActive={activeSearchSection === 'checkout'}
          onClick={() => handleSearchSectionClick('checkout')}
        >
          <SearchLabel>{t('stay.search.checkout')}</SearchLabel>
          <SearchPlaceholder hasValue={!!selectedDates.checkout}>
            {selectedDates.checkout ? formatDate(selectedDates.checkout) : t('stay.search.checkout_placeholder')}
          </SearchPlaceholder>
        </SearchSection>
        
        <SearchSection 
          isActive={activeSearchSection === 'people'}
          onClick={() => handleSearchSectionClick('people')}
        >
          <SearchLabel>{t('stay.search.people')}</SearchLabel>
          <SearchPlaceholder hasValue={peopleCount.adults > 0 || peopleCount.children > 0 || peopleCount.infants > 0}>
            {formatPeopleText()}
          </SearchPlaceholder>
        </SearchSection>
      </SearchBar>

      {showLocationModal && (
        <LocationModal className="location-modal">
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
        <CalendarModal className="calendar-modal">
          <CalendarHeader>
            <MonthButton onClick={handlePrevMonth}>&lt;</MonthButton>
            <MonthButton onClick={handleNextMonth}>&gt;</MonthButton>
          </CalendarHeader>
          
          <CalendarGrid>
            {renderCalendar(0)}
            {renderCalendar(1)}
          </CalendarGrid>
          
          <ApplyButton onClick={handleApplyDates}>
            {t('stay.search.apply')}
          </ApplyButton>
        </CalendarModal>
      )}

      {showPeopleModal && (
        <PeopleModal className="people-modal">
          <PeopleRow>
            <PeopleLabel>{t('stay.search.adult')}</PeopleLabel>
            <CounterContainer>
              <CounterButton 
                onClick={() => handlePeopleCountChange('adults', 'decrease')}
                disabled={tempPeopleCount.adults <= 0}
              >
                -
              </CounterButton>
              <CounterNumber>{tempPeopleCount.adults}</CounterNumber>
              <CounterButton 
                onClick={() => handlePeopleCountChange('adults', 'increase')}
              >
                +
              </CounterButton>
            </CounterContainer>
          </PeopleRow>
          
          <PeopleRow>
            <PeopleLabel>{t('stay.search.child')}</PeopleLabel>
            <CounterContainer>
              <CounterButton 
                onClick={() => handlePeopleCountChange('children', 'decrease')}
                disabled={tempPeopleCount.children <= 0}
              >
                -
              </CounterButton>
              <CounterNumber>{tempPeopleCount.children}</CounterNumber>
              <CounterButton 
                onClick={() => handlePeopleCountChange('children', 'increase')}
              >
                +
              </CounterButton>
            </CounterContainer>
          </PeopleRow>
          
          <PeopleRow>
            <PeopleLabel>{t('stay.search.infant')}</PeopleLabel>
            <CounterContainer>
              <CounterButton 
                onClick={() => handlePeopleCountChange('infants', 'decrease')}
                disabled={tempPeopleCount.infants <= 0}
              >
                -
              </CounterButton>
              <CounterNumber>{tempPeopleCount.infants}</CounterNumber>
              <CounterButton 
                onClick={() => handlePeopleCountChange('infants', 'increase')}
              >
                +
              </CounterButton>
            </CounterContainer>
          </PeopleRow>
          
          <PeopleApplyContainer>
            <PeopleApplyButton onClick={handlePeopleApply}>
              {t('stay.search.apply')}
            </PeopleApplyButton>
          </PeopleApplyContainer>
        </PeopleModal>
      )}
    </SearchBarContainer>
  )
}

export default SearchBarComponent
