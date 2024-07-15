export default function ReservationContainer() {
  return (
    <div>
      <h1>
        <b>₩ price</b>/ 인
      </h1>
      <div>
        <div>
          <h2>날짜</h2>
          <div>calendar</div>
        </div>
        <div>
          <h3>예약 가능한 시간</h3>
          <ul>
            <li>available time</li>
          </ul>
        </div>
      </div>
      <div>
        <h2>참여 인원 수</h2>
        <form>
          <input type="number" />
          <button type="submit">예약하기</button>
        </form>
      </div>
      <div>
        <h2>총 합계</h2>
        <p>₩ total price</p>
      </div>
    </div>
  );
}
