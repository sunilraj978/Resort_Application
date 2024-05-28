import styled from 'styled-components'


const Styledhero  = styled.header`
min-height: 60vh;
display: flex;
align-items: center;                              
justify-content: center;
background-color: #cccccc;
background:url(${props=>props.img})
center/cover no-repeat
`;

export default Styledhero
