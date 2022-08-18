import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cam1 from '../../assets/images/tutorial/cam1.png';
import cam2 from '../../assets/images/tutorial/cam2.png';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const BigTittle = styled.div`
  margin: 0px 0px 15px 0px;
  font-size: 40px;
  font-weight: 800;
`;

const Tittle = styled.div`
  margin: 15px 0px;
  font-size: 25px;
  font-weight: 800;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgCard = styled.div`
  width: 1090px;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  > * {
    width: 100%;
  }
`;

const tittle = ['Camera Setting', 'Posture'];
const workout = ['스쿼트', '팔굽혀펴기', '버피', '런지'];
const article = [
  [cam1, cam2, '스쿼트3', '스쿼트4'],
  [cam1, cam2, '팔굽2'],
  [cam1, cam2, '버피2'],
  [cam1, cam2, '런지2'],
];

export default function TutorialPage() {
  const [nowIdx, setNowIdx] = useState(0);
  const [nowWorkout, setNowWorkout] = useState(0);

  const handler = (e, idx) => {
    setNowIdx(0);
    setNowWorkout(idx);
  };

  const handleNext = () => {
    setNowIdx(nowIdx + 1);
    if (article[nowWorkout].length - 1 <= nowIdx) setNowIdx(0);
  };

  const handlePrev = () => {
    setNowIdx(nowIdx - 1);
    if (0 >= nowIdx) setNowIdx(article[nowWorkout].length - 1);
  };

  return (
    <Box>
      <BigTittle>TUTORIAL</BigTittle>
      <div>
        {/* 버튼 */}
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          {workout.map((e, idx) =>
            nowWorkout === idx ? (
              <Button key={idx} onClick={() => handler(e, idx)} variant="contained">
                {e}
              </Button>
            ) : (
              <Button key={idx} onClick={() => handler(e, idx)}>
                {e}
              </Button>
            )
          )}
        </ButtonGroup>
      </div>
      {nowIdx <= 1 ? <Tittle>{tittle[0]}</Tittle> : <Tittle>{tittle[1]}</Tittle>}
      <Buttons>
        <Button onClick={() => handlePrev()}>
          <ArrowBackIosNewIcon />
        </Button>
        <ImgCard>
          <img src={article[nowWorkout][nowIdx]} alt="" />
        </ImgCard>
        <Button onClick={() => handleNext()}>
          <ArrowForwardIosIcon />
        </Button>
      </Buttons>
    </Box>
  );
}
