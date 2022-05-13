import styled from "styled-components"

const Container = styled.div`
    height: 20px;
    padding: .9rem;
    font-size: 14px;
    font-weight: bold;
    background-color: teal;
    color: white;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
`
function Announcment() {
  return (
    <Container>Get everything FREE for limited time!</Container>
  )
}

export default Announcment