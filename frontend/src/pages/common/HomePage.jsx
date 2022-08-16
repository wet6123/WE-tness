import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box, Modal, TextField, Fab } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ClearIcon from '@mui/icons-material/Clear';
import Banner from '../../components/home/Banner';
import RankingPreview from '../../components/home/RankingPreview';
import RoomList from '../../components/home/RoomList';
import RoomFilter1 from '../../components/home/RoomFilter1';
import RoomFilter2 from '../../components/home/RoomFilter2';
import FormBox from '../../components/common/auth/FormBox';
import InputBox from '../../components/common/auth/InputBox';
import SubmitBtn from '../../components/common/SubmitBtn';
import { checkNickname, addInfo, toggleIsModal } from '../../features/user/SignupSlice';
import { fetchTitle, fetchPassword, createRoom, fetchWorkoutId, setNowRoom } from '../../features/room/RoomSlice';
import { removeSessionInfo } from '../../features/Token';
import workoutItems from '../../assets/data/workoutItems';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid var(--primary-color)',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const addStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid var(--primary-color)',

  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
  color: 'white',
  backgroundColor: 'var(--primary-color)',
  '&:hover': {
    bgcolor: 'var(--primary-color)',
    color: '#d5d8d8',
  },
};

const closeStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  '&:hover': {
    cursor: 'pointer',
    opacity: '80%',
  },
};

const WorkoutImgBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > img:hover {
    cursor: pointer;
  }
`;

const WorkoutImg = styled.img`
  width: 25%;
  border: ${props => (props.active ? '5px double var(--primary-color)' : '')};
  filter: ${props => (props.active ? '' : 'blur(2px) grayscale(90%)')};
  border-radius: 5px;
`;

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    removeSessionInfo();
  }, []);

  function onCreate(e) {
    const arg = {
      title: roomInfo.title,
      locked: !!roomInfo.password,
      workout: roomInfo.workoutId,
    };
    dispatch(setNowRoom(arg));
    e.preventDefault();
    const payload = {
      workoutId: roomInfo.workoutId,
      title: roomInfo.title,
      password: roomInfo.password,
    };
    dispatch(createRoom(payload)).then(res => navigate('/room'));
  }

  // 방 생성 관련
  const [isAddRoom, setIsAddRoom] = useState(false);
  const roomInfo = useSelector(state => state.room.roomInfo);
  function onOpen(e) {
    setIsAddRoom(true);
  }
  function onClose(e) {
    setIsAddRoom(false);
  }
  function onTitleHandler(e) {
    e.preventDefault();
    dispatch(fetchTitle(e.target.value));
  }
  function onWorkoutHandler(workoutId) {
    dispatch(fetchWorkoutId(workoutId));
  }
  function onPasswordHandler(e) {
    e.preventDefault();
    dispatch(fetchPassword(e.target.value));
  }
  function onSubmitRoom(e) {
    e.preventDefault();
  }

  // 추가정보 모달 관련
  const isModal = useSelector(state => state.signup.isModal);
  const isPossibleNickname = useSelector(state => state.user.isPossibleNickname);
  const [nickname, setNickname] = useState('');
  const [isCheckNN, setIsCheckNN] = useState(false);

  // 모달 닫기 테스트버튼
  function handleClose() {
    dispatch(toggleIsModal());
  }

  function onNicknameHandler(e) {
    setNickname(e.target.value);
  }

  function onCheckNicknameHandler(e) {
    e.preventDefault();
    const payload = nickname;
    setIsCheckNN(true);
    dispatch(checkNickname(payload));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const payload = nickname;
    console.log(payload);
    dispatch(addInfo(payload))
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <div>
        <Banner />
        <RankingPreview />
        <>
          {/* 운동 목록 */}
          <RoomFilter1 />
          {/* 비밀방 여부 */}
          <RoomFilter2 />
        </>
        <RoomList />
      </div>

      {/* 카카오 로그인 추가정보 입력 모달 */}
      <Modal open={isModal} onClose={handleClose}>
        <Box sx={style}>
          <ClearIcon sx={closeStyle} onClick={handleClose}></ClearIcon>
          <FormBox>
            <SubmitForm onSubmit={onSubmitHandler}>
              <h1>추가 정보 입력</h1>
              <InputBox>
                <TextField
                  error={isCheckNN && !isPossibleNickname}
                  label="*닉네임"
                  value={nickname}
                  onChange={onNicknameHandler}
                  helperText={
                    isCheckNN ? (isPossibleNickname ? '사용 가능한 닉네임입니다.' : '사용중인 닉네임입니다.') : null
                  }
                />
              </InputBox>
              {nickname ? (
                <SubmitBtn onClick={onCheckNicknameHandler}>닉네임 확인</SubmitBtn>
              ) : (
                <SubmitBtn disabled deactive={!nickname}>
                  닉네임확인
                </SubmitBtn>
              )}
              <SubmitBtn disabled={!isCheckNN || !isPossibleNickname} deactive={!isCheckNN || !isPossibleNickname}>
                제출
              </SubmitBtn>
            </SubmitForm>
          </FormBox>
        </Box>
      </Modal>

      {/* 방 생성 모달 */}
      <Modal open={isAddRoom} onClose={onClose}>
        <Box sx={addStyle}>
          <ClearIcon sx={closeStyle} onClick={onClose}></ClearIcon>
          <FormBox>
            <SubmitForm onSubmit={onSubmitRoom}>
              <p>방 만들기</p>
              <WorkoutImgBox>
                {workoutItems.map(workout => {
                  if (workout.id !== 0 && workout.img) {
                    return (
                      <WorkoutImg
                        key={workout.id}
                        src={workout.img}
                        alt="workout.id번 운동"
                        onClick={() => onWorkoutHandler(workout.id)}
                        active={workout.id === roomInfo.workoutId}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </WorkoutImgBox>
              <InputBox>
                <TextField label="방 제목" value={roomInfo.title} onChange={onTitleHandler} />
              </InputBox>
              <InputBox>
                <TextField label="방 비밀번호" value={roomInfo.password} onChange={onPasswordHandler} />
              </InputBox>
              <SubmitBtn disabled={false} deactive={false} onClick={onCreate}>
                방 생성하기
              </SubmitBtn>
            </SubmitForm>
          </FormBox>
        </Box>
      </Modal>

      {/* 방 생성 버튼 */}
      {isAuthenticated ? (
        <Fab variant="extended" sx={fabStyle} onClick={onOpen}>
          <SportsEsportsIcon style={{ marginRight: '5px' }} />
          <p>방 만들기</p>
        </Fab>
      ) : null}
    </div>
  );
}
