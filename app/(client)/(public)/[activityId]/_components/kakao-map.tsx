'use client';

import { useEffect } from 'react';
import MapImg from '@/public/map.png';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  address: string;
}

interface AddressSearchResult {
  address?: string;
  x: number;
  y: number;
}

type AddressSearchStatus = 'OK' | 'ZERO_RESULT' | 'ERROR';

export default function KakaoMap({ address }: Props) {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      onLoadKakaoMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.async = true;
      mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e415c78ee2db9fc2249f1227e3fb0c2f&autoload=false&libraries=services,clusterer,drawing`;
      document.head.appendChild(mapScript);

      mapScript.addEventListener('load', onLoadKakaoMap);

      return () => {
        mapScript.removeEventListener('load', onLoadKakaoMap);
        document.head.removeChild(mapScript);
      };
    }
  }, [address]);

  const onLoadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      if (!mapContainer) return;

      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const imageSrc: string = MapImg.src;
      const imageSize = new window.kakao.maps.Size(48);
      const imageOption = { offset: new window.kakao.maps.Point(24, 48) };
      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        address,
        (result: AddressSearchResult[], status: AddressSearchStatus) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
              image: markerImage,
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px; font-size:10px; color:#333;">
                        <span style="font-weight:bold;">위치</span><br>
                        <span style="color:#777;">${address}</span></div>`,
            });
            infowindow.open(map, marker);

            map.setCenter(coords);
          } else {
            console.error('지도 검색에 실패했습니다:', status);
          }
        },
      );
    });
  };

  return <div id="map" className="w-[790px] h-[450px] rounded-[16px]" />;
}
