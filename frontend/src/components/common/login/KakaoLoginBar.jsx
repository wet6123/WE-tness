import styled from 'styled-components';
import kakaoImg from '../../../images/kakao/kakao_login_medium_wide.png'

const KakaoLoginBar = styled.img.attrs({
  src: `${kakaoImg}`
})`
  color: transparent;
  width: 300px;
  height: 45px;
`

export default KakaoLoginBar;