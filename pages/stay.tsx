import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Header from '../components/Header'
import SearchBarComponent from '../components/SearchBar'
import IconGridComponent from '../components/IconGrid'
import FilterSectionComponent from '../components/FilterSection'
import AccommodationGridComponent from '../components/AccommodationGrid'
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





const StayPage = () => {
  const router = useRouter()
  
  // URL 파라미터에서 초기 필터 조건 읽기
  const getInitialFilters = () => {
    const { location, checkin, checkout, adults, children, infants } = router.query
    
    return {
      selectedDates: {
        checkin: checkin ? new Date(checkin as string) : null,
        checkout: checkout ? new Date(checkout as string) : null
      },
      selectedLocation: location ? (location as string) : null,
      peopleCount: {
        adults: adults ? parseInt(adults as string) : 0,
        children: children ? parseInt(children as string) : 0,
        infants: infants ? parseInt(infants as string) : 0
      }
    }
  }
  
  const [selectedDates, setSelectedDates] = useState<{ checkin: Date | null; checkout: Date | null }>({
    checkin: null,
    checkout: null
  })
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedIcon, setSelectedIcon] = useState<number>(0) // 0: 모든 스테이 (기본 선택)
  const [peopleCount, setPeopleCount] = useState({
    adults: 0,
    children: 0,
    infants: 0
  })
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedSort, setSelectedSort] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  // 무한 스크롤 로딩 함수
  const loadMoreAccommodations = () => {
    if (isLoading || !hasMore) return
    
    setIsLoading(true)
    
    // 시뮬레이션된 로딩 시간
    setTimeout(() => {
      setAccommodationData(prev => {
        const newAccommodations = generateMoreAccommodations(prev.length + 1, 6)
        
        // 100개 이상이면 더 이상 로드하지 않음
        if (prev.length + newAccommodations.length >= 100) {
          setHasMore(false)
        }
        
        return [...prev, ...newAccommodations]
      })
      setIsLoading(false)
    }, 1000)
  }



  // 더 많은 숙소 데이터 생성 함수
  const generateMoreAccommodations = (startId: number, count: number) => {
    const names = ['느린미학', '달리야드', '누운 섶', '숲속의 집', '바다뷰 펜션', '산중턱 별장', '도시의 오아시스', '전원생활', '힐링 스테이', '감성숙소']
    const locations = ['경상북도 경주시', '제주도 서귀포시', '제주도 제주시', '경기도 가평군', '강원도 평창군', '충청남도 태안군', '전라남도 여수시', '경상남도 거제시', '강원도 강릉시', '충청북도 단양군']
    const images = [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
    ]
    
    return Array.from({ length: count }, (_, index) => ({
      id: startId + index,
      name: names[Math.floor(Math.random() * names.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      capacity: `기준 ${Math.floor(Math.random() * 4) + 2}인(최대${Math.floor(Math.random() * 4) + 4}인)`,
      price: `${Math.floor(Math.random() * 300) + 200},000원~`,
      image: images[Math.floor(Math.random() * images.length)],
      hasDeal: Math.random() > 0.7,
      dealText: Math.random() > 0.7 ? `DEAL -${Math.floor(Math.random() * 20) + 10}%` : undefined
    }))
  }

  const initialAccommodationData = [
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
      name: '그리드 제주',
      location: '경기도 가평군',
      capacity: '기준 2인(최대4인)',
      price: '280,000원~',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -15%'
    },
    {
      id: 5,
      name: '서와정',
      location: '강원도 평창군',
      capacity: '기준 4인(최대6인)',
      price: '420,000원~',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -10%'
    },
    {
      id: 6,
      name: '조각밤',
      location: '충청남도 태안군',
      capacity: '기준 2인(최대4인)',
      price: '310,000원~',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 7,
      name: '숲속의 집',
      location: '전라남도 여수시',
      capacity: '기준 3인(최대5인)',
      price: '380,000원~',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -20%'
    },
    {
      id: 8,
      name: '바다뷰 펜션',
      location: '경상남도 거제시',
      capacity: '기준 4인(최대6인)',
      price: '450,000원~',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 9,
      name: '산중턱 별장',
      location: '강원도 강릉시',
      capacity: '기준 2인(최대4인)',
      price: '520,000원~',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -12%'
    },
    {
      id: 10,
      name: '도시의 오아시스',
      location: '충청북도 단양군',
      capacity: '기준 3인(최대5인)',
      price: '290,000원~',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 11,
      name: '전원생활',
      location: '전라북도 전주시',
      capacity: '기준 4인(최대6인)',
      price: '360,000원~',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -18%'
    },
    {
      id: 12,
      name: '힐링 스테이',
      location: '경상북도 안동시',
      capacity: '기준 2인(최대4인)',
      price: '340,000원~',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 13,
      name: '감성숙소',
      location: '제주도 서귀포시',
      capacity: '기준 3인(최대5인)',
      price: '410,000원~',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -25%'
    },
    {
      id: 14,
      name: '평화로운 휴식',
      location: '강원도 춘천시',
      capacity: '기준 2인(최대4인)',
      price: '320,000원~',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 15,
      name: '자연 속 숙소',
      location: '충청남도 공주시',
      capacity: '기준 4인(최대6인)',
      price: '480,000원~',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -15%'
    },
    {
      id: 16,
      name: '힐링 펜션',
      location: '전라남도 순천시',
      capacity: '기준 3인(최대5인)',
      price: '370,000원~',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 17,
      name: '산악 휴양지',
      location: '경상남도 통영시',
      capacity: '기준 2인(최대4인)',
      price: '390,000원~',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -22%'
    },
    {
      id: 18,
      name: '바다 근처 숙소',
      location: '강원도 속초시',
      capacity: '기준 4인(최대6인)',
      price: '550,000원~',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 19,
      name: '보스케',
      location: '제주도 제주시',
      capacity: '기준 3인(최대5인)',
      price: '480,000원~',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -18%'
    },
    {
      id: 20,
      name: '마당과 정원',
      location: '경기도 포천시',
      capacity: '기준 2인(최대4인)',
      price: '320,000원~',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      hasDeal: false
    },
    {
      id: 21,
      name: '객실 내부',
      location: '충청북도 제천시',
      capacity: '기준 4인(최대6인)',
      price: '410,000원~',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      hasDeal: true,
      dealText: 'DEAL -25%'
    }
  ]

  const [accommodationData, setAccommodationData] = useState(initialAccommodationData)
  const [filteredData, setFilteredData] = useState(initialAccommodationData)

  // 검색 필터링 함수
  const filterAccommodations = () => {
    let filtered = [...accommodationData]

    // 1. 지역 필터링
    if (selectedLocation && selectedLocation !== '전체') {
      filtered = filtered.filter(accommodation => 
        accommodation.location.includes(selectedLocation)
      )
    }

    // 2. 인원 필터링
    const totalPeople = peopleCount.adults + peopleCount.children + peopleCount.infants
    if (totalPeople > 0) {
      filtered = filtered.filter(accommodation => {
        // capacity에서 최대 인원 수 추출 (예: "기준 2인(최대4인)" -> 4)
        const maxCapacityMatch = accommodation.capacity.match(/최대(\d+)인/)
        if (maxCapacityMatch) {
          const maxCapacity = parseInt(maxCapacityMatch[1])
          return maxCapacity >= totalPeople
        }
        return true
      })
    }

    // 3. 날짜 필터링 (예약 가능 여부 시뮬레이션)
    if (selectedDates.checkin && selectedDates.checkout) {
      // 실제로는 예약 데이터베이스와 연동해야 하지만, 여기서는 랜덤하게 필터링
      filtered = filtered.filter(() => Math.random() > 0.3) // 70% 확률로 예약 가능
    }

    // 4. 아이콘 필터링 (편의시설)
    if (selectedIcon > 0) {
      const iconFilters = {
        1: 'ending_soon', // 마감 임박 할인
        2: 'private_stay', // 단독 숙소
        3: 'camping', // 캠핑&글램핑
        4: 'pet_friendly', // 반려동물
        5: 'pool', // 수영장
        6: 'jacuzzi', // 자쿠지
        7: 'hanok', // 한옥
        8: 'ocean_view', // 오션뷰
        9: 'forest_view', // 숲뷰
        10: 'city_view', // 시티뷰
        11: 'harbor_view', // 하버뷰
        12: 'sauna' // 사우나
      }
      
      const filterType = iconFilters[selectedIcon as keyof typeof iconFilters]
      
      if (filterType === 'ending_soon') {
        filtered = filtered.filter(accommodation => accommodation.hasDeal)
      }
      // 다른 필터들은 실제 데이터에 해당 속성이 있어야 함
    }

    // 5. 편의시설 필터링
    if (selectedAmenities.length > 0) {
      // 실제로는 각 숙소의 편의시설 데이터와 비교해야 함
      filtered = filtered.filter(() => Math.random() > 0.2) // 80% 확률로 해당 편의시설 보유
    }

    // 6. 정렬
    if (selectedSort) {
      switch (selectedSort) {
        case '최신순':
          filtered.sort((a, b) => b.id - a.id)
          break
        case '인기순':
          filtered.sort(() => Math.random() - 0.5) // 랜덤 정렬
          break
        case '높은 가격순':
          filtered.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, ''))
            const priceB = parseInt(b.price.replace(/[^0-9]/g, ''))
            return priceB - priceA
          })
          break
        case '낮은 가격순':
          filtered.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, ''))
            const priceB = parseInt(b.price.replace(/[^0-9]/g, ''))
            return priceA - priceB
          })
          break
        default: // 추천순
          // 기본 정렬 (변경 없음)
          break
      }
    }

    setFilteredData(filtered)
  }

  // URL 파라미터가 변경될 때 초기 필터 조건 설정
  useEffect(() => {
    if (router.isReady) {
      const initialFilters = getInitialFilters()
      setSelectedDates(initialFilters.selectedDates)
      setSelectedLocation(initialFilters.selectedLocation)
      setPeopleCount(initialFilters.peopleCount)
    }
  }, [router.isReady, router.query])

  // 필터 조건이 변경될 때마다 필터링 실행
  useEffect(() => {
    filterAccommodations()
  }, [selectedLocation, selectedDates, peopleCount, selectedIcon, selectedAmenities, selectedSort, accommodationData])

  return (
    <Container>
      <Header isScrolled={true} />
      <MainContent>
        <ContentWrapper>
          <MainTitle>CHECK IN TRAVEL</MainTitle>
          
          <SearchBarComponent
            selectedLocation={selectedLocation}
            selectedDates={selectedDates}
            peopleCount={peopleCount}
            onLocationSelect={setSelectedLocation}
            onDateSelect={setSelectedDates}
            onPeopleSelect={setPeopleCount}
          />

          <IconGridComponent
            selectedIcon={selectedIcon}
            onIconClick={setSelectedIcon}
          />

          <FilterSectionComponent
            selectedAmenities={selectedAmenities}
            selectedSort={selectedSort}
            onAmenitiesChange={setSelectedAmenities}
            onSortChange={setSelectedSort}
          />
          
          {/* 검색 결과 개수 표시 */}
          {filteredData.length > 0 && (
            <div style={{ 
              padding: '20px 0', 
              fontSize: '16px', 
              color: '#666',
              borderBottom: '1px solid #eee',
              marginBottom: '20px'
            }}>
              검색 결과: <strong>{filteredData.length}</strong>개의 숙소
            </div>
          )}

          <AccommodationGridComponent
            accommodationData={filteredData}
            onLoadMore={loadMoreAccommodations}
            hasMore={hasMore}
            isLoading={isLoading}
          />
        </ContentWrapper>
      </MainContent>
      
      <Footer />
    </Container>
  )
}

export default StayPage
