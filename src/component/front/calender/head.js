import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Head = (props) => {
  const { year, month, goToday, setMonth, setYear } = props;
  return (
    <Form>
      <Nav>
        <div class="col-md-9">
          <Year>
          {month} / {year}
          </Year>
        </div>
        <div class="col-md-3">
          <BtnBox>
            <Btn onClick={() => {
              if((month - 1 < 1)) {
                setYear(year -1);
                setMonth(12)
              }
              else {
                setMonth(month - 1)
              }
            }}>&lt;</Btn>
            <Btn width="20px" onClick={() => goToday()}>
              Hoy
            </Btn>
            <Btn onClick={() => {
              if((month + 1 > 12)) {
                setYear(year + 1);
                setMonth((month + 1)%12)
              }
              else {
                setMonth(month + 1)
              }
            }}>&gt;</Btn>
          </BtnBox>
        </div>
      </Nav>
      <Days>
        {DAY.map((elm, idx) => {
          return <Day key={idx}>{elm}</Day>;
        })}
      </Days>
    </Form>
  );
};

const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  border-radius: 2px;
`;
const Nav = styled.section`
  ${({ theme }) => theme.flexSet('space-between', 'center')}
  margin:.7vw;
`;
const Year = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const BtnBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center')}
  margin: 0 1vw 0 0;
  width: 6vw;
`;
const Btn = styled.li`
  padding: 0.2vw 0.2vw 0.1vw;
  width: ${(props) => {
    return props.width || '1.3vw';
  }};
  border-radius: 5px;
  text-align: center;
  font-size: 0.78rem;
  cursor: pointer;
`;
const Days = styled.div`
  display: flex;
  margin-bottom: 0.5vw;
`;
const Day = styled.li`
  padding-right: 1.5vw;
  width: calc(100% / 7);
  text-align: right;
  :nth-child(7n + 1),
  :nth-child(7n) {
    color: #969696;
  }
`;

const DAY = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
export default Head;