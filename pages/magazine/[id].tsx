import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// 매거진 데이터
const magazineData = [
  {
    id: 1,
    number: '46',
    title: '바쁜 일상에서 벗어나 즐기는 찰나의 휴식',
    subtitle: '평온, 서와정',
    description: '한 걸음 쉬어가며 마주하는 평온, 서와정',
    hashtags: ['#강릉', '#한옥숙소', '#자쿠지'],
    date: '2024.08.30',
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
    accommodationName: '서와정',
    accommodationDescription: '서와정은 강릉의 아름다운 해변가에 위치한 전통 한옥 스테이입니다. \'천천히 쉬어가는 공간\'이라는 의미를 담고 있는 서와정은 바쁜 일상에서 벗어나 평온한 시간을 보낼 수 있는 특별한 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 보래미하길43번길 20',
    accommodationAddressEnglish: '20, Boraemiha-gil 43beon-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 서와정',
    bannerDescription: '서와정은 \'천천히 쉬어가는 공간\'이라는 의미를 담고 있다. 평온 가득한 이곳 서와정에서 아무런 생각 없이 쉬어갈 수 있는 \'여백의 시간\'을 경험해 보자.',
    stayName: '서와정',
    stayType: '스테이',
    capacity: '2인 / 최대 3인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 보래미하길43번길 20 (포남동)',
    amenities: '자쿠지, 족욕, 한옥, 정원',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
        alt: '마당과 정원',
        description: '서와정의 마당은 전통 한옥의 정취를 가장 잘 느낄 수 있는 공간입니다. 아침에는 새벽 공기를 마시며 차 한 잔을, 저녁에는 따뜻한 조명 아래에서 책을 읽거나 대화를 나누며 여유로운 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '객실 내부',
        description: '서와정의 객실은 전통 한옥의 아름다움을 현대적인 편의시설과 조화롭게 결합한 공간입니다. 온돌과 마루가 설치되어 있어 한국의 전통적인 생활 방식을 경험할 수 있으면서도, 현대적인 화장실과 샤워 시설을 갖추고 있어 편안한 숙박이 가능합니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        alt: '자쿠지 특별실',
        description: '서와정의 자쿠지 특별실은 가장 인기가 높은 프리미엄 객실입니다. 전통 한옥의 아름다움을 유지하면서도 현대적인 자쿠지 시설을 갖춘 이 특별실은 피로를 풀기에 최적의 공간으로 손님들에게 큰 만족을 드리고 있습니다.'
      }
    ]
  },
  {
    id: 2,
    number: '45',
    title: '바다와 함께하는 특별한 휴식, 해변가의 평온',
    subtitle: '평온, 해변가',
    description: '바다의 파도 소리를 들으며 마주하는 평온한 시간',
    hashtags: ['#강릉', '#해변숙소', '#오션뷰'],
    date: '2024.08.25',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    accommodationName: '해변가',
    accommodationDescription: '해변가는 강릉의 아름다운 해변 바로 앞에 위치한 현대적인 스테이입니다. 바다의 파도 소리를 들으며 평온한 시간을 보낼 수 있는 특별한 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 해변로 123',
    accommodationAddressEnglish: '123, Haebyeon-ro, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 해변가',
    bannerDescription: '해변가는 \'바다와 함께하는 평온한 시간\'이라는 의미를 담고 있다. 파도 소리를 들으며 아무런 생각 없이 쉬어갈 수 있는 \'바다의 시간\'을 경험해 보자.',
    stayName: '해변가',
    stayType: '스테이',
    capacity: '4인 / 최대 6인',
    rooms: '2개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 해변로 123 (해변동)',
    amenities: '오션뷰, 테라스, BBQ, 주차',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
        alt: '테라스와 오션뷰',
        description: '해변가의 테라스는 바다를 바로 바라볼 수 있는 최고의 공간입니다. 아침에는 상쾌한 바다 공기를 마시며 커피를, 저녁에는 아름다운 일몰을 감상하며 여유로운 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '객실 내부',
        description: '해변가의 객실은 현대적이고 세련된 디자인으로 구성되어 있습니다. 큰 창문을 통해 바다의 아름다운 풍경을 바라볼 수 있으며, 편안한 침구와 현대적인 편의시설을 갖추고 있어 편안한 숙박이 가능합니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        alt: 'BBQ 시설',
        description: '해변가의 BBQ 시설은 가족이나 친구들과 함께 즐길 수 있는 특별한 공간입니다. 신선한 해산물과 함께하는 BBQ 파티는 해변가만의 특별한 경험을 제공합니다.'
      }
    ]
  },
  {
    id: 3,
    number: '44',
    title: '숲속에서 만나는 평온, 자연과 함께하는 휴식',
    subtitle: '평온, 숲속',
    description: '숲의 신선한 공기를 마시며 마주하는 평온한 시간',
    hashtags: ['#강릉', '#숲속숙소', '#자연'],
    date: '2024.08.20',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
    accommodationName: '숲속',
    accommodationDescription: '숲속은 강릉의 아름다운 숲 한가운데 위치한 자연 친화적인 스테이입니다. 신선한 공기와 자연의 소리를 들으며 평온한 시간을 보낼 수 있는 특별한 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 숲길 456',
    accommodationAddressEnglish: '456, Sup-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 숲속',
    bannerDescription: '숲속은 \'자연과 함께하는 평온한 시간\'이라는 의미를 담고 있다. 신선한 공기를 마시며 아무런 생각 없이 쉬어갈 수 있는 \'자연의 시간\'을 경험해 보자.',
    stayName: '숲속',
    stayType: '스테이',
    capacity: '3인 / 최대 4인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 숲길 456 (숲동)',
    amenities: '숲뷰, 데크, 캠핑, 등산로',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
        alt: '숲속 데크',
        description: '숲속의 데크는 자연과 가장 가까이에서 휴식을 취할 수 있는 공간입니다. 아침에는 새벽 공기를 마시며 요가를, 저녁에는 별을 보며 차 한 잔을 마시며 여유로운 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
        alt: '객실 내부',
        description: '숲속의 객실은 자연 친화적인 디자인으로 구성되어 있습니다. 큰 창문을 통해 숲의 아름다운 풍경을 바라볼 수 있으며, 목재 소재를 활용한 인테리어로 따뜻하고 편안한 분위기를 연출합니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '캠핑 시설',
        description: '숲속의 캠핑 시설은 자연 속에서 특별한 경험을 할 수 있는 공간입니다. 등산로와 연결되어 있어 등산 후 편안한 휴식을 취할 수 있으며, 자연과 함께하는 특별한 시간을 보낼 수 있습니다.'
      }
    ]
  },
  {
    id: 4,
    number: '43',
    title: '나를 위한 시간, 비우담',
    subtitle: '평온, 비우담',
    description: '나만을 위한 특별한 시간을 보내는 공간',
    hashtags: ['#강릉', '#힐링숙소', '#개인시간'],
    date: '2024.08.15',
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    accommodationName: '비우담',
    accommodationDescription: '비우담은 개인적인 시간을 보내기에 최적화된 프라이빗 스테이입니다. 바쁜 일상에서 벗어나 나만을 위한 특별한 시간을 보낼 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 비우담길 789',
    accommodationAddressEnglish: '789, Biudam-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 비우담',
    bannerDescription: '비우담은 \'나만을 위한 특별한 시간\'이라는 의미를 담고 있다. 바쁜 일상에서 벗어나 나만의 공간에서 아무런 생각 없이 쉬어갈 수 있는 \'개인적인 시간\'을 경험해 보자.',
    stayName: '비우담',
    stayType: '스테이',
    capacity: '1인 / 최대 2인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 비우담길 789 (비우동)',
    amenities: '프라이빗 공간, 독서실, 명상실, 정원',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        alt: '프라이빗 공간',
        description: '비우담의 프라이빗 공간은 개인적인 시간을 보내기에 최적화되어 있습니다. 조용하고 평화로운 분위기에서 책을 읽거나 명상을 하며 내면의 평화를 찾을 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
        alt: '독서실',
        description: '비우담의 독서실은 편안한 소파와 조명이 설치되어 있어 책을 읽기에 최적의 공간입니다. 창밖으로는 아름다운 정원의 풍경을 바라볼 수 있어 더욱 평온한 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
        alt: '명상실',
        description: '비우담의 명상실은 마음의 평화를 찾기에 최적화된 공간입니다. 자연 채광과 조용한 분위기에서 명상이나 요가를 하며 내면의 평화를 찾을 수 있습니다.'
      }
    ]
  },
  {
    id: 5,
    number: '42',
    title: '자연 속에서 찾는 내면의 평화',
    subtitle: '평온, 자연',
    description: '자연과 함께하며 내면의 평화를 찾는 시간',
    hashtags: ['#강릉', '#자연숙소', '#평화'],
    date: '2024.08.10',
    heroImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
    accommodationName: '자연',
    accommodationDescription: '자연은 강릉의 아름다운 자연 속에 위치한 힐링 스테이입니다. 자연과 함께하며 내면의 평화를 찾을 수 있는 특별한 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 자연길 101',
    accommodationAddressEnglish: '101, Jayeon-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 자연',
    bannerDescription: '자연은 \'자연과 함께하는 평화로운 시간\'이라는 의미를 담고 있다. 자연의 소리를 들으며 아무런 생각 없이 쉬어갈 수 있는 \'자연의 시간\'을 경험해 보자.',
    stayName: '자연',
    stayType: '스테이',
    capacity: '2인 / 최대 3인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 자연길 101 (자연동)',
    amenities: '자연뷰, 산책로, 피크닉, 야외 테라스',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
        alt: '자연뷰',
        description: '자연의 자연뷰는 아름다운 산과 계곡을 바라볼 수 있는 최고의 공간입니다. 아침에는 상쾌한 자연 공기를 마시며 요가를, 저녁에는 아름다운 일몰을 감상하며 여유로운 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
        alt: '산책로',
        description: '자연의 산책로는 아름다운 자연 속을 걸을 수 있는 특별한 공간입니다. 계절마다 다른 모습을 보여주는 자연의 아름다움을 감상하며 평온한 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
        alt: '야외 테라스',
        description: '자연의 야외 테라스는 자연과 가장 가까이에서 휴식을 취할 수 있는 공간입니다. 신선한 공기를 마시며 차 한 잔을 마시거나, 자연의 소리를 들으며 명상을 할 수 있습니다.'
      }
    ]
  },
  {
    id: 6,
    number: '41',
    title: '도시를 벗어나 만나는 새로운 경험',
    subtitle: '새로운, 경험',
    description: '도시의 일상을 벗어나 새로운 경험을 만나는 시간',
    hashtags: ['#강릉', '#새로운경험', '#도시탈출'],
    date: '2024.08.05',
    heroImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
    accommodationName: '새로운',
    accommodationDescription: '새로운은 도시의 일상을 벗어나 새로운 경험을 할 수 있는 특별한 스테이입니다. 평소와는 다른 환경에서 특별한 추억을 만들 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 새로운길 202',
    accommodationAddressEnglish: '202, Saeroun-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 새로운',
    bannerDescription: '새로운은 \'도시를 벗어나 만나는 새로운 경험\'이라는 의미를 담고 있다. 일상의 틀을 벗어나 새로운 환경에서 특별한 추억을 만들 수 있는 \'새로운 경험\'을 경험해 보자.',
    stayName: '새로운',
    stayType: '스테이',
    capacity: '3인 / 최대 4인',
    rooms: '2개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 새로운길 202 (새로운동)',
    amenities: '새로운 시설, 체험 공간, 워크샵, 갤러리',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
        alt: '체험 공간',
        description: '새로운의 체험 공간은 평소와는 다른 특별한 경험을 할 수 있는 공간입니다. 다양한 워크샵과 체험 프로그램을 통해 새로운 기술이나 취미를 배울 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
        alt: '갤러리',
        description: '새로운의 갤러리는 현대적인 예술 작품들을 감상할 수 있는 공간입니다. 지역 예술가들의 작품과 함께 특별한 문화 경험을 할 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '워크샵',
        description: '새로운의 워크샵은 창작 활동을 할 수 있는 공간입니다. 다양한 재료와 도구를 사용하여 나만의 작품을 만들 수 있는 특별한 경험을 제공합니다.'
      }
    ]
  },
  {
    id: 7,
    number: '40',
    title: '시간을 잊고 즐기는 완벽한 휴식',
    subtitle: '완벽한, 휴식',
    description: '시간의 흐름을 잊고 완벽한 휴식을 즐기는 공간',
    hashtags: ['#강릉', '#완벽한휴식', '#시간여행'],
    date: '2024.08.01',
    heroImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
    accommodationName: '완벽한',
    accommodationDescription: '완벽한은 시간의 흐름을 잊고 완벽한 휴식을 즐길 수 있는 프리미엄 스테이입니다. 모든 것이 완벽하게 갖춰진 공간에서 특별한 시간을 보낼 수 있습니다.',
    accommodationAddress: '강원특별자치도 강릉시 완벽한길 303',
    accommodationAddressEnglish: '303, Wanbyeokan-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 완벽한',
    bannerDescription: '완벽한은 \'시간을 잊고 즐기는 완벽한 휴식\'이라는 의미를 담고 있다. 모든 것이 완벽하게 갖춰진 공간에서 시간의 흐름을 잊고 완벽한 휴식을 즐길 수 있는 \'완벽한 시간\'을 경험해 보자.',
    stayName: '완벽한',
    stayType: '스테이',
    capacity: '2인 / 최대 3인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 완벽한길 303 (완벽한동)',
    amenities: '프리미엄 시설, 스파, 사우나, 프라이빗 풀',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
        alt: '프리미엄 시설',
        description: '완벽한의 프리미엄 시설은 최고급 편의시설을 갖춘 공간입니다. 모든 것이 완벽하게 갖춰진 환경에서 특별한 휴식을 즐길 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
        alt: '스파',
        description: '완벽한의 스파는 몸과 마음을 완전히 이완시킬 수 있는 공간입니다. 전문적인 마사지와 다양한 트리트먼트를 통해 완벽한 휴식을 경험할 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
        alt: '프라이빗 풀',
        description: '완벽한의 프라이빗 풀은 완전히 프라이빗한 공간에서 수영을 즐길 수 있는 특별한 시설입니다. 아무도 방해하지 않는 완벽한 휴식을 경험할 수 있습니다.'
      }
    ]
  },
  {
    id: 8,
    number: '39',
    title: '소소한 일상의 아름다움을 발견하는 순간',
    subtitle: '일상, 아름다움',
    description: '일상 속에서 발견하는 작은 아름다움과 행복',
    hashtags: ['#강릉', '#일상', '#아름다움'],
    date: '2024.07.28',
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
    accommodationName: '일상',
    accommodationDescription: '일상은 평범한 일상 속에서 아름다움을 발견할 수 있는 특별한 스테이입니다. 소소한 것들에서 행복을 찾을 수 있는 따뜻한 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 일상길 404',
    accommodationAddressEnglish: '404, Ilsang-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 일상',
    bannerDescription: '일상은 \'소소한 일상의 아름다움을 발견하는 순간\'이라는 의미를 담고 있다. 평범한 일상 속에서 아름다움을 발견하고 행복을 찾을 수 있는 \'일상의 시간\'을 경험해 보자.',
    stayName: '일상',
    stayType: '스테이',
    capacity: '2인 / 최대 3인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 일상길 404 (일상동)',
    amenities: '일상 공간, 정원, 독서실, 차실',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
        alt: '일상 공간',
        description: '일상의 일상 공간은 평범하지만 아름다운 일상을 보낼 수 있는 공간입니다. 따뜻한 조명과 편안한 소파가 있는 이 공간에서 책을 읽거나 차 한 잔을 마시며 여유로운 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
        alt: '정원',
        description: '일상의 정원은 작지만 아름다운 꽃들과 나무들이 있는 공간입니다. 계절마다 다른 모습을 보여주는 정원에서 자연의 아름다움을 감상하며 평온한 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '차실',
        description: '일상의 차실은 전통적인 차 문화를 경험할 수 있는 공간입니다. 아름다운 차기와 함께 차 한 잔을 마시며 마음의 평화를 찾을 수 있는 특별한 공간입니다.'
      }
    ]
  },
  {
    id: 9,
    number: '38',
    title: '바람과 함께하는 자유로운 여행',
    subtitle: '자유, 여행',
    description: '바람처럼 자유롭게 떠나는 여행의 즐거움',
    hashtags: ['#강릉', '#자유여행', '#바람'],
    date: '2024.07.25',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    accommodationName: '바람',
    accommodationDescription: '바람은 자유로운 여행을 즐길 수 있는 특별한 스테이입니다. 바람처럼 자유롭게 떠나고 싶은 마음을 담을 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 바람길 505',
    accommodationAddressEnglish: '505, Baram-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 바람',
    bannerDescription: '바람은 \'바람과 함께하는 자유로운 여행\'이라는 의미를 담고 있다. 바람처럼 자유롭게 떠나고 싶은 마음을 담을 수 있는 \'자유의 시간\'을 경험해 보자.',
    stayName: '바람',
    stayType: '스테이',
    capacity: '1인 / 최대 2인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 바람길 505 (바람동)',
    amenities: '자유 공간, 테라스, 자전거, 등산로',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        alt: '자유 공간',
        description: '바람의 자유 공간은 자유롭게 휴식을 취할 수 있는 공간입니다. 넓은 창문을 통해 바람을 느낄 수 있으며, 자유로운 분위기에서 마음껏 쉬어갈 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
        alt: '테라스',
        description: '바람의 테라스는 바람을 직접 느낄 수 있는 공간입니다. 아름다운 풍경을 바라보며 바람과 함께하는 자유로운 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
        alt: '등산로',
        description: '바람의 등산로는 자유롭게 산책할 수 있는 공간입니다. 바람과 함께하는 등산을 통해 자유로운 여행의 즐거움을 경험할 수 있습니다.'
      }
    ]
  },
  {
    id: 10,
    number: '37',
    title: '별빛 아래에서의 로맨틱한 밤',
    subtitle: '로맨틱, 별빛',
    description: '별빛 아래에서 만나는 로맨틱한 순간들',
    hashtags: ['#강릉', '#로맨틱', '#별빛'],
    date: '2024.07.20',
    heroImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
    accommodationName: '별빛',
    accommodationDescription: '별빛은 로맨틱한 밤을 보낼 수 있는 특별한 스테이입니다. 별빛 아래에서 특별한 순간을 만들 수 있는 아름다운 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 별빛길 606',
    accommodationAddressEnglish: '606, Byeolbit-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 별빛',
    bannerDescription: '별빛은 \'별빛 아래에서의 로맨틱한 밤\'이라는 의미를 담고 있다. 아름다운 별빛 아래에서 로맨틱한 순간을 만들 수 있는 \'별빛의 시간\'을 경험해 보자.',
    stayName: '별빛',
    stayType: '스테이',
    capacity: '2인 / 최대 2인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 별빛길 606 (별빛동)',
    amenities: '로맨틱 공간, 별관측실, 캔들라이트, 와인셀러',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
        alt: '로맨틱 공간',
        description: '별빛의 로맨틱 공간은 특별한 순간을 만들 수 있는 공간입니다. 아름다운 조명과 편안한 분위기에서 로맨틱한 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
        alt: '별관측실',
        description: '별빛의 별관측실은 아름다운 별들을 관측할 수 있는 공간입니다. 맑은 밤하늘의 별들을 바라보며 로맨틱한 순간을 만들 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
        alt: '캔들라이트',
        description: '별빛의 캔들라이트는 아름다운 분위기를 연출하는 특별한 조명입니다. 따뜻한 캔들라이트 아래에서 로맨틱한 저녁 시간을 보낼 수 있습니다.'
      }
    ]
  },
  {
    id: 11,
    number: '36',
    title: '산과 바다가 만나는 곳에서의 힐링',
    subtitle: '힐링, 산바다',
    description: '산과 바다가 만나는 곳에서의 특별한 힐링',
    hashtags: ['#강릉', '#산바다', '#힐링'],
    date: '2024.07.15',
    heroImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
    accommodationName: '산바다',
    accommodationDescription: '산바다는 산과 바다가 만나는 곳에 위치한 특별한 스테이입니다. 산의 평온함과 바다의 자유로움을 동시에 경험할 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 산바다길 707',
    accommodationAddressEnglish: '707, Sanbada-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 산바다',
    bannerDescription: '산바다는 \'산과 바다가 만나는 곳에서의 힐링\'이라는 의미를 담고 있다. 산의 평온함과 바다의 자유로움을 동시에 경험할 수 있는 \'산바다의 시간\'을 경험해 보자.',
    stayName: '산바다',
    stayType: '스테이',
    capacity: '3인 / 최대 4인',
    rooms: '2개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 산바다길 707 (산바다동)',
    amenities: '산뷰, 바다뷰, 등산로, 해변',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
        alt: '산뷰',
        description: '산바다의 산뷰는 아름다운 산의 풍경을 바라볼 수 있는 공간입니다. 아침에는 상쾌한 산 공기를 마시며 요가를, 저녁에는 아름다운 일몰을 감상하며 여유로운 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
        alt: '바다뷰',
        description: '산바다의 바다뷰는 아름다운 바다의 풍경을 바라볼 수 있는 공간입니다. 파도 소리를 들으며 평온한 시간을 보낼 수 있는 특별한 공간입니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
        alt: '등산로',
        description: '산바다의 등산로는 아름다운 산을 등산할 수 있는 공간입니다. 자연과 함께하는 등산을 통해 힐링의 시간을 경험할 수 있습니다.'
      }
    ]
  },
  {
    id: 12,
    number: '35',
    title: '전통과 현대가 조화를 이루는 공간',
    subtitle: '전통, 현대',
    description: '전통의 아름다움과 현대의 편의가 조화를 이루는 공간',
    hashtags: ['#강릉', '#전통', '#현대'],
    date: '2024.07.10',
    heroImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
    accommodationName: '전통현대',
    accommodationDescription: '전통현대는 전통의 아름다움과 현대의 편의가 조화를 이루는 특별한 스테이입니다. 한국의 전통 문화를 현대적으로 재해석한 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 전통현대길 808',
    accommodationAddressEnglish: '808, Jeontonghyeondae-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 전통현대',
    bannerDescription: '전통현대는 \'전통과 현대가 조화를 이루는 공간\'이라는 의미를 담고 있다. 전통의 아름다움과 현대의 편의가 조화를 이루는 \'전통현대의 시간\'을 경험해 보자.',
    stayName: '전통현대',
    stayType: '스테이',
    capacity: '4인 / 최대 6인',
    rooms: '2개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 전통현대길 808 (전통현대동)',
    amenities: '전통 공간, 현대 시설, 한옥, 스파',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
        alt: '전통 공간',
        description: '전통현대의 전통 공간은 한국의 전통 문화를 경험할 수 있는 공간입니다. 한옥의 아름다움과 전통적인 생활 방식을 체험할 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '현대 시설',
        description: '전통현대의 현대 시설은 현대적인 편의시설을 갖춘 공간입니다. 전통의 아름다움을 유지하면서도 현대적인 편의를 누릴 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        alt: '스파',
        description: '전통현대의 스파는 전통적인 힐링 방법과 현대적인 스파 시설이 결합된 공간입니다. 몸과 마음을 완전히 이완시킬 수 있는 특별한 공간입니다.'
      }
    ]
  },
  {
    id: 13,
    number: '34',
    title: '계절의 변화를 느끼는 특별한 공간',
    subtitle: '계절, 변화',
    description: '계절마다 다른 모습을 보여주는 특별한 공간',
    hashtags: ['#강릉', '#계절', '#변화'],
    date: '2024.07.05',
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop',
    accommodationName: '계절',
    accommodationDescription: '계절은 계절마다 다른 모습을 보여주는 특별한 스테이입니다. 봄의 꽃, 여름의 푸른 잎, 가을의 단풍, 겨울의 설경을 모두 경험할 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 계절길 909',
    accommodationAddressEnglish: '909, Gyejeol-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 계절',
    bannerDescription: '계절은 \'계절의 변화를 느끼는 특별한 공간\'이라는 의미를 담고 있다. 계절마다 다른 모습을 보여주는 자연의 아름다움을 경험할 수 있는 \'계절의 시간\'을 경험해 보자.',
    stayName: '계절',
    stayType: '스테이',
    capacity: '2인 / 최대 3인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 계절길 909 (계절동)',
    amenities: '계절 정원, 온실, 테라스, 계절 식당',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
        alt: '계절 정원',
        description: '계절의 계절 정원은 계절마다 다른 모습을 보여주는 아름다운 정원입니다. 봄의 벚꽃, 여름의 장미, 가을의 단풍, 겨울의 설경을 모두 감상할 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '온실',
        description: '계절의 온실은 계절에 관계없이 아름다운 식물들을 감상할 수 있는 공간입니다. 다양한 식물들과 함께하는 특별한 시간을 보낼 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        alt: '계절 식당',
        description: '계절의 계절 식당은 계절에 맞는 신선한 재료로 만든 요리를 즐길 수 있는 공간입니다. 계절의 맛을 느낄 수 있는 특별한 식사 경험을 제공합니다.'
      }
    ]
  },
  {
    id: 14,
    number: '33',
    title: '마음의 여유를 찾는 힐링 타임',
    subtitle: '여유, 힐링',
    description: '바쁜 일상에서 마음의 여유를 찾는 힐링 시간',
    hashtags: ['#강릉', '#여유', '#힐링'],
    date: '2024.07.01',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
    accommodationName: '여유',
    accommodationDescription: '여유는 바쁜 일상에서 마음의 여유를 찾을 수 있는 특별한 스테이입니다. 시간에 쫓기지 않고 천천히 쉬어갈 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 여유길 1010',
    accommodationAddressEnglish: '1010, Yeoyu-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 여유',
    bannerDescription: '여유는 \'마음의 여유를 찾는 힐링 타임\'이라는 의미를 담고 있다. 바쁜 일상에서 벗어나 마음의 여유를 찾을 수 있는 \'여유의 시간\'을 경험해 보자.',
    stayName: '여유',
    stayType: '스테이',
    capacity: '1인 / 최대 2인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 여유길 1010 (여유동)',
    amenities: '여유 공간, 명상실, 차실, 독서실',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
        alt: '여유 공간',
        description: '여유의 여유 공간은 마음의 여유를 찾을 수 있는 공간입니다. 천천히 시간을 보내며 마음의 평화를 찾을 수 있는 특별한 공간입니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '명상실',
        description: '여유의 명상실은 마음의 평화를 찾을 수 있는 공간입니다. 조용한 분위기에서 명상이나 요가를 하며 내면의 평화를 찾을 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
        alt: '차실',
        description: '여유의 차실은 천천히 차 한 잔을 마시며 여유로운 시간을 보낼 수 있는 공간입니다. 전통적인 차 문화를 경험할 수 있는 특별한 공간입니다.'
      }
    ]
  },
  {
    id: 15,
    number: '32',
    title: '자연과 함께하는 생태 여행',
    subtitle: '자연, 생태',
    description: '자연과 함께하며 생태 여행을 즐기는 특별한 경험',
    hashtags: ['#강릉', '#자연', '#생태'],
    date: '2024.06.28',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    accommodationName: '생태',
    accommodationDescription: '생태는 자연과 함께하며 생태 여행을 즐길 수 있는 특별한 스테이입니다. 환경 친화적인 시설과 자연과의 조화를 경험할 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 생태길 1111',
    accommodationAddressEnglish: '1111, Saengtae-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 생태',
    bannerDescription: '생태는 \'자연과 함께하는 생태 여행\'이라는 의미를 담고 있다. 환경 친화적인 시설과 자연과의 조화를 경험할 수 있는 \'생태의 시간\'을 경험해 보자.',
    stayName: '생태',
    stayType: '스테이',
    capacity: '2인 / 최대 3인',
    rooms: '1개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 생태길 1111 (생태동)',
    amenities: '생태 공간, 자연 관찰, 친환경 시설, 생태 교육',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
        alt: '생태 공간',
        description: '생태의 생태 공간은 자연과 함께하는 생태 여행을 즐길 수 있는 공간입니다. 환경 친화적인 시설과 자연과의 조화를 경험할 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
        alt: '자연 관찰',
        description: '생태의 자연 관찰은 다양한 동식물을 관찰할 수 있는 공간입니다. 자연의 아름다움과 생태계의 신비를 경험할 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
        alt: '생태 교육',
        description: '생태의 생태 교육은 자연과 환경에 대한 교육을 받을 수 있는 공간입니다. 생태계의 중요성과 환경 보호의 필요성을 배울 수 있습니다.'
      }
    ]
  },
  {
    id: 16,
    number: '31',
    title: '도시를 벗어나 만나는 새로운 경험',
    subtitle: '새로운, 경험',
    description: '도시의 일상을 벗어나 새로운 경험을 만나는 시간',
    hashtags: ['#강릉', '#새로운경험', '#도시탈출'],
    date: '2024.06.25',
    heroImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
    accommodationName: '새로운경험',
    accommodationDescription: '새로운경험은 도시의 일상을 벗어나 새로운 경험을 할 수 있는 특별한 스테이입니다. 평소와는 다른 환경에서 특별한 추억을 만들 수 있는 공간입니다.',
    accommodationAddress: '강원특별자치도 강릉시 새로운경험길 1212',
    accommodationAddressEnglish: '1212, Saeroun-gyeongheom-gil, Gangneung-si, Gangwon-do, Republic of Korea',
    bannerTitle: 'From. 새로운경험',
    bannerDescription: '새로운경험은 \'도시를 벗어나 만나는 새로운 경험\'이라는 의미를 담고 있다. 일상의 틀을 벗어나 새로운 환경에서 특별한 추억을 만들 수 있는 \'새로운 경험의 시간\'을 경험해 보자.',
    stayName: '새로운경험',
    stayType: '스테이',
    capacity: '3인 / 최대 4인',
    rooms: '2개',
    checkInOut: '15:00 / 11:00',
    address: '강원특별자치도 강릉시 새로운경험길 1212 (새로운경험동)',
    amenities: '새로운 시설, 체험 공간, 워크샵, 갤러리',
    additionalImages: [
      {
        src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
        alt: '체험 공간',
        description: '새로운경험의 체험 공간은 평소와는 다른 특별한 경험을 할 수 있는 공간입니다. 다양한 워크샵과 체험 프로그램을 통해 새로운 기술이나 취미를 배울 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop',
        alt: '갤러리',
        description: '새로운경험의 갤러리는 현대적인 예술 작품들을 감상할 수 있는 공간입니다. 지역 예술가들의 작품과 함께 특별한 문화 경험을 할 수 있습니다.'
      },
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
        alt: '워크샵',
        description: '새로운경험의 워크샵은 창작 활동을 할 수 있는 공간입니다. 다양한 재료와 도구를 사용하여 나만의 작품을 만들 수 있는 특별한 경험을 제공합니다.'
      }
    ]
  }
]

const Container = styled.div`
  min-height: 100vh;
  background: white;
`

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`

const MagazineHeader = styled.div`
  padding: 0;
  text-align: left;
  background: white;
`

const MagazineNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #000;
  margin: 0 0 16px 0;
`

const MagazineTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin: 0 0 16px 0;
  line-height: 1.3;
`

const MagazineSubtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0 0 12px 0;
`

const MagazineHashtags = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

const Hashtag = styled.span`
  font-size: 14px;
  color: #666;
  background: #f5f5f5;
  padding: 4px 8px;
  border-radius: 4px;
`

const MagazineDate = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
`

const ShareButton = styled.button`
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  position: absolute;
  top: 0;
  right: 0;
  
  &:hover {
    opacity: 0.7;
  }
`

const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;
`

const HeroImage = styled.img`
  width: 100%;
  height: 93vh;
  object-fit: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: zoomInOut 800ms ease-out;
  
  @keyframes zoomInOut {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 73%;
  left: 0;
  right: 0;
  width: 40%;
  margin: 0 auto;
  color: white;
`

const HeroNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`

const HeroTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  padding: 0 0 18px 0;
`

const HeroHashtags = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
`

const HeroHashtag = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 700;
`

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  margin: 12px 0;
`

const HeroDate = styled.div`
  font-size: 14px;
  color: white;
`

const DescriptionSection = styled.div`
  padding: 0 0 0 0;
  background: white;
  text-align: left;
  width: 40%;
  margin: 0 auto;
`

const DescriptionTitle = styled.h2`
  display: none;
`

const DescriptionText = styled.div`
  margin: 0 0 40px 0;
  font-size: 18px;
  line-height: 1.8;
  color: #000;
  
  p {
    margin: 0 0 24px 0;
  }
`

const AccommodationSection = styled.div`
  padding: 0 0 80px 0;
  background: white;
  width: 40%;
  margin: 0 auto;
`

const AccommodationItem = styled.div`
  margin-bottom: 80px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const AccommodationImage = styled.img`
  width: 100%;
  height: 430px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 40px;
`

const AccommodationInfo = styled.div`
  text-align: left;
`

const AccommodationName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 0 0 15px 0;
`

const AccommodationDescription = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
`

const AccommodationAddress = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 8px;
`

const AccommodationAddressEnglish = styled.div`
  font-size: 12px;
  color: #999;
  line-height: 1.3;
`

const InquiryButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background: white;
  border: none;
  border-radius: 40%;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  line-height: 1.2;
  font-weight: 700;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  }
`

const SeowajeongBanner = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=500&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const BannerContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  z-index: 5;
  width: 40%;
`

const BannerTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
`

const BannerDescription = styled.div`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 700;
`

const AccommodationInfoSection = styled.div`
  width: 100%;
  background: white;
  padding: 80px 0;
`

const InfoContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`

const MapSection = styled.div`
  width: 100%;
  height: 400px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DetailsTable = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`

const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  
  
  &:first-child {
    border-top: 1px solid #e0e0e0;
  }
`

const TableLabel = styled.div`
  width: 30%;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #a3a3a3;
  border-right: 1px solid #e0e0e0;
`

const TableValue = styled.div`
  width: 70%;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  background: white;
`

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`

const BookNowButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 1000px;
  cursor: pointer;
`

const InquiryButtonSmall = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`

const NavigationSection = styled.div`
  width: 40%;
  margin: 0 auto;
  background: white;
  padding: 40px 0;
  border-top: 1px solid #e0e0e0;
`

const NavigationContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`

const NavigationText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #333;
`

const NavigationButton = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #333;
  }
`

const AnimatedSection = styled.div<{ isVisible: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '30px'});
  transition: opacity 0.8s ease, transform 0.8s ease;
`

const MagazineDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [visibleSections, setVisibleSections] = React.useState<Set<string>>(new Set())
  
  // 매거진 데이터 찾기
  const magazine = magazineData.find(m => m.id === Number(id)) || magazineData[1] // 기본값으로 id 2 사용

  // 이전 매거진으로 이동
  const handlePrevious = () => {
    const currentNumber = parseInt(magazine.number)
    const nextNumber = currentNumber + 1
    const nextMagazine = magazineData.find(m => parseInt(m.number) === nextNumber)
    
    if (nextMagazine) {
      router.push(`/magazine/${nextMagazine.id}`)
    }
  }

  // 다음 매거진으로 이동
  const handleNext = () => {
    const currentNumber = parseInt(magazine.number)
    const prevNumber = currentNumber - 1
    const prevMagazine = magazineData.find(m => parseInt(m.number) === prevNumber)
    
    if (prevMagazine) {
      router.push(`/magazine/${prevMagazine.id}`)
    }
  }

  // Intersection Observer 설정
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, sectionId]))
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // 모든 애니메이션 섹션 관찰
    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <Container>
      <Header isScrolled={true} />
      
      <ContentWrapper>


        <HeroSection>
          <HeroImage 
            src={magazine.heroImage} 
            alt={magazine.title}
          />
          <HeroOverlay>
            <HeroNumber>{magazine.number}</HeroNumber>
            <HeroTitle>{magazine.title}</HeroTitle>
            <HeroHashtags>
              {magazine.hashtags.map((tag, index) => (
                <HeroHashtag key={index}>{tag}</HeroHashtag>
              ))}
            </HeroHashtags>
            <HorizontalLine />
            <HeroDate>{magazine.date}</HeroDate>
          </HeroOverlay>
        </HeroSection>

        <DescriptionSection>
          <DescriptionText>
            <p>
              {magazine.description}
            </p>
            <p>
              {magazine.accommodationDescription}
            </p>
          </DescriptionText>
        </DescriptionSection>

        <AnimatedSection 
          data-section="accommodation"
          isVisible={visibleSections.has('accommodation')}
        >
          <AccommodationSection>
          <AccommodationItem>
            <AccommodationImage 
              src={magazine.image} 
              alt={`${magazine.accommodationName} 외부 전경`}
            />
            <AccommodationInfo>
              <AccommodationName>{magazine.accommodationName}</AccommodationName>
              <AccommodationDescription>
                {magazine.accommodationDescription}
                <br /><br />
                전통 한옥의 아름다움을 현대적인 편의시설과 조화롭게 결합하여 
                손님들에게 편안하면서도 아름다운 숙박 경험을 제공합니다. 
                특히 아침에는 한옥 특유의 정갈한 아침 식사를 제공하며, 강릉의 유명한 
                커피거리와 해변까지 도보로 쉽게 이동할 수 있는 위치에 있어 
                강릉 여행의 베이스캠프로 활용하기에 완벽합니다.
              </AccommodationDescription>
              <AccommodationAddress>
                {magazine.accommodationAddress}
              </AccommodationAddress>
              <AccommodationAddressEnglish>
                {magazine.accommodationAddressEnglish}
              </AccommodationAddressEnglish>
            </AccommodationInfo>
          </AccommodationItem>

          {magazine.additionalImages?.map((item, index) => (
            <AccommodationItem key={index}>
              <AccommodationImage 
                src={item.src} 
                alt={`${magazine.accommodationName} ${item.alt}`}
              />
              <AccommodationInfo>
                <AccommodationDescription>
                  {item.description}
                </AccommodationDescription>
              </AccommodationInfo>
            </AccommodationItem>
          ))}
        </AccommodationSection>
        </AnimatedSection>

        <AnimatedSection 
          data-section="banner"
          isVisible={visibleSections.has('banner')}
        >
          <SeowajeongBanner>
          <BannerContent>
            <BannerText>
              <BannerTitle>{magazine.bannerTitle}</BannerTitle>
              <BannerDescription>
                {magazine.bannerDescription}
              </BannerDescription>
            </BannerText>
          </BannerContent>
        </SeowajeongBanner>
        </AnimatedSection>

        <AnimatedSection 
          data-section="info"
          isVisible={visibleSections.has('info')}
        >
          <AccommodationInfoSection>
          <InfoContainer>
            <MapSection>
                지도 영역
            </MapSection>

            <DetailsTable>
              <TableRow>
                <TableLabel>스테이명</TableLabel>
                <TableValue>{magazine.stayName}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel>타입</TableLabel>
                <TableValue>{magazine.stayType}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel>기준인원 / 최대인원</TableLabel>
                <TableValue>{magazine.capacity}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel>객실수</TableLabel>
                <TableValue>{magazine.rooms}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel>체크인 / 체크아웃</TableLabel>
                <TableValue>{magazine.checkInOut}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel>주소</TableLabel>
                <TableValue>{magazine.address}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel>부대시설</TableLabel>
                <TableValue>{magazine.amenities}</TableValue>
              </TableRow>
            </DetailsTable>

            <ActionButtons>
              <BookNowButton>예약하기</BookNowButton>
            </ActionButtons>
          </InfoContainer>
        </AccommodationInfoSection>
        </AnimatedSection>

        <AnimatedSection 
          data-section="navigation"
          isVisible={visibleSections.has('navigation')}
        >
          <NavigationSection>
          <NavigationContainer>
            <NavigationItem onClick={handlePrevious}>
              <NavigationButton>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </NavigationButton>
              <NavigationText>이전</NavigationText>
            </NavigationItem>
            
            <NavigationItem onClick={handleNext}>
              <NavigationText>다음</NavigationText>
              <NavigationButton>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </NavigationButton>
            </NavigationItem>
          </NavigationContainer>
        </NavigationSection>
        </AnimatedSection>

      </ContentWrapper>

      <InquiryButtonSmall>
        문의<br />하기
      </InquiryButtonSmall>
      
      <Footer />
    </Container>
  )
}

export default MagazineDetailPage
