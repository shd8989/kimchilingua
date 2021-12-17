import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Dates from './dates';
import axios from 'axios';
import { db } from "../../common/firebase";

const Body = (props) => {
  const { totalDate, today, month, year } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  const [holiday, setHoliday] = useState([0]);
  const [evtList, setEvtList] = useState([]);

  //today
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;
  const runAxios = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/?solYear=${year}&solMonth=${month}`,
        requestOptions
      );
      console.log(res.data);
      setHoliday(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = useCallback(() => {
    // 받아온 데이터를 저장할 배열
    let evtData = [];

    // firestore.js에서 가져온 firestore 객체
    db
        .collection("schedule") //  "tasks" 컬렉션 반환
        .get() // "tasks" 컬렉션의 모든 다큐먼트를 갖는 프로미스 반환
        .then((docs) => {
        // forEach 함수로 각각의 다큐먼트에 함수 실행
        docs.forEach((doc) => {
            // data(), id로 다큐먼트 필드, id 조회
            evtData.push({ evtList: doc.data().evtList, id: doc.id });
        });
        // tasks state에 받아온 데이터 추가
        setEvtList((preEvt) => preEvt.concat(evtData[0].evtList));
    });
  }, []);

  // 최초 렌더링 이후에 실행하기 위해 useEffect 내부에서 함수 실행
  useEffect(() => {
      fetchData();
  }, [fetchData]);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
  };

  useEffect(() => {
    runAxios();
  }, [month]);
  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            elm={(elm < 10 ? '0'+elm : elm)}
            findToday={findToday === idx && month === getMonth && findToday}
            month={(month < 10 ? '0'+month : month)}
            year={year}
            holiday={holiday.item}
            evtData={evtList}
          ></Dates>
        );
      })}
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export default Body;