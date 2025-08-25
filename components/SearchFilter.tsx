import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// 날짜 관련 유틸리티 함수들
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month - 1, 1).getDay()
}

const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  position: relative;
`

const SearchBar = styled.div`
  display: flex;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 50px;/* padding: 12px 18px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
`

const FilterSection = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 16px 20px;
  border-radius: 20px;
  background-color: ${props => props.isActive ? '#f0f0f0' : 'transparent'};

  &:hover {
    background-color: #f8f8f8;
    border-radius: 100px;
  }
`

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  
  svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.5;
  }
`

const Text = styled.span<{ isActive?: boolean }>`
  font-size: 15px;
  color: #333;
  font-weight: ${props => props.isActive ? '700' : '500'};
`

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;
`

const LocationModal = styled.div`
  position: absolute;
  top: 80%;
  left: 45%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
  /* margin-top: 8px; */
  z-index: 1000;
  min-width: 600px;
`

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
`

const LocationButton = styled.button<{ isSelected?: boolean }>`
  background: ${props => props.isSelected ? '#f0f0f0' : 'white'};
  border: 1px solid #e0e0e0;
  border-radius: 1000px;
  padding: 12px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${props => props.isSelected ? '600' : '400'};

  &:hover {
    background-color: #f8f8f8;
  }
`

const DateModal = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 24px;
  z-index: 1000;
  min-width: 700px;
`

const FilterTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`

const FilterTab = styled.button<{ isActive?: boolean }>`
  background: ${props => props.isActive ? '#333' : '#f0f0f0'};
  color: ${props => props.isActive ? 'white' : '#333'};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
`

const CalendarContainer = styled.div`
  display: flex;
  gap: 32px;
`

const Calendar = styled.div`
  flex: 1;
`

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const MonthTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`

const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  padding: 4px 8px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`

const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
`

const DayLabel = styled.div`
  text-align: center;
  font-size: 12px;
  color: #666;
  padding: 8px 4px;
  font-weight: 500;
`

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`

const CalendarDay = styled.button<{ 
  isSelected?: boolean; 
  isInRange?: boolean;
  isDisabled?: boolean;
  isToday?: boolean;
}>`
  background: ${props => {
    if (props.isSelected) return '#333'
    if (props.isInRange) return '#f0f0f0'
    return 'transparent'
  }};
  color: ${props => {
    if (props.isSelected) return 'white'
    if (props.isDisabled) return '#ccc'
    return '#333'
  }};
  border: ${props => props.isSelected ? '2px solid #333' : '2px solid transparent'};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 14px;
  cursor: ${props => props.isDisabled ? 'default' : 'pointer'};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.isDisabled ? 'transparent' : 'white'};
    border: ${props => props.isDisabled ? '2px solid transparent' : '2px solid #333'};
  }
`

const ApplyButton = styled.button`
  background: #333;
  color: white;
  border: none;
  border-radius: 1000px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  float: right;
  
  &:hover {
    background: #444;
  }
`

const PeopleModal = styled.div`
  position: absolute;
  top: 80%;
  left: 60%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
  z-index: 1000;
  min-width: 250px;
`

const PeopleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`

const PeopleLabel = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
`

const CounterButton = styled.button`
  border: none;
  padding: 8px 12px;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`

const CounterValue = styled.span`
  padding: 8px 16px;
  font-size: 14px;
  color: #333;
  min-width: 40px;
  text-align: center;
  background: white;
`

const SearchFilter: React.FC = () => {
  const router = useRouter()
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [isDateModalOpen, setIsDateModalOpen] = useState(false)
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('전체')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null
  })
  const [peopleCount, setPeopleCount] = useState({
    adults: 2,
    children: 0,
    infants: 0
  })

  const locations = [
    '전체', '서울', '부산', '대구', '인천',
    '대전', '광주', '울산', '경기도', '강원도',
    '충청남도', '충청북도', '전라남도', '전라북도', '경상남도',
    '경상북도', '제주도'
  ]

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']

  const handleLocationClick = () => {
    setIsLocationModalOpen(!isLocationModalOpen)
    setIsDateModalOpen(false)
    setIsPeopleModalOpen(false)
  }

  const handleDateClick = () => {
    setIsDateModalOpen(!isDateModalOpen)
    setIsLocationModalOpen(false)
    setIsPeopleModalOpen(false)
  }

  const handlePeopleClick = () => {
    setIsPeopleModalOpen(!isPeopleModalOpen)
    setIsLocationModalOpen(false)
    setIsDateModalOpen(false)
  }

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location)
    setIsLocationModalOpen(false)
    setIsDateModalOpen(true)
  }

  const handleDateSelect = (date: Date) => {
    if (!selectedDates.start || (selectedDates.start && selectedDates.end !== null)) {
      setSelectedDates({ start: date, end: null })
    } else {
      if (date > selectedDates.start) {
        setSelectedDates({ start: selectedDates.start, end: date })
      } else {
        setSelectedDates({ start: date, end: selectedDates.start })
      }
    }
  }

  const isInRange = (date: Date) => {
    if (!selectedDates.start || selectedDates.end === null) return false
    const start = new Date(selectedDates.start)
    const end = new Date(selectedDates.end)
    const current = new Date(date)
    
    // 시간을 제거하고 날짜만 비교
    start.setHours(0, 0, 0, 0)
    end.setHours(0, 0, 0, 0)
    current.setHours(0, 0, 0, 0)
    
    return current > start && current < end
  }

  const isSelected = (date: Date) => {
    if (!selectedDates.start) return false
    const start = new Date(selectedDates.start)
    const end = selectedDates.end ? new Date(selectedDates.end) : null
    const current = new Date(date)
    
    // 시간을 제거하고 날짜만 비교
    start.setHours(0, 0, 0, 0)
    if (end) end.setHours(0, 0, 0, 0)
    current.setHours(0, 0, 0, 0)
    
    return current.getTime() === start.getTime() || 
           (end && current.getTime() === end.getTime())
  }

  const renderCalendar = (monthOffset: number = 0) => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth() + 1 + monthOffset
    
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)
    
    const days = []
    
    // 이전 달의 마지막 날들
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} />)
    }
    
    // 현재 달의 날들
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day)
      const isInDateRange = isInRange(date)
      const isDateSelected = isSelected(date)
      
      days.push(
        <CalendarDay
          key={day}
          isSelected={!!isDateSelected}
          isInRange={!!isInDateRange}
          onClick={() => handleDateSelect(date)}
        >
          {day}
        </CalendarDay>
      )
    }
    
    return (
      <Calendar>
        <CalendarHeader>
          <NavigationButton onClick={() => setCurrentMonth(new Date(year, month - 2))}>
            &lt;
          </NavigationButton>
          <MonthTitle>{year}년 {month}월</MonthTitle>
          <NavigationButton onClick={() => setCurrentMonth(new Date(year, month))}>
            &gt;
          </NavigationButton>
        </CalendarHeader>
        
        <DaysOfWeek>
          {daysOfWeek.map(day => (
            <DayLabel key={day}>{day}</DayLabel>
          ))}
        </DaysOfWeek>
        
        <CalendarGrid>
          {days}
        </CalendarGrid>
      </Calendar>
    )
  }

  return (
    <Container>
      <SearchBar>
        <FilterSection 
          isActive={isLocationModalOpen}
          onClick={handleLocationClick}
        >
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </Icon>
          <Text isActive={isLocationModalOpen}>지역</Text>
        </FilterSection>
        
        <Divider />
        
        <FilterSection 
          isActive={isDateModalOpen}
          onClick={handleDateClick}
        >
          <Icon>
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </Icon>
          <Text isActive={isDateModalOpen}>날짜</Text>
        </FilterSection>
        
        <Divider />
        
        <FilterSection 
          isActive={isPeopleModalOpen}
          onClick={handlePeopleClick}
        >
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </Icon>
          <Text isActive={isPeopleModalOpen}>인원</Text>
        </FilterSection>
      </SearchBar>

      {isLocationModalOpen && (
        <LocationModal>
          <LocationGrid>
            {locations.map((location) => (
              <LocationButton
                key={location}
                isSelected={selectedLocation === location}
                onClick={() => handleLocationSelect(location)}
              >
                {location}
              </LocationButton>
            ))}
          </LocationGrid>
        </LocationModal>
      )}

      {isDateModalOpen && (
        <DateModal>
          <CalendarContainer>
            {renderCalendar(0)}
            {renderCalendar(1)}
          </CalendarContainer>
          
          <ApplyButton onClick={() => {
            setIsDateModalOpen(false)
            setIsPeopleModalOpen(true)
          }}>
            적용
          </ApplyButton>
        </DateModal>
      )}

      {isPeopleModalOpen && (
        <PeopleModal>
          <PeopleSection>
            <PeopleLabel>성인</PeopleLabel>
            <CounterContainer>
              <CounterButton 
                onClick={() => setPeopleCount(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                disabled={peopleCount.adults <= 1}
              >
                -
              </CounterButton>
              <CounterValue>{peopleCount.adults}</CounterValue>
              <CounterButton 
                onClick={() => setPeopleCount(prev => ({ ...prev, adults: prev.adults + 1 }))}
              >
                +
              </CounterButton>
            </CounterContainer>
          </PeopleSection>
          
          <PeopleSection>
            <PeopleLabel>아동</PeopleLabel>
            <CounterContainer>
              <CounterButton 
                onClick={() => setPeopleCount(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                disabled={peopleCount.children <= 0}
              >
                -
              </CounterButton>
              <CounterValue>{peopleCount.children}</CounterValue>
              <CounterButton 
                onClick={() => setPeopleCount(prev => ({ ...prev, children: prev.children + 1 }))}
              >
                +
              </CounterButton>
            </CounterContainer>
          </PeopleSection>
          
          <PeopleSection>
            <PeopleLabel>영아</PeopleLabel>
            <CounterContainer>
              <CounterButton 
                onClick={() => setPeopleCount(prev => ({ ...prev, infants: Math.max(0, prev.infants - 1) }))}
                disabled={peopleCount.infants <= 0}
              >
                -
              </CounterButton>
              <CounterValue>{peopleCount.infants}</CounterValue>
              <CounterButton 
                onClick={() => setPeopleCount(prev => ({ ...prev, infants: prev.infants + 1 }))}
              >
                +
              </CounterButton>
            </CounterContainer>
          </PeopleSection>
          
          <ApplyButton onClick={() => {
            setIsPeopleModalOpen(false)
            // 모든 선택이 완료되면 /stay 페이지로 이동
            router.push('/stay')
          }}>
            적용
          </ApplyButton>
        </PeopleModal>
      )}
    </Container>
  )
}

export default SearchFilter
